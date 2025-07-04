<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Tab, Button } from '@/components'

// Example tooltip positions and themes
const tooltipPositions = ['top', 'right', 'bottom', 'left']
const tooltipThemes = ['light', 'dark']

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
const iconTab = ref('icon1') // Add this line for the icon tabs example

// Reset all examples to initial state
const resetExamples = () => {
  activeDefaultTab.value = 'tab1'
  borderedTab.value = 'bordered1'
  verticalTab.value = 'vertical1'
  smallTab.value = 'small1'
  mediumTab.value = 'medium1'
  largeTab.value = 'large1'
  customTab.value = 'custom1'
  iconTab.value = 'icon1' // Add this line to reset icon tabs
}
</script>

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
    <div class="">
      <Tabs :active="activeTab" @update:active="activeTab = $event">
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
            <Tabs :active="activeDefaultTab" @update:active="activeDefaultTab = $event">
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
            <Tabs variant="bordered" :active="borderedTab" @update:active="borderedTab = $event">
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
            <Tabs vertical :active="verticalTab" @update:active="verticalTab = $event">
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
            <Tabs size="small" :active="smallTab" @update:active="smallTab = $event">
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

            <Tabs size="medium" :active="mediumTab" @update:active="mediumTab = $event">
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

            <Tabs size="large" :active="largeTab" @update:active="largeTab = $event">
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

        <!-- Tabs with Icons -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Tabs with Icons</h3>
          <p class="tm-body mb-4">
            Tabs with Modus icons to enhance visual recognition.
          </p>
          <div class="example-container">
            <Tabs :active="iconTab" @update:active="iconTab = $event">
              <Tab id="icon1" label="Dashboard" icon="dashboard">
                <h4 class="tm-h4 mb-2">Dashboard Tab</h4>
                <p class="tm-body">Icons help users quickly identify tab content. Each tab has an icon specified using
                  the <code>icon</code> property which references a Modus icon name.</p>
              </Tab>
              <Tab id="icon2" label="Settings" icon="settings">
                <h4 class="tm-h4 mb-2">Settings Tab</h4>
                <p class="tm-body">The settings page demonstrates another tab with an icon.</p>
                <div class="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <code class="block whitespace-pre-wrap">
&lt;Tab id="icon2" label="Settings" icon="settings"&gt;
  &lt;!-- Tab content --&gt;
&lt;/Tab&gt;</code>
                </div>
              </Tab>
              <Tab id="icon3" label="Analytics" icon="bar_chart">
                <h4 class="tm-h4 mb-2">Analytics Tab</h4>
                <ul class="tm-body list-disc pl-6 space-y-2">
                  <li>Icons should be relevant to the tab content</li>
                  <li>Use consistent icon style throughout your interface</li>
                  <li>Icons improve recognition and recall for frequent users</li>
                </ul>
              </Tab>
              <!-- Add the icon-only tab -->
              <Tab id="icon4" label="" icon="notifications">
                <h4 class="tm-h4 mb-2">Icon-Only Tab</h4>
                <p class="tm-body">This tab demonstrates an icon-only approach, which can be useful for
                  space-constrained interfaces or very familiar actions.</p>
                <div class="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <code class="block whitespace-pre-wrap">
&lt;Tab id="icon4" label="" icon="notifications"&gt;
  &lt;!-- Tab content --&gt;
&lt;/Tab&gt;</code>
                </div>
                <div
                  class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500">
                  <p class="tm-body font-medium">Accessibility Note</p>
                  <p class="tm-body mt-1">For icon-only tabs, ensure the icon is intuitive and consider adding an
                    aria-label for screen readers.</p>
                </div>
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
            <Tabs :active="customTab" @update:active="customTab = $event">
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

        <!-- Tooltip Integration -->
        <section class="showcase-section">
          <h3 class="tm-h3 mb-2">Tabs with Tooltips</h3>
          <p class="tm-body mb-4">
            Tabs can be enhanced with tooltips to provide additional context.
          </p>
          <div class="example-container">
            <div class="mb-6">
              <h4 class="tm-h4 mb-2">Basic Tooltip Example</h4>
              <div class="flex gap-4">
                <Button v-tooltip="'This is a simple tooltip'" variant="filled">Hover Me</Button>
                <Button v-tooltip="{ content: 'Right tooltip', position: 'right' }" variant="outlined">Right Tooltip</Button>
                <Button v-tooltip="{ content: 'Bottom tooltip', position: 'bottom' }" variant="text">Bottom Tooltip</Button>
                <Button v-tooltip="{ content: 'Left tooltip', position: 'left' }" variant="outlined" severity="secondary">Left Tooltip</Button>
              </div>
            </div>

            <div class="mb-6">
              <h4 class="tm-h4 mb-2">Theme Variants</h4>
              <div class="flex gap-4">
                <Button v-tooltip="{ content: 'Light theme (default)', theme: 'light' }" variant="filled">Light Theme</Button>
                <Button v-tooltip="{ content: 'Dark theme tooltip', theme: 'dark' }" variant="outlined" severity="secondary">Dark Theme</Button>
              </div>
            </div>

            <div class="mb-6">
              <h4 class="tm-h4 mb-2">Tooltip with Tabs</h4>
              <Tabs :active="customTab" @update:active="customTab = $event">
                <Tab 
                  id="custom1" 
                  label="Basic Tab" 
                  v-tooltip="{ content: 'Basic tab information', position: 'top' }">
                  <p class="tm-body">
                    Hover over each tab to see tooltip information. This can be useful for providing 
                    additional context or instructions to users.
                  </p>
                  <div class="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <code class="block whitespace-pre-wrap">
