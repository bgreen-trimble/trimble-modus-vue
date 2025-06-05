<script setup lang="ts">
import { ref, onMounted, watch, useSlots } from 'vue';
import prettier from "https://unpkg.com/prettier@3.2.5/standalone.mjs";
import parserHtml from "https://unpkg.com/prettier@3.2.5/plugins/html.mjs";
import parserCss from "https://unpkg.com/prettier@3.2.5/plugins/postcss.mjs";
import parserTypescript from "https://unpkg.com/prettier@3.2.5/plugins/typescript.mjs";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

// Props
// Props
const props = defineProps<{
    language: "html" | "css" | "typescript" | "vue" | "javascript",
    code?: string
}>();

const rawCode = ref("");
const codeRef = ref<HTMLElement | null>(null);

onMounted(() => {
    // If code prop is provided, use that
    if (props.code) {
        rawCode.value = props.code;
        return;
    }

    // Otherwise, try to get the textContent of the default slot
    const slotContainer = document.querySelector('.tm-code-slot');
    console.log('slotContainer:', slotContainer);
    if (slotContainer) {
        // Get the raw HTML, removing the outermost div that wraps the slot
        const slotHtml = slotContainer.innerHTML;
        const content = slotHtml
            .replace(/^\s*<div[^>]*>([\s\S]*)<\/div>\s*$/, '$1') // Remove outer div if present
            .replace(/^\s+|\s+$/g, '') // Trim start/end but preserve internal whitespace
            .replace(/\n\s+$/gm, '\n') // Remove whitespace at end of lines
            .replace(/^\s+\n/gm, '\n'); // Remove whitespace at start of lines
        
        rawCode.value = content;
    }

        console.log('onMounted:', rawCode.value);

});

watch([rawCode], async () => {
    console.log('watch:', rawCode.value);
    if (!rawCode.value || !codeRef.value) return;

    try {
        // Determine the parser based on language
        const parser = props.language === 'css' ? 'css' :
            props.language === 'vue' || props.language === 'html' ? 'html' :
            'typescript';
        
        // Format the code
        const formattedCode = await prettier.format(rawCode.value, {
            parser,
            plugins: [parserHtml, parserCss, parserTypescript],
            semi: true,
            singleQuote: true,
            printWidth: 80,
        });

        // Set the formatted code and apply syntax highlighting
        codeRef.value.textContent = formattedCode;
        Prism.highlightElement(codeRef.value);
    } catch (error) {
        console.error('Error formatting code:', error);
        // Fallback to unformatted code with highlighting
        codeRef.value.textContent = rawCode.value;
        Prism.highlightElement(codeRef.value);
    }
}, { immediate: true });
</script>

<template>
    <div class="tm-code-example-content">
        <pre class="tm-code-block"><code ref="codeRef" :class="`language-${props.language}`"></code></pre>
        <div class="tm-code-slot" style="display: none"><slot></slot></div>
    </div>
</template>

<style scoped>
.tm-code-example-content {
    position: relative;
    margin: 1rem 0;
}

.tm-code-block {
    margin: 0;
    padding: 1rem;
    border-radius: 4px;
    background-color: #f5f5f5;
    overflow-x: auto;
}

code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    font-size: 14px;
    line-height: 1.5;
}
</style>
