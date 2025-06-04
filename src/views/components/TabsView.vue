<template>
  <div class="tm-container">
    <!-- Header Section -->
    <div class="showcase-header mb-6">
      <h1 class="tm-h1 mb-2">Tabs</h1>
      <p class="tm-body mb-6">
        Tabs organize and allow navigation between groups of content that are related and at the same level of
        hierarchy.
      </p>
    </div>

    <!-- Navigation Tabs -->
    <div class="mb-6">
      <Tabs :activeId="activeTab" @update:activeId="activeTab = $event">
        <Tab id="features" label="Features">
        </Tab>
        <Tab id="api" label="API">
        </Tab>
        <Tab id="theme" label="Theme">
        </Tab>
      </Tabs>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Features Tab -->
      <div v-if="activeTab === 'features'" class="space-y-8">
        <div class="flex justify-between items-start mb-4">
          <h2 class="tm-h2">Examples</h2>
          <Button @click="resetExamples" variant="outlined" severity="secondary">Reset All</Button>
        </div>

        <!-- Default Tabs -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Default Tabs</h3>
          <p class="tm-body mb-4">
            Basic tab navigation with disabled state support.
          </p>
          <div class="example-container">
            <Tabs :activeId="activeDefaultTab" @update:activeId="activeDefaultTab = $event">
              <Tab id="tab1" label="Overview">
                <h4 class="tm-h4 mb-2">Default Tabs Example</h4>
                <p class="tm-body">This is the default tab style with standard navigation. Notice how the active tab is
                  highlighted and the indicator smoothly transitions between tabs.</p>
              </Tab>
              <Tab id="tab2" label="Features">
                <h4 class="tm-h4 mb-2">Key Features</h4>
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Smooth transitions between tabs</li>
                  <li>Keyboard navigation support</li>
                  <li>ARIA compliant for accessibility</li>
                </ul>
              </Tab>
              <Tab id="tab3" label="Disabled" disabled>
                <p class="tm-body">This tab is disabled and cannot be accessed.</p>
              </Tab>
            </Tabs>
          </div>
        </section>

        <!-- Bordered Tabs -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Bordered Tabs</h3>
          <p class="tm-body mb-4">
            Tabs with a bordered style variant.
          </p>
          <div class="example-container">
            <Tabs variant="bordered" :activeId="borderedTab" @update:activeId="borderedTab = $event">
              <Tab id="bordered1" label="Design">
                <h4 class="tm-h4 mb-2">Bordered Style</h4>
                <p class="tm-body">The bordered variant adds a distinct border around the active tab, creating a more
                  traditional tabbed interface look.</p>
              </Tab>
              <Tab id="bordered2" label="Usage">
                <h4 class="tm-h4 mb-2">When to Use Bordered Tabs</h4>
                <p class="tm-body">Bordered tabs are ideal for:</p>
                <ul class="tm-body list-disc pl-6 mt-2 space-y-2">
                  <li>Traditional desktop applications</li>
                  <li>Complex form interfaces</li>
                  <li>When you need clear visual separation</li>
                </ul>
              </Tab>
              <Tab id="bordered3" label="Example">
                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <p class="tm-body">This is how content appears within bordered tabs.</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>

        <!-- Vertical Tabs -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Vertical Tabs</h3>
          <p class="tm-body mb-4">
            Tabs arranged in a vertical layout.
          </p>
          <div class="example-container">
            <Tabs vertical :activeId="verticalTab" @update:activeId="verticalTab = $event">
              <Tab id="vertical1" label="About">
                <h4 class="tm-h4 mb-2">Vertical Tabs</h4>
                <p class="tm-body">Vertical tabs stack the navigation items vertically instead of horizontally. This
                  arrangement is useful for:</p>
                <ul class="tm-body list-disc pl-6 mt-2 space-y-2">
                  <li>Sidebar navigation</li>
                  <li>Forms with multiple sections</li>
                  <li>When you have limited horizontal space</li>
                </ul>
              </Tab>
              <Tab id="vertical2" label="Implementation">
                <h4 class="tm-h4 mb-2">How to Use</h4>
                <p class="tm-body mb-2">Add the <code>vertical</code> prop to enable vertical layout:</p>
                <pre class="bg-gray-50 dark:bg-gray-800 p-2 rounded mt-2">
&lt;Tabs vertical :activeId="activeTab"&gt;
  &lt;Tab id="tab1" label="Tab 1"&gt;...&lt;/Tab&gt;
