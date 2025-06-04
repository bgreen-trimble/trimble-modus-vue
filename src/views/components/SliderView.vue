<script setup lang="ts">
import { ref } from 'vue'
import { Slider, Button } from '@/components'

// Basic slider
const basicValue = ref(50)

// Range slider with min and max
const temperatureValue = ref(22)

// Slider with custom step
const stepValue = ref(25)

// Slider with ticks
const tickValue = ref(40)

// Custom ticks with labels
const customTicksValue = ref(3)
const customTicks = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' }
]

// Different sizes
const smallValue = ref(30)
const mediumValue = ref(50)
const largeValue = ref(70)

// Disabled slider
const disabledValue = ref(35)

// Colored sliders
const greenSliderValue = ref(60)
const redSliderValue = ref(45)

// Reset all sliders to their default values
const resetAll = () => {
  basicValue.value = 50
  temperatureValue.value = 22
  stepValue.value = 25
  tickValue.value = 40
  customTicksValue.value = 3
  smallValue.value = 30
  mediumValue.value = 50
  largeValue.value = 70
  disabledValue.value = 35
  greenSliderValue.value = 60
  redSliderValue.value = 45
}
</script>

<template>
  <main class="space-y-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 mb-2">Slider Component Showcase</h1>
        <p class="tm-body">
          Demonstrating the Trimble Modus Slider component with various configurations and options.
        </p>
      </div>
      
      <Button @click="resetAll" variant="outlined" severity="secondary">Reset All</Button>
    </div>

    <div class="space-y-6">
      <!-- Basic Slider -->
      <section class="space-y-4">
        <h2 class="tm-h2">Basic Slider</h2>
        <p class="tm-body">
          A simple slider with default settings (range 0-100).
        </p>
        <div class="max-w-lg">
          <Slider v-model="basicValue" label="Basic slider" showValue />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Current value: {{ basicValue }}
          </p>
        </div>
      </section>

      <!-- Range slider with min and max -->
      <section class="space-y-4">
        <h2 class="tm-h2">Custom Range</h2>
        <p class="tm-body">
          A slider with custom minimum and maximum values.
        </p>
        <div class="max-w-lg">
          <Slider 
            v-model="temperatureValue" 
            :min="15" 
            :max="30" 
            label="Temperature (°C)" 
            showValue
            valueText="`${temperatureValue}°C`" 
          />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Selected temperature: {{ temperatureValue }}°C
          </p>
        </div>
      </section>

      <!-- Step slider -->
      <section class="space-y-4">
        <h2 class="tm-h2">Custom Step</h2>
        <p class="tm-body">
          A slider with a custom step increment.
        </p>
        <div class="max-w-lg">
          <Slider 
            v-model="stepValue" 
            :step="25" 
            label="Volume" 
            showValue
          />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Steps in increments of 25: {{ stepValue }}
          </p>
        </div>
      </section>

      <!-- Slider with ticks -->
      <section class="space-y-4">
        <h2 class="tm-h2">Slider with Ticks</h2>
        <p class="tm-body">
          A slider with tick marks for visual reference.
        </p>
        <div class="max-w-lg">
          <Slider 
            v-model="tickValue" 
            label="Progress" 
            :ticks="true"
            showValue
          />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Progress with tick marks: {{ tickValue }}%
          </p>
        </div>
      </section>

      <!-- Slider with custom ticks and labels -->
      <section class="space-y-4">
        <h2 class="tm-h2">Custom Ticks with Labels</h2>
        <p class="tm-body">
          A slider with custom labeled tick marks.
        </p>
        <div class="max-w-lg">
          <Slider 
            v-model="customTicksValue" 
            :min="0" 
            :max="4" 
            :step="1" 
            :ticks="customTicks"
            label="Zoom level" 
            showValue
          />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Zoom level: {{ customTicksValue }} ({{ customTicks[customTicksValue]?.label }})
          </p>
        </div>
      </section>

      <!-- Size variations -->
      <section class="space-y-4">
        <h2 class="tm-h2">Size Variations</h2>
        <p class="tm-body">
          Sliders come in three different sizes: small, medium (default), and large.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Small -->
          <div class="space-y-2">
            <h3 class="tm-h3">Small Size</h3>
            <Slider 
              v-model="smallValue" 
              size="small"
              label="Small slider" 
            />
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Value: {{ smallValue }}
            </p>
          </div>

          <!-- Medium (default) -->
          <div class="space-y-2">
            <h3 class="tm-h3">Medium Size (Default)</h3>
            <Slider 
              v-model="mediumValue" 
              size="medium"
              label="Medium slider" 
            />
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Value: {{ mediumValue }}
            </p>
          </div>

          <!-- Large -->
          <div class="space-y-2">
            <h3 class="tm-h3">Large Size</h3>
            <Slider 
              v-model="largeValue" 
              size="large"
              label="Large slider" 
            />
            <p class="text-xs text-gray-500 dark:text-gray-400">
              Value: {{ largeValue }}
            </p>
          </div>
        </div>
      </section>

      <!-- Disabled state -->
      <section class="space-y-4">
        <h2 class="tm-h2">Disabled State</h2>
        <p class="tm-body">
          A slider in the disabled state.
        </p>
        <div class="max-w-lg">
          <Slider 
            v-model="disabledValue" 
            disabled
            label="Disabled slider" 
            showValue
          />
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Value: {{ disabledValue }} (cannot be changed)
          </p>
        </div>
      </section>

      <!-- Colored Sliders -->
      <section class="space-y-4">
        <h2 class="tm-h2">Colored Sliders</h2>
        <p class="tm-body">
          Sliders with different colors using CSS variables.
        </p>
        <div class="max-w-lg space-y-6">
          <div>
            <h3 class="tm-h3">Green Slider</h3>
            <div class="tm-slider-green">
              <Slider 
                v-model="greenSliderValue" 
                label="Green slider" 
                showValue
              />
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Value: {{ greenSliderValue }}
            </p>
          </div>
          
          <div>
            <h3 class="tm-h3">Red Slider</h3>
            <div class="tm-slider-red">
              <Slider 
                v-model="redSliderValue" 
                label="Red slider" 
                showValue
              />
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Value: {{ redSliderValue }}
            </p>
          </div>
        </div>
      </section>

      <!-- Accessibility Information -->
      <section class="space-y-4 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h2 class="tm-h2">Accessibility Features</h2>
        <div class="space-y-4">
          <h3 class="tm-h3">Keyboard Navigation</h3>
          <ul class="list-disc pl-6 tm-body space-y-2">
            <li>
              <strong>Tab:</strong> Focus the slider
            </li>
            <li>
              <strong>Arrow keys:</strong> Increment/decrement value
              <ul class="list-disc pl-6 mt-1">
                <li><strong>Left/Down:</strong> Decrease value</li>
                <li><strong>Right/Up:</strong> Increase value</li>
              </ul>
            </li>
            <li>
              <strong>Home:</strong> Set to minimum value
            </li>
            <li>
              <strong>End:</strong> Set to maximum value
            </li>
            <li>
              <strong>Page Up/Down:</strong> Increase/decrease by larger steps
            </li>
          </ul>

          <h3 class="tm-h3 mt-4">Screen Reader Support</h3>
          <p class="tm-body">
            The slider uses proper ARIA attributes to ensure screen reader compatibility:
          </p>
          <ul class="list-disc pl-6 tm-body space-y-2 mt-2">
            <li><code>role="slider"</code> (native to input type="range")</li>
            <li><code>aria-valuemin</code>, <code>aria-valuemax</code>, and <code>aria-valuenow</code></li>
            <li><code>aria-valuetext</code> for more descriptive value announcements</li>
            <li>Proper labeling via <code>label</code> element or <code>aria-label</code></li>
          </ul>
        </div>
      </section>

      <!-- Implementation Example -->
      <section class="space-y-4">
        <h2 class="tm-h2">Implementation Example</h2>
        <p class="tm-body">
          How to implement the Slider component in your code:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto"><code>&lt;script setup&gt;
