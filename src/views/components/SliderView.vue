<script setup lang="ts">
import { ref } from 'vue'
import { Slider, Button, Tabs, Tab } from '@/components'

// State for feature examples
const activeTab = ref('features')
const basicValue = ref(50)
const temperatureValue = ref(22)
const stepValue = ref(25)
const purpleSliderValue = ref(40)
const greenSliderValue = ref(60)
const ticksValue = ref(40)
const sizesValue = ref({
  small: 30,
  medium: 50,
  large: 70
})
const disabledValue = ref(35)

// Custom ticks with labels
const customTicksValue = ref(3)
const customTicks = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' }
]

// Reset all example sliders
const resetAll = () => {
  basicValue.value = 50
  temperatureValue.value = 22
  stepValue.value = 25
  ticksValue.value = 40
  customTicksValue.value = 3
  purpleSliderValue.value = 40
  greenSliderValue.value = 60
  sizesValue.value = {
    small: 30,
    medium: 50,
    large: 70
  }
  disabledValue.value = 35
}
</script>

<template>
  <div class="slider-showcase-container">
    <!-- Header Section -->
    <div class="showcase-header mb-6">
      <h1 class="tm-h1 mb-2">Slider</h1>
      <p class="tm-body mb-6">
        Slider is a form component to provide a numerical input in a given range with a draggable handle.
      </p>
    </div>

    <!-- Tabs -->
    <Tabs v-model:activeId="activeTab" class="mb-6">
      <Tab id="features" label="Features">
        <template #tab>Features</template>
        <div>
          <div class="flex justify-between items-start mb-4">
            <h2 class="tm-h2">Examples</h2>
            <Button @click="resetAll" variant="outlined" severity="secondary">Reset All</Button>
          </div>

          <!-- Basic Slider -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Basic</h3>
            <p class="tm-body mb-4">
              A simple slider with default settings (range 0-100).
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
                <Slider v-model="basicValue" label="Basic slider" showValue />
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Value: {{ basicValue }}
                </p>
              </div>
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider v-model="value" label="Basic slider" showValue /&gt;</code></pre>
            </div>
          </section>

          <!-- Range Slider -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Custom Range</h3>
            <p class="tm-body mb-4">
              A slider with custom minimum and maximum values.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
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
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider 
  v-model="temperatureValue" 
  :min="15" 
  :max="30" 
  label="Temperature (°C)" 
  showValue
  valueText="`${temperatureValue}°C`" 
/&gt;</code></pre>
            </div>
          </section>

          <!-- Step Slider -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Step</h3>
            <p class="tm-body mb-4">
              A slider with a custom step increment.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
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
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider 
  v-model="stepValue" 
  :step="25" 
  label="Volume" 
  showValue
/&gt;</code></pre>
            </div>
          </section>

          <!-- Slider with Ticks -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Ticks</h3>
            <p class="tm-body mb-4">
              A slider with tick marks for visual reference.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
                <Slider 
                  v-model="ticksValue" 
                  label="Progress" 
                  :ticks="true"
                  showValue
                />
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Progress with tick marks: {{ ticksValue }}%
                </p>
              </div>
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider 
  v-model="ticksValue" 
  label="Progress" 
  :ticks="true"
  showValue
/&gt;</code></pre>
            </div>
          </section>

          <!-- Slider with Custom Ticks -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Custom Ticks</h3>
            <p class="tm-body mb-4">
              A slider with custom labeled tick marks.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
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
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>// Custom ticks definition
const customTicks = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' }
]

&lt;Slider 
  v-model="customTicksValue" 
  :min="0" 
  :max="4" 
  :step="1" 
  :ticks="customTicks"
  label="Zoom level" 
  showValue
