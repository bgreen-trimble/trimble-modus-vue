<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import './code-example.css'
import { CodeFormatter } from '.'
import 'prismjs'
import 'prismjs/themes/prism.css'
// Import additional languages
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

const props = defineProps<{
  title?: string
  language: "html" | "css" | "typescript" | "vue" | "javascript"
}>()

const formatterRef = ref<InstanceType<typeof CodeFormatter> | null>(null)
const codeRef = ref<HTMLElement | null>(null)

const onFormatted = (code: string) => {
  if (codeRef.value && window.Prism) {
    const grammar = window.Prism.languages[props.language]
    if (grammar) {
      const highlightedCode = window.Prism.highlight(code, grammar, props.language)
      codeRef.value.innerHTML = highlightedCode
    }
  }
}

onMounted(() => {
  if (codeRef.value && formatterRef.value?.formattedCode) {
    const code = formatterRef.value.formattedCode
    const language = props.language || 'markup'
    const grammar = window.Prism.languages[language]

    if (grammar) {
      const highlightedCode = window.Prism.highlight(code, grammar, language)
      codeRef.value.innerHTML = highlightedCode
    }
  }
})

watch(() => formatterRef.value?.formattedCode, () => {
  if (codeRef.value && formatterRef.value?.formattedCode) {
    const code = formatterRef.value.formattedCode
    const language = props.language || 'markup'
    const grammar = window.Prism.languages[language]

    if (grammar) {
      const highlightedCode = window.Prism.highlight(code, grammar, language)
      codeRef.value.innerHTML = highlightedCode
    }
  }
})
</script>

<template>
  <div class="tm-code-example">
    <div v-if="title" class="tm-code-example-title">
      {{ title }}
    </div>
    <div class="tm-code-example-content">
      <pre><code ref="codeRef" :class="`language-${language}`"></code></pre>
      <CodeFormatter ref="formatterRef" :language="language" @update:formatted="onFormatted">
        <slot></slot>
      </CodeFormatter>
    </div>
  </div>
</template>
