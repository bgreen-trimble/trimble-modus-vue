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
const prettyCode = ref('');
const copySuccess = ref(false);

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

const copyToClipboard = () => {
    if (prettyCode.value) {
        navigator.clipboard.writeText(prettyCode.value)
            .then(() => {
                copySuccess.value = true;
                setTimeout(() => {
                    copySuccess.value = false;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
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
                plugins: [pluginEstree, parserHTML, parserTypescript, parserBabel]
            });

            console.log('Formatted code:', formatted);

            const language = 'markup';
            const grammar = Prism.languages[language];
            if (!grammar) {
                console.error('Grammar not found for language:', language);
                formattedCode.value = formatted;
            } else {
                formattedCode.value = Prism.highlight(formatted, grammar, language);
            }

            prettyCode.value = formattedCode.value; // Store original code for copying
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
        <div class="toolbar">
            <button v-if="lineCount > 5" class="toolbar-button" @click="toggleExpand" title="Toggle code view">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"
                        fill="currentColor" />
                </svg>
                <span class="sr-only">{{ isExpanded ? 'Show Less' : 'Show More' }}</span>
            </button>
            <button class="toolbar-button ml-2" @click="copyToClipboard" title="Copy code">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
                        fill="currentColor" />
                </svg>
                <span v-if="copySuccess" class="copy-tooltip">Copied!</span>
                <span class="sr-only">Copy code</span>
            </button>
        </div>
        <pre><code v-html="displayedCode" class="language-markup"></code></pre>
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
.toolbar {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    display: flex;
}

.toolbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(30, 30, 30, 0.8);
    color: #60a5fa;
    border: none;
    border-radius: 4px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.2s ease;
}

.toolbar-button:hover {
    background-color: rgba(60, 60, 60, 0.9);
}

.toolbar-button.ml-2 {
    margin-left: 0.5rem;
}

.copy-tooltip {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    background-color: rgba(30, 30, 30, 0.9);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
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
