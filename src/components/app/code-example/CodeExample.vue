<script setup lang="ts">
import { ref, onMounted, useSlots, computed } from 'vue';
import * as prettier from 'prettier/standalone';
import * as parserHTML from 'prettier/parser-html';
import * as parserTypescript from 'prettier/parser-typescript';
import * as parserBabel from 'prettier/parser-babel';
import pluginEstree from "prettier/plugins/estree";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const slots = useSlots();
const formattedCode = ref('');
const isExpanded = ref(false);
const copyCode = ref('');
const copySuccess = ref(false);
const lineCount = ref(0);

const props = defineProps<{
    language: string,
    code?: string
}>();

const codeHeight = computed(() => {
    if (isExpanded.value) {
        return '100%';
    }
    // For 5 or fewer lines, show all content
    if (lineCount.value <= 5) {
        return 'auto';
    }
    // Default collapsed height
    return '192px';
});

const toggleExpand = () => {
    isExpanded.value = !isExpanded.value;
    console.log('Toggle expand:', isExpanded.value, 'Height:', codeHeight.value, 'Lines:', lineCount.value);
};

const copyToClipboard = () => {
    if (copyCode.value) {
        navigator.clipboard.writeText(copyCode.value)
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
                semi: false,
                plugins: [pluginEstree, parserHTML, parserTypescript, parserBabel]
            }).then(result => {
                const trimmed = result.trim();
                return result.trim().startsWith(';') ? trimmed.slice(1).trimStart() : trimmed;
            });

            copyCode.value = formatted; // Store code for copying
            console.log('Formatted code:', formatted);

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
            console.log('Line count:', lineCount.value);
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
        <pre :style="{ maxHeight: codeHeight }" class="p-2"><code v-html="formattedCode" class="language-markup"></code></pre>
        <div v-if="lineCount > 5 && !isExpanded" class="code-gradient"></div>
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
    overflow-y: auto;
    margin: 0;
    white-space: pre;
    transition: max-height 0.3s ease;
    min-height: 24px; /* Ensure at least some content is visible */
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

.code-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to bottom, rgba(30, 30, 30, 0), rgba(30, 30, 30, 1));
    pointer-events: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
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