&lt;Tab 
  id="custom1" 
  label="Basic Tab" 
  v-tooltip="{ content: 'Basic tab information', position: 'top' }"&gt;
  &lt;!-- Tab content --&gt;
&lt;/Tab&gt;</code>
                  </div>
                </Tab>
                <Tab 
                  id="custom2" 
                  label="Configuration" 
                  v-tooltip="{ content: 'Configuration options', position: 'top', theme: 'dark' }">
                  <h4 class="tm-h4 mb-2">Tooltip Configuration</h4>
                  <p class="tm-body">
                    The tooltip directive accepts either a simple string or a configuration object with the following properties:
                  </p>
                  <ul class="tm-body list-disc pl-6 mt-2 space-y-2">
                    <li><code>content</code>: The tooltip text (required)</li>
                    <li><code>position</code>: 'top', 'right', 'bottom', or 'left' (default: 'top')</li>
                    <li><code>theme</code>: 'light' or 'dark' (default: 'light')</li>
                    <li><code>delay</code>: Delay in milliseconds before showing the tooltip (default: 0)</li>
                  </ul>
                </Tab>
              </Tabs>
            </div>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">icon</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Modus icon name to display before the
                  label</td>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">update:active</td>
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
        icon?: string
        disabled: boolean
        }</code></pre>
        </div>

        <!-- Tooltip Directive -->
        <h3 class="tm-h3 mt-8 mb-4">Tooltip Directive</h3>
        <p class="tm-body mb-4">
          The tooltip directive provides a simple way to add tooltips to any element.
        </p>
        
        <h4 class="tm-h4 mb-2">Usage</h4>
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <code class="block whitespace-pre-wrap">
// Simple string tooltip
&lt;button v-tooltip="'Tooltip text'"&gt;Hover me&lt;/button&gt;

// Object configuration
&lt;button v-tooltip="{ 
  content: 'Tooltip text',
  position: 'top',
  theme: 'light',
  delay: 200 
}"&gt;Hover me&lt;/button&gt;</code>
        </div>

        <h4 class="tm-h4 mb-2">Options</h4>
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
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">content</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">string</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">-</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Text content of the tooltip</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">position</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">'top' | 'right' | 'bottom' | 'left'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">'top'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Position of the tooltip relative to the element</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">theme</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">'light' | 'dark'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">'light'</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Visual theme of the tooltip</td>
              </tr>
              <tr>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">delay</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">number</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3 font-mono text-sm">0</td>
                <td class="border border-tm-gray-2 dark:border-tm-gray-8 p-3">Delay in milliseconds before showing the tooltip</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="tm-h4 mt-6 mb-2">Accessibility</h4>
        <p class="tm-body mb-4">
          The tooltip directive uses proper ARIA attributes to ensure accessibility. For icon-only buttons or elements without text content, it's recommended to add an <code>aria-label</code> for screen readers.
        </p>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <code class="block whitespace-pre-wrap">
&lt;button 
  aria-label="Settings" 
  v-tooltip="'Settings'"&gt;
  &lt;i class="modus-icons"&gt;settings&lt;/i&gt;
&lt;/button&gt;</code>
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

        <!-- Tooltip Theme Variables -->
        <h3 class="tm-h3 mt-8 mb-4">Tooltip Theme Variables</h3>
        <p class="tm-body mb-6">
          The tooltip directive uses CSS variables for theming. These variables can be customized to match your
          application's design system.
        </p>

        <h4 class="tm-h4 mb-2">Light Theme Variables</h4>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
          <pre><code>:root {
  /* Light theme (default) */
  --tm-tooltip-light-bg: #ffffff;
  --tm-tooltip-light-color: #2c3e50;
  --tm-tooltip-light-border: #e2e8f0;
  --tm-tooltip-light-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</code></pre>
        </div>

        <h4 class="tm-h4 mb-2">Dark Theme Variables</h4>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
          <pre><code>:root {
  /* Dark theme */
  --tm-tooltip-dark-bg: var(--color-tm-gray-900, #171c1e);
  --tm-tooltip-dark-color: #ffffff;
  --tm-tooltip-dark-border: #4a5568;
  --tm-tooltip-dark-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</code></pre>
        </div>

        <h4 class="tm-h4 mb-2">Customization Example</h4>
        <p class="tm-body mb-4">
          You can customize the tooltip appearance by overriding these variables in your CSS:
        </p>
        <div class="example-code bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6">
          <pre><code>:root {
  /* Custom tooltip styling */
  --tm-tooltip-light-bg: var(--color-tm-blue-highlight, #0063a3);
  --tm-tooltip-light-color: white;
  --tm-tooltip-light-border: var(--color-tm-blue-highlight, #0063a3);
}
</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

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