import { ref } from 'vue'
import { Slider } from 'trimble-modus-vue'

// Basic usage
const value = ref(50)

// With custom configuration
const temperature = ref(22)

// Colored slider
const greenValue = ref(60)
&lt;/script&gt;

&lt;template&gt;
  &lt;!-- Basic slider --&gt;
  &lt;Slider v-model="value" label="Basic slider" /&gt;
  
  &lt;!-- Customized slider --&gt;
  &lt;Slider 
    v-model="temperature" 
    :min="15" 
    :max="30" 
    label="Temperature (°C)"
    showValue
  /&gt;

  &lt;!-- Custom colored slider using CSS variables --&gt;
  &lt;div class="custom-green-slider"&gt;
    &lt;Slider v-model="greenValue" label="Green slider" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
/* Custom colored slider */
.custom-green-slider :deep(.tm-slider-track-fill) {
  background-color: var(--color-tm-green);
}

.custom-green-slider :deep(.tm-slider-input::-webkit-slider-thumb) {
  border-color: var(--color-tm-green);
}

.custom-green-slider :deep(.tm-slider-input::-moz-range-thumb) {
  border-color: var(--color-tm-green);
}
&lt;/style&gt;</code></pre>
      </section>
    </div>
  </main>
</template>

<style scoped>
pre {
  font-family: monospace;
}

.dark pre {
  background-color: #333;
  color: #f5f5f5;
}

/* Custom colored sliders */
.tm-slider-green :deep(.tm-slider-track-fill) {
  background-color: var(--color-tm-green);
}

.tm-slider-green :deep(.tm-slider-input::-webkit-slider-thumb) {
  border-color: var(--color-tm-green);
}

.tm-slider-green :deep(.tm-slider-input::-moz-range-thumb) {
  border-color: var(--color-tm-green);
}

.tm-slider-green :deep(.tm-slider-input:active::-webkit-slider-thumb) {
  background-color: var(--color-tm-green-pale);
}

.tm-slider-green :deep(.tm-slider-input:active::-moz-range-thumb) {
  background-color: var(--color-tm-green-pale);
}

.tm-slider-green :deep(.tm-slider-tick-active) {
  background-color: var(--color-tm-green);
}

.tm-slider-red :deep(.tm-slider-track-fill) {
  background-color: var(--color-tm-red);
}

.tm-slider-red :deep(.tm-slider-input::-webkit-slider-thumb) {
  border-color: var(--color-tm-red);
}

.tm-slider-red :deep(.tm-slider-input::-moz-range-thumb) {
  border-color: var(--color-tm-red);
}

.tm-slider-red :deep(.tm-slider-input:active::-webkit-slider-thumb) {
  background-color: var(--color-tm-red-pale);
}

.tm-slider-red :deep(.tm-slider-input:active::-moz-range-thumb) {
  background-color: var(--color-tm-red-pale);
}

.tm-slider-red :deep(.tm-slider-tick-active) {
  background-color: var(--color-tm-red);
}
</style>
