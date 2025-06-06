<script setup lang="ts">
import { ref, onMounted, useSlots, computed } from 'vue';
import * as prettier from 'prettier/standalone';
import * as parserHTML from 'prettier/parser-html';
import * as parserTypescript from 'prettier/parser-typescript';
import * as parserBabel from 'prettier/parser-babel';
import pluginEstree from "prettier/plugins/estree";
import prettierPluginVue from 'prettier-plugin-vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const slots = useSlots();
const formattedCode = ref('');
const isExpanded = ref(false);
const lineCount = ref(0);

const props = defineProps<{
    language: string,
    code?: string
}>();

const displayedCode = computed(() => {
    if (isExpanded.value || lineCount.value <= 5) {
        return formattedCode.value;
    }
    
    // Split by line, take first 5 lines, and join back
    const lines = formattedCode.value.split('\n');
    return lines.slice(0, 5).join('\n');
});

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
};

onMounted(async () => {
    let content = '';

    if (props.code) {
        content = props.code;
    } else {
        const defaultSlot = slots.default?.();
        if (defaultSlot && defaultSlot.length > 0) {
            content = defaultSlot[0].children as string || '';
        }
    }

    if (content) {
        // Ensure content is a string
        const stringContent = String(content).trim();

        try {
            const formatted = await prettier.format(stringContent, {
                parser: 'babel-ts',
                plugins: [pluginEstree, parserHTML, parserTypescript, parserBabel, prettierPluginVue]
            });

            const language = 'markup';
            const grammar = Prism.languages[language];
            if (!grammar) {
                console.error('Grammar not found for language:', language);
                formattedCode.value = formatted;
            } else {
                formattedCode.value = Prism.highlight(formatted, grammar, language);
            }
            
            // Count lines in the formatted code
            lineCount.value = formatted.split('\n').length;
        } catch (error) {
            console.error('Error formatting code:', error);
            formattedCode.value = stringContent;
            lineCount.value = stringContent.split('\n').length;
        }
    }
});
</script>

<template>
    <div class="code-formatter px-2">
        <pre><code v-html="displayedCode" class="language-markup"></code></pre>
        <div v-if="lineCount > 5" class="expand-control" @click="toggleExpand">
            <button class="expand-button">
                {{ isExpanded ? 'Show Less' : 'Show More' }}
            </button>
        </div>
    </div>
</template>

<style>
.code-formatter {
    border-radius: 0.5rem;
    background: #1e1e1e !important;
    position: relative;
}

.code-formatter pre {
    overflow-x: auto;
    margin: 0;
    white-space: pre;
}

/* Expand/collapse controls */
.expand-control {
    text-align: center;
    padding: 0.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.expand-button {
    background: transparent;
    color: #60a5fa;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}

.expand-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* Custom scrollbar styles */
.code-formatter pre::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

.code-formatter pre::-webkit-scrollbar-track {
    background: #1e1e1e;
}

.code-formatter pre::-webkit-scrollbar-thumb {
    background-color: #4a4a4a;
    border-radius: 6px;
    border: 3px solid #1e1e1e;
}

code[class*="language-"],
pre[class*="language-"] {
    text-shadow: none !important;
}

code[class*="language-"],
pre[class*="language-"] {
    font-family: "Fira Code", "Courier New", monospace;
}

code[class*="language-"],
pre[class*="language-"] {
    font-family: "Fira Code", "Courier New", monospace;
}

pre[class*="language-"] {
    background: #1e1e1e !important;
    color: white;
}

pre[class*="language-"] {
    background: #1e1e1e !important;
    color: #ffffff !important;
}

.token.tag {
  color: #4a90e2 !important; 
}

.token.attr-name {
  color: white; 
}

</style>