/&gt;</code></pre>
            </div>
          </section>

          <!-- Size Variations -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Sizes</h3>
            <p class="tm-body mb-4">
              Sliders come in three different sizes: small, medium (default), and large.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Small -->
                <div class="space-y-4">
                  <Slider 
                    v-model="sizesValue.small" 
                    size="small"
                    label="Small Size" 
                    showValue
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Value: {{ sizesValue.small }}
                  </p>
                </div>

                <!-- Medium (default) -->
                <div class="space-y-4">
                  <Slider 
                    v-model="sizesValue.medium" 
                    size="medium"
                    label="Medium Size (Default)" 
                    showValue
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Value: {{ sizesValue.medium }}
                  </p>
                </div>

                <!-- Large -->
                <div class="space-y-4">
                  <Slider 
                    v-model="sizesValue.large" 
                    size="large"
                    label="Large Size" 
                    showValue
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Value: {{ sizesValue.large }}
                  </p>
                </div>
              </div>
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider v-model="value" size="small" label="Small slider" /&gt;
&lt;Slider v-model="value" size="medium" label="Medium slider" /&gt;
&lt;Slider v-model="value" size="large" label="Large slider" /&gt;</code></pre>
            </div>
          </section>

          <!-- Disabled State -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Disabled</h3>
            <p class="tm-body mb-4">
              A slider in the disabled state.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto">
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
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;Slider 
  v-model="disabledValue" 
  disabled
  label="Disabled slider" 
  showValue
/&gt;</code></pre>
            </div>
          </section>

          <!-- Custom Colors -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Custom Colors</h3>
            <p class="tm-body mb-4">
              Sliders can be customized with different colors using CSS variables.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
              <div class="max-w-lg mx-auto space-y-6">
                <div>
                  <Slider 
                    v-model="purpleSliderValue" 
                    label="Purple Theme" 
                    showValue
                    class="custom-purple"
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Value: {{ purpleSliderValue }}
                  </p>
                </div>
                <div>
                  <Slider 
                    v-model="greenSliderValue" 
                    label="Green Theme" 
                    showValue
                    class="custom-green"
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Value: {{ greenSliderValue }}
                  </p>
                </div>
              </div>
            </div>
            <div class="example-code mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre><code>&lt;style&gt;
.custom-purple :deep(.tm-slider-track) {
  background-color: #f3e5f5;  /* Track color (unfilled portion) */
}

.custom-purple :deep(.tm-slider-track-fill) {
  background-color: #9c27b0;  /* Filled portion */
}

.custom-purple :deep(.tm-slider-input) {
  &::-webkit-slider-thumb {
    border-color: #9c27b0;
    &:active {
      background-color: #e1bee7;
    }
  }
  &::-moz-range-thumb {
    border-color: #9c27b0;
    &:active {
      background-color: #e1bee7;
    }
  }
}

.custom-green :deep(.tm-slider-track) {
  background-color: #e8f5e9;  /* Track color (unfilled portion) */
}

.custom-green :deep(.tm-slider-track-fill) {
  background-color: #4caf50;  /* Filled portion */
}

.custom-green :deep(.tm-slider-input) {
  &::-webkit-slider-thumb {
    border-color: #4caf50;
    &:active {
      background-color: #c8e6c9;
    }
  }
  &::-moz-range-thumb {
    border-color: #4caf50;
    &:active {
      background-color: #c8e6c9;
    }
  }
}
&lt;/style&gt;

&lt;Slider 
  v-model="value" 
  label="Purple Theme" 
  showValue
  class="custom-purple"
/&gt;

&lt;Slider 
  v-model="value" 
  label="Green Theme" 
  showValue
  class="custom-green"
