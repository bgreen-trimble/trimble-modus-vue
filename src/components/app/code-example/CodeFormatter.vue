<script setup lang="ts">
import { ref, onMounted, useSlots } from 'vue';
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

const props = defineProps<{
    language: string,
    code?: string
}>();

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
        } catch (error) {
            console.error('Error formatting code:', error);
            formattedCode.value = stringContent;
        }
    }
});
</script>

<template>
    <div class="code-formatter">
        <pre><code v-html="formattedCode" class="language-markup"></code></pre>
    </div>
</template>

<style>
.code-formatter {
    border-radius: 0.5rem;
    background: #1e1e1e !important;
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
