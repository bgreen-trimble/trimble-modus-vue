<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components';

// Available tooltip positions for the example
const positions = ['top', 'right', 'bottom', 'left'];
const themes = ['light', 'dark'];

// Example configuration values
const position = ref('top');
const theme = ref('light');
const delay = ref(0);
const content = ref('This is a tooltip');

// Example of the code for the selected configuration
const exampleCode = computed(() => {
  if (position.value === 'top' && theme.value === 'light' && delay.value === 0) {
    return `<button v-tooltip="${content.value}">Hover Me</button>`;
  }
  
  return `<button v-tooltip="{
  content: '${content.value}',
  position: '${position.value}',
  theme: '${theme.value}'${delay.value > 0 ? `,
  delay: ${delay.value}` : ''}
}">Hover Me</button>`;
});
</script>

<template>
  <div class="tm-container">
    <!-- Header Section -->
    <div class="showcase-header mb-6">
      <h1 class="tm-h1 mb-2">Tooltip Directive</h1>
      <p class="tm-body mb-6">
        The tooltip directive provides a simple way to add tooltips to any element.
        Tooltips can be positioned, themed, and delayed to suit your application's needs.
      </p>
    </div>

    <!-- Basic Usage -->
    <section class="showcase-section mb-8">
      <h2 class="tm-h2 mb-4">Basic Usage</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="tm-h3 mb-2">Simple String Tooltip</h3>
          <p class="tm-body mb-4">
            For basic usage, simply pass a string to the v-tooltip directive.
          </p>
          
          <div class="example-container p-6 flex flex-wrap gap-4">
            <Button v-tooltip="'This is a simple tooltip'" variant="filled">
              Hover Me
            </Button>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
            <code class="block whitespace-pre-wrap">
&lt;Button v-tooltip="'This is a simple tooltip'" variant="filled"&gt;
  Hover Me
&lt;/Button&gt;
            </code>
          </div>
        </div>
        
        <div>
          <h3 class="tm-h3 mb-2">Object Configuration</h3>
          <p class="tm-body mb-4">
            For more control, pass an object with configuration options.
          </p>
          
          <div class="example-container p-6 flex flex-wrap gap-4">
            <Button 
              v-tooltip="{ 
                content: 'Configured tooltip', 
                position: 'right', 
                theme: 'dark' 
              }" 
              variant="outlined">
              Configured Tooltip
            </Button>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
            <code class="block whitespace-pre-wrap">
&lt;Button 
  v-tooltip="{ 
    content: 'Configured tooltip', 
    position: 'right', 
    theme: 'dark' 
  }" 
  variant="outlined"&gt;
  Configured Tooltip
&lt;/Button&gt;
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Positions -->
    <section class="showcase-section mb-8">
      <h2 class="tm-h2 mb-4">Tooltip Positions</h2>
      <p class="tm-body mb-4">
        Tooltips can be positioned around the element. Available positions are: top, right, bottom, and left.
      </p>
      
      <div class="example-container p-6">
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <Button 
            v-for="pos in positions" 
            :key="pos" 
            v-tooltip="{ content: `${pos.charAt(0).toUpperCase() + pos.slice(1)} tooltip`, position: pos }" 
            variant="outlined" 
            :severity="position === pos ? 'primary' : 'secondary'"
            @click="position = pos">
            {{ pos.charAt(0).toUpperCase() + pos.slice(1) }}
          </Button>
        </div>
        
        <div class="flex justify-center">
          <Button 
            v-tooltip="{ content: 'Position example', position }" 
            variant="filled">
            Hover for {{ position }} tooltip
          </Button>
        </div>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <code class="block whitespace-pre-wrap">
&lt;Button v-tooltip="{ content: 'Position example', position: '{{ position }}' }" variant="filled"&gt;
  Hover for {{ position }} tooltip
&lt;/Button&gt;
        </code>
      </div>
    </section>

    <!-- Themes -->
    <section class="showcase-section mb-8">
      <h2 class="tm-h2 mb-4">Tooltip Themes</h2>
      <p class="tm-body mb-4">
        Tooltips support light and dark themes to match your application's design.
      </p>
      
      <div class="example-container p-6">
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <Button 
            v-for="t in themes" 
            :key="t" 
            v-tooltip="{ content: `${t.charAt(0).toUpperCase() + t.slice(1)} theme`, theme: t }" 
            variant="outlined" 
            :severity="theme === t ? 'primary' : 'secondary'"
            @click="theme = t">
            {{ t.charAt(0).toUpperCase() + t.slice(1) }}
          </Button>
        </div>
        
        <div class="flex justify-center">
          <Button 
            v-tooltip="{ content: 'Theme example', theme }" 
            variant="filled">
            Hover for {{ theme }} theme
          </Button>
        </div>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <code class="block whitespace-pre-wrap">