/&gt;</code></pre>
            </div>
          </section>

          <!-- Accessibility -->
          <section class="showcase-section">
            <h3 class="tm-h3 mb-2">Accessibility</h3>
            <p class="tm-body mb-4">
              The Slider component includes built-in accessibility features for keyboard navigation and screen reader support.
            </p>
            <div class="example-card p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div class="space-y-4">
                <h4 class="tm-h4">Keyboard Navigation</h4>
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

                <h4 class="tm-h4 mt-4">Screen Reader Support</h4>
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
            </div>
          </section>
        </div>
      </Tab>

      <Tab id="api" label="API">
        <template #tab>API</template>
        <div class="space-y-8">
          <h2 class="tm-h2 mb-4">Properties</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-800">
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Name</th>
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Type</th>
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Default</th>
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">modelValue</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">required</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Current value of the slider.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">min</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">0</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Minimum boundary value.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">max</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">100</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Maximum boundary value.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">step</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">1</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Step factor to increment/decrement the value.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">label</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">undefined</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Label text for the slider.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">showValue</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">boolean</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">false</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Whether to show the current value next to the label.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">disabled</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">boolean</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">false</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">When set to true, disables the component.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">size</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'small' | 'medium' | 'large'</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'medium'</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Size of the slider component.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">id</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">auto-generated</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Unique identifier for the slider input element.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">ariaLabel</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">undefined</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Accessible label for screen readers. Falls back to the label if not provided.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">valueText</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">undefined</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Descriptive text for the value, used by screen readers.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">ticks</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">boolean | { value: number, label?: string }[]</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">false</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Enable tick marks on the slider track. Can be true for auto-generated ticks or an array of custom ticks with labels.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 class="tm-h2 mb-4">Events</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-800">
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Name</th>
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Parameters</th>
                  <th class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">update:modelValue</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">value: number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Triggered when the slider value changes during dragging or keyboard interaction.</td>
                </tr>
                <tr>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">change</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">value: number</td>
                  <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Triggered when the slider handle is released after dragging or when keyboard interaction ends.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 class="tm-h2 mb-4">Type Definitions</h2>
          <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <pre><code>export interface SliderProps {
  modelValue: number
  min?: number
  max?: number
  step?: number
  label?: string
  showValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  id?: string
  ariaLabel?: string
  valueText?: string
  ticks?: boolean | { value: number, label?: string }[]
}</code></pre>
          </div>
        </div>
      </Tab>

      <Tab id="theme" label="Theme">
        <template #tab>Theme</template>
        <div class="space-y-8">
          <h2 class="tm-h2 mb-4">CSS Variables</h2>
          <p class="tm-body mb-6">
            The Slider component uses the following CSS variables for theming, defined in the <code>slider.css</code> file.
            These variables can be customized to match your application's design system.
          </p>

          <h3 class="tm-h3 mb-4">Light Theme Variables</h3>
          <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
            <pre><code>@theme {
  /* Slider Default */
  --color-tm-slider-track-color: var(--color-tm-gray-2);
  --color-tm-slider-fill-color: var(--color-tm-blue);
  --color-tm-slider-thumb-color: var(--color-tm-white);
  --color-tm-slider-thumb-border-color: var(--color-tm-blue);
  --color-tm-slider-thumb-active-color: var(--color-tm-blue-pale);
  --color-tm-slider-thumb-shadow: none;
  --color-tm-slider-label-color: var(--color-tm-gray-9);
  --color-tm-slider-tick-color: var(--color-tm-gray-4);
  --color-tm-slider-tick-label-color: var(--color-tm-gray-7);

  /* Slider Disabled */
  --color-tm-slider-disabled-fill-color: var(--color-tm-gray-5);
  --color-tm-slider-disabled-thumb-color: var(--color-tm-white);
  --color-tm-slider-disabled-thumb-border-color: var(--color-tm-gray-5);
  --color-tm-slider-disabled-label-color: var(--color-tm-gray-5);
}</code></pre>
          </div>

          <h3 class="tm-h3 mb-4">Dark Theme Variables</h3>
          <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
            <pre><code>.dark {
  /* Slider Default */
  --color-tm-slider-track-color: var(--color-tm-gray-8);
  --color-tm-slider-fill-color: var(--color-tm-blue);
  --color-tm-slider-thumb-color: var(--color-tm-gray-9);
  --color-tm-slider-thumb-border-color: var(--color-tm-blue);
  --color-tm-slider-thumb-active-color: var(--color-tm-blue-dark);
  --color-tm-slider-thumb-shadow: none;
  --color-tm-slider-label-color: var(--color-tm-gray-1);
  --color-tm-slider-tick-color: var(--color-tm-gray-6);
  --color-tm-slider-tick-label-color: var(--color-tm-gray-3);

  /* Slider Disabled */
  --color-tm-slider-disabled-fill-color: var(--color-tm-gray-7);
  --color-tm-slider-disabled-thumb-color: var(--color-tm-gray-9);
  --color-tm-slider-disabled-thumb-border-color: var(--color-tm-gray-7);
  --color-tm-slider-disabled-label-color: var(--color-tm-gray-6);
}</code></pre>
          </div>

          <h3 class="tm-h3 mb-4">Custom Styling Example</h3>
          <p class="tm-body mb-4">
            You can customize the appearance of the Slider component by overriding these CSS variables
            or by using deep selectors to target specific elements. Here's an example of creating a custom 
            styled slider:
          </p>

          <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <pre><code>&lt;template&gt;
  &lt;div class="custom-purple-slider"&gt;
    &lt;Slider v-model="value" label="Custom purple slider" /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.custom-purple-slider {
  /* Override variables for this specific instance */
  --color-tm-slider-fill-color: #9333ea; /* Purple 600 */
  --color-tm-slider-thumb-border-color: #9333ea; /* Purple 600 */
  --color-tm-slider-thumb-active-color: #f3e8ff; /* Purple 100 */
}

