<script setup lang="ts">
import { ref, onMounted } from 'vue'
import './code-example.css'
import 'prismjs'
import 'prismjs/themes/prism.css'
// Import additional languages
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

const props = defineProps<{
  title?: string
  language?: string
}>()

const codeRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (codeRef.value && window.Prism) {
    const code = codeRef.value.textContent?.trim() || ''
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
      <pre><code ref="codeRef" :class="`language-${language}`"><slot></slot></code></pre>
    </div>
  </div>
</template>