&lt;Button v-tooltip="{ content: 'Theme example', theme: '{{ theme }}' }" variant="filled"&gt;
  Hover for {{ theme }} theme
&lt;/Button&gt;
        </code>
      </div>
    </section>

    <!-- Delay -->
    <section class="showcase-section mb-8">
      <h2 class="tm-h2 mb-4">Tooltip Delay</h2>
      <p class="tm-body mb-4">
        You can add a delay before the tooltip appears, which can be useful for preventing accidental triggering.
      </p>
      
      <div class="example-container p-6">
        <div class="flex flex-wrap items-center gap-4 mb-6">
          <span class="tm-body">Delay: {{ delay }}ms</span>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            step="100" 
            v-model.number="delay"
            class="w-64">
        </div>
        
        <div class="flex justify-center">
          <Button 
            v-tooltip="{ content: 'Delayed tooltip', delay }" 
            variant="filled">
            Hover for delayed tooltip
          </Button>
        </div>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <code class="block whitespace-pre-wrap">
&lt;Button v-tooltip="{ content: 'Delayed tooltip', delay: {{ delay }} }" variant="filled"&gt;
  Hover for delayed tooltip
&lt;/Button&gt;
        </code>
      </div>
    </section>

    <!-- Custom Configuration -->
    <section class="showcase-section mb-8">
      <h2 class="tm-h2 mb-4">Custom Configuration</h2>
      <p class="tm-body mb-4">
        Try different combinations of options to see how they work together.
      </p>
      
      <div class="example-container p-6">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label class="tm-body block mb-2">Content:</label>
            <input 
              type="text" 
              v-model="content"
              class="w-full p-2 border border-tm-gray-2 dark:border-tm-gray-8 rounded">
          </div>
          
          <div>
            <label class="tm-body block mb-2">Position:</label>
            <select 
              v-model="position"
              class="w-full p-2 border border-tm-gray-2 dark:border-tm-gray-8 rounded">
              <option v-for="pos in positions" :key="pos" :value="pos">
                {{ pos.charAt(0).toUpperCase() + pos.slice(1) }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="tm-body block mb-2">Theme:</label>
            <select 
              v-model="theme"
              class="w-full p-2 border border-tm-gray-2 dark:border-tm-gray-8 rounded">
              <option v-for="t in themes" :key="t" :value="t">
                {{ t.charAt(0).toUpperCase() + t.slice(1) }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="tm-body block mb-2">Delay: {{ delay }}ms</label>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              step="100" 
              v-model.number="delay"
              class="w-full">
          </div>
        </div>
        
        <div class="flex justify-center mb-4">
          <Button 
            v-tooltip="{ content, position, theme, delay }" 
            variant="filled">
            Try your custom tooltip
          </Button>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <code class="block whitespace-pre-wrap">{{ exampleCode }}</code>
        </div>
      </div>
    </section>

    <!-- Accessibility -->
    <section class="showcase-section">
      <h2 class="tm-h2 mb-4">Accessibility</h2>
      <p class="tm-body mb-4">
        For icon-only buttons or elements without text content, it's recommended to add an 
        <code>aria-label</code> for screen readers.
      </p>
      
      <div class="example-container p-6">
        <div class="flex justify-center">
            <Button
            aria-label="Settings"
            v-tooltip="'Settings'"
            class="p-2 rounded-full hover:bg-tm-gray-1 dark:hover:bg-tm-gray-9 transition-colors"
            variant="text"
            >
            <i class="modus-icons" aria-hidden="true">settings</i>
            </Button>
        </div>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <code class="block whitespace-pre-wrap">
&lt;button 
  aria-label="Settings" 
  v-tooltip="'Settings'"
  class="p-2 rounded-full hover:bg-tm-gray-1 dark:hover:bg-tm-gray-9 transition-colors"&gt;
  &lt;i class="modus-icons" aria-hidden="true"&gt;settings&lt;/i&gt;
&lt;/button&gt;
        </code>
      </div>
    </section>
  </div>
</template>

<style scoped>
.showcase-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid var(--color-tm-gray-2, #e0e1e9);
  border-radius: 0.5rem;
}

.example-container {
  background-color: var(--color-tm-gray-0, #f7f9fa);
  border: 1px solid var(--color-tm-gray-2, #e0e1e9);
  border-radius: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  .showcase-section {
    border-color: var(--color-tm-gray-8, #4c505b);
  }
  
  .example-container {
    background-color: var(--color-tm-gray-10, #2c3038);
    border-color: var(--color-tm-gray-8, #4c505b);
  }
}

/* Add theme-specific dark mode support */
:root.dark .showcase-section {
  border-color: var(--color-tm-gray-8, #4c505b);
}

:root.dark .example-container {
  background-color: var(--color-tm-gray-10, #2c3038);
  border-color: var(--color-tm-gray-8, #4c505b);
}
</style>
