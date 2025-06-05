<script setup lang="ts">
import { ref, onMounted, useSlots } from 'vue';
import * as prettier from 'prettier/standalone';
import * as parserHTML from 'prettier/parser-html';
import * as parserTypescript from 'prettier/parser-typescript';
import * as parserBabel from 'prettier/parser-babel';
import pluginEstree from "prettier/plugins/estree";
import prettierPluginVue from 'prettier-plugin-vue';

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
        console.log('String content:', stringContent);

        try {
            const formatted = await prettier.format(stringContent, {
                parser: 'babel-ts',
                semi: false,
                plugins: [pluginEstree, parserHTML, parserTypescript, parserBabel, prettierPluginVue]
            })
            .then((result) => {
                return prettier.format(result, {
                    parser: 'vue',
                    semi: false,
                    plugins: [parserHTML, parserTypescript, parserBabel, prettierPluginVue]
                });
            });
            console.log('Formatted content:', formatted);
            formattedCode.value = formatted;
        } catch (error) {
            console.error('Error formatting code:', error);
            console.log('Original content:', content);
            formattedCode.value = stringContent; // Fallback to original content if formatting fails
        }
    }
});
</script>

<template>
    <pre><code>{{ formattedCode }}</code></pre>
</template>