&lt;/Tabs&gt;</pre>
              </Tab>
              <Tab id="vertical3" label="Accessibility">
                <h4 class="tm-h4 mb-2">Accessibility Features</h4>
                <p class="tm-body">Vertical tabs automatically:</p>
                <ul class="tm-body list-disc pl-6 mt-2 space-y-2">
                  <li>Set correct ARIA orientation</li>
                  <li>Support up/down arrow navigation</li>
                  <li>Maintain focus management</li>
                </ul>
              </Tab>
            </Tabs>
          </div>
        </section>

        <!-- Size Variants -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Size Variants</h3>
          <p class="tm-body mb-4">
            Tabs available in three sizes: small, medium (default), and large.
          </p>
          <div class="example-container">
            <Tabs size="small" :activeId="smallTab" @update:activeId="smallTab = $event">
              <Tab id="small1" label="Small Size">
                <p class="tm-body">Small tabs are compact and ideal for dense interfaces or secondary navigation.</p>
                <div class="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <code>size="small"</code>
                </div>
              </Tab>
              <Tab id="small2" label="Use Cases">
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Nested navigation</li>
                  <li>Compact interfaces</li>
                  <li>Mobile views</li>
                </ul>
              </Tab>
            </Tabs>

            <Tabs size="medium" :activeId="mediumTab" @update:activeId="mediumTab = $event">
              <Tab id="medium1" label="Medium Size">
                <p class="tm-body">Medium is the default size, providing a balanced appearance for most use cases.</p>
                <div class="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <code>size="medium"</code> (or omit size prop)
                </div>
              </Tab>
              <Tab id="medium2" label="Use Cases">
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Main navigation</li>
                  <li>Standard interfaces</li>
                  <li>Most common use cases</li>
                </ul>
              </Tab>
            </Tabs>

            <Tabs size="large" :activeId="largeTab" @update:activeId="largeTab = $event">
              <Tab id="large1" label="Large Size">
                <p class="tm-body">Large tabs provide enhanced visibility and are easier to interact with on touch
                  devices.</p>
                <div class="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <code>size="large"</code>
                </div>
              </Tab>
              <Tab id="large2" label="Use Cases">
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Touch interfaces</li>
                  <li>Primary navigation</li>
                  <li>When visibility is crucial</li>
                </ul>
              </Tab>
            </Tabs>
          </div>
        </section>

        <!-- Custom Tab Content -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Custom Tab Content</h3>
          <p class="tm-body mb-4">
            Tabs with customized content using slots.
          </p>
          <div class="example-container">
            <Tabs :activeId="customTab" @update:activeId="customTab = $event">
              <template #tab="{ tab }">
                <div class="custom-tab">
                  <i class="modus-icons" aria-hidden="true">
                    {{ customTab === tab.id ? 'check_circle' : 'radio_button_unchecked' }}
                  </i>
                  {{ tab.label }}
                </div>
              </template>
              <Tab id="custom1" label="Custom Style">
                <h4 class="tm-h4 mb-2">Custom Tab Example</h4>
                <p class="tm-body mb-4">This example demonstrates custom tab styling using the tab slot. Notice the
                  custom icons that
                  change based on the active state.</p>
                <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <code class="block whitespace-pre-wrap">
      &lt;template #tab="{ tab }"&gt;
      &lt;div class="custom-tab"&gt;
      &lt;i class="modus-icons" aria-hidden="true"&gt;
      {{ customTab === 'custom1' ? 'check_circle' : 'radio_button_unchecked' }}
      &lt;/i&gt;
      {{ 'Custom Style' }}
      &lt;/div&gt;
      &lt;/template&gt;</code>
                </div>
              </Tab>
              <Tab id="custom2" label="Customization">
                <h4 class="tm-h4 mb-2">Available Customizations</h4>
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Custom tab button content</li>
                  <li>Icon integration</li>
                  <li>Active state styling</li>
                  <li>Layout modifications</li>
                  <li>Additional metadata display</li>
                </ul>
              </Tab>
            </Tabs>
          </div>
        </section>

        <!-- Accessibility -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Accessibility</h3>
          <p class="tm-body mb-4">
            The Tabs component includes built-in accessibility features for keyboard navigation and screen reader
            support.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 class="tm-h4 mb-2">Keyboard Navigation</h4>
            <ul class="list-disc pl-6 tm-body space-y-2">
              <li><strong>Tab/Shift+Tab:</strong> Move focus to the tabs</li>
              <li><strong>Arrow keys:</strong> Navigate between tabs
                <ul class="list-disc pl-6 mt-1">
                  <li><strong>Left/Up:</strong> Previous tab</li>
                  <li><strong>Right/Down:</strong> Next tab</li>
                </ul>
              </li>
              <li><strong>Home:</strong> Go to first tab</li>
              <li><strong>End:</strong> Go to last tab</li>
              <li><strong>Enter/Space:</strong> Activate focused tab</li>
            </ul>

            <h4 class="tm-h4 mt-4 mb-2">Screen Reader Support</h4>
            <ul class="list-disc pl-6 tm-body space-y-2">
              <li>ARIA role="tablist" for the container</li>
              <li>ARIA role="tab" for tab buttons</li>
              <li>ARIA role="tabpanel" for content panels</li>
              <li>Proper labelling with aria-label/aria-labelledby</li>
              <li>aria-selected state for active tab</li>
              <li>aria-controls to associate tabs with their panels</li>
            </ul>
          </div>
        </section>
      </div>

      <!-- API Tab -->
      <div v-if="activeTab === 'api'" class="space-y-8">
        <h2 class="tm-h2 mb-4">Properties</h2>

        <h3 class="tm-h3 mb-4">Tabs Props</h3>
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
                <!-- Change this row from modelValue to activeId -->
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">activeId</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">The ID of the active tab (required)</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">size</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'small' | 'medium' | 'large'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'medium'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Size variant of the tabs</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">variant</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'default' | 'bordered' | 'borderless'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">'default'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Style variant of the tabs</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">vertical</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">boolean</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">false</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Whether to display tabs vertically</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="tm-h3 mb-4">Tab Props</h3>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">id</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Unique identifier for the tab (required)
                </td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">label</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Label text for the tab (required)</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">disabled</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">boolean</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">false</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Whether the tab is disabled</td>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">update:activeId</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Emitted when active tab changes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="tm-h2 mb-4">Slots</h2>
        <h3 class="tm-h3 mb-4">Tabs Slots</h3>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">tab</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">{ tab: TabItem, activeId: string }</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Custom content for tab button</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">default</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Tab components</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="tm-h3 mb-4">Type Definitions</h3>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <pre><code>export interface TabsProps {
        activeId: string
        size?: 'small' | 'medium' | 'large'
        variant?: 'default' | 'bordered' | 'borderless'
        vertical?: boolean
        }

        export interface TabItem {
        id: string
        label: string
        disabled: boolean
        }</code></pre>
        </div>
      </div>

      <!-- Theme Tab -->
      <div v-if="activeTab === 'theme'" class="space-y-8">
        <h2 class="tm-h2 mb-4">CSS Variables</h2>
        <p class="tm-body mb-6">
          The Tabs component uses CSS variables for theming. These variables can be customized to match your
          application's
          design system.
        </p>

        <h3 class="tm-h3 mb-4">Light Theme Variables</h3>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
          <pre><code>:root {
        /* Tab Colors */
        --color-tm-tab-text: var(--color-tm-gray-7);
        --color-tm-tab-text-hover: var(--color-tm-gray-9);
        --color-tm-tab-text-active: var(--color-tm-blue);
        --color-tm-tab-text-disabled: var(--color-tm-gray-5);

        /* Tab Background */
        --color-tm-tab-hover-bg: var(--color-tm-gray-1);

        /* Tab Borders */
        --color-tm-tab-border: var(--color-tm-gray-3);
        --color-tm-tab-active-border: var(--color-tm-blue);
        --color-tm-tab-focus-ring: var(--color-tm-blue-pale);

        /* Tab Sizes */
        --tm-tab-height-small: 2rem;
        --tm-tab-height-medium: 2.5rem;
        --tm-tab-height-large: 3rem;
        --tm-tab-padding-x: 1rem;
        --tm-tab-padding-y: 0.5rem;
        }</code></pre>
        </div>

        <h3 class="tm-h3 mb-4">Dark Theme Variables</h3>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
          <pre><code>.dark {
        /* Tab Colors */
        --color-tm-tab-text: var(--color-tm-gray-5);
        --color-tm-tab-text-hover: var(--color-tm-gray-1);
        --color-tm-tab-text-active: var(--color-tm-blue-highlight);
        --color-tm-tab-text-disabled: var(--color-tm-gray-7);

        /* Tab Background */
        --color-tm-tab-hover-bg: var(--color-tm-gray-9);

        /* Tab Borders */
        --color-tm-tab-border: var(--color-tm-gray-8);
        --color-tm-tab-active-border: var(--color-tm-blue-highlight);
        --color-tm-tab-focus-ring: var(--color-tm-blue-dark);
        }</code></pre>
        </div>

        <h3 class="tm-h3 mb-4">Customization Example</h3>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <pre><code>.custom-tabs {
        /* Custom tab colors */
        --color-tm-tab-text-active: #9c27b0;
        --color-tm-tab-active-border: #9c27b0;
        --color-tm-tab-focus-ring: #f3e5f5;
        }

        /* Or use deep selectors for more specific styling */
        .custom-tabs :deep(.tm-tab-active) {
        color: #9c27b0;
        }

        .custom-tabs :deep(.tm-tabs-active-indicator) {
        background-color: #9c27b0;
        }</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Tab, Button } from '@/components'

// Tab state
const activeTab = ref('features')

// Example states
const activeDefaultTab = ref('tab1')
const borderedTab = ref('bordered1')
const verticalTab = ref('vertical1')
const smallTab = ref('small1')
const mediumTab = ref('medium1')
const largeTab = ref('large1')
const customTab = ref('custom1')

// Reset all examples to initial state
const resetExamples = () => {
  activeDefaultTab.value = 'tab1'
  borderedTab.value = 'bordered1'
  verticalTab.value = 'vertical1'
  smallTab.value = 'small1'
  mediumTab.value = 'medium1'
  largeTab.value = 'large1'
  customTab.value = 'custom1'
}
</script>

<style scoped>
.showcase-section {
  margin-bottom: 3rem;
}

.example-container {
  padding: 1rem;
  border: 1px solid var(--color-tm-gray-2);
  border-radius: 0.5rem;
}

.custom-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dark .example-code {
  background-color: var(--color-tm-gray-9);
}

pre {
  font-family: monospace;
  white-space: pre-wrap;
  overflow-x: auto;
}

.dark pre {
  color: var(--color-tm-gray-1);
}
</style>