/* Or use deep selectors for more specific styling */
.custom-purple-slider :deep(.tm-slider-track-fill) {
  background-color: #9333ea; /* Purple 600 */
}

.custom-purple-slider :deep(.tm-slider-input::-webkit-slider-thumb) {
  border-color: #9333ea; /* Purple 600 */
}

.custom-purple-slider :deep(.tm-slider-input::-moz-range-thumb) {
  border-color: #9333ea; /* Purple 600 */
}

.custom-purple-slider :deep(.tm-slider-input:active::-webkit-slider-thumb) {
  background-color: #f3e8ff; /* Purple 100 */
}

.custom-purple-slider :deep(.tm-slider-input:active::-moz-range-thumb) {
  background-color: #f3e8ff; /* Purple 100 */
}
&lt;/style&gt;</code></pre>
          </div>

          <h3 class="tm-h3 mb-4">Accessibility Considerations</h3>
          <p class="tm-body mb-4">
            When customizing the Slider component, ensure that:
          </p>
          <ul class="list-disc pl-6 tm-body space-y-2">
            <li>There is sufficient contrast between the track, fill, and thumb elements</li>
            <li>The active and focus states are clearly visible</li>
            <li>Text labels maintain readability against their backgrounds</li>
            <li>Custom colors follow your application's accessibility guidelines</li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<style scoped>
.showcase-section {
  margin-bottom: 3rem;
}

.custom-purple :deep(.tm-slider-track) {
  background-color: #f3e5f5;
}

.custom-purple :deep(.tm-slider-track-fill) {
  background-color: #9c27b0;
}

.custom-purple :deep(.tm-slider-input) {
  &::-webkit-slider-thumb {
    border-color: #9c27b0;
    &:active {
      background-color: #e1bee7;
    }
  }
  &::-moz-range-thumb {
    border-color: #9c27b0;
    &:active {
      background-color: #e1bee7;
    }
  }
}

.custom-green :deep(.tm-slider-track) {
  background-color: #e8f5e9;
}

.custom-green :deep(.tm-slider-track-fill) {
  background-color: #4caf50;
}

.custom-green :deep(.tm-slider-input) {
  &::-webkit-slider-thumb {
    border-color: #4caf50;
    &:active {
      background-color: #c8e6c9;
    }
  }
  &::-moz-range-thumb {
    border-color: #4caf50;
    &:active {
      background-color: #c8e6c9;
    }
  }
}

pre {
  font-family: monospace;
  white-space: pre-wrap;
  overflow-x: auto;
}

.dark pre {
  background-color: #333;
  color: #f5f5f5;
}
</style>
