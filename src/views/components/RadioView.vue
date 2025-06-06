<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup, Card, Tabs, Tab } from '@/components'

// Example states for radio buttons
const activeTab = ref('features')
const selectedOption = ref('option1')
const selectedSize = ref('medium')
const selectedNotification = ref('email')
const selectedLanguage = ref('')

// For demonstrating multiple radio options
const colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' }
]
const selectedColor = ref('blue')
</script>

<template>
    <div class="tm-container">
        <!-- Header Section -->
        <div class="showcase-header mb-6">
            <h1 class="tm-h1 mb-2">Radio Button</h1>
            <p class="tm-body mb-6">
                Radio buttons allow users to select a single option from a list of mutually exclusive choices.
                They are ideal for scenarios where a user must select exactly one option from a set.
            </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="mb-8">
            <Tabs :active="activeTab" @update:active="activeTab = $event">
                <Tab id="features" label="Features">
                    <div class="mt-6">
                        <!-- Default Radio Button -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Default Radio Button</h2>
                            <p class="tm-body mb-4">
                                The default radio button is used for selecting a single option from a list.
                            </p>

                            <div class="example-container p-6">
                                <div class="flex flex-col gap-2">
                                    <Radio 
                                        name="singleOption" 
                                        value="option1" 
                                        v-model="selectedOption" 
                                        label="Option 1" 
                                    />
                                    <Radio 
                                        name="singleOption" 
                                        value="option2" 
                                        v-model="selectedOption" 
                                        label="Option 2" 
                                    />
                                    <Radio 
                                        name="singleOption" 
                                        value="option3" 
                                        v-model="selectedOption" 
                                        label="Option 3" 
                                    />
                                </div>
                                <p class="tm-body mt-4">
                                    Selected option: {{ selectedOption }}
                                </p>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
&lt;Radio 
  name="singleOption" 
  value="option1" 
  v-model="selectedOption" 
  label="Option 1" 
/&gt;
&lt;Radio 
  name="singleOption" 
  value="option2" 
  v-model="selectedOption" 
  label="Option 2" 
/&gt;
&lt;Radio 
  name="singleOption" 
  value="option3" 
  v-model="selectedOption" 
  label="Option 3" 
/&gt;
                </code></pre>
                            </div>
                        </section>

                        <!-- Radio Group -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Radio Group</h2>
                            <p class="tm-body mb-4">
                                Radio groups help organize related radio buttons and manage their state collectively.
                            </p>

                            <div class="example-container p-6">
                                <RadioGroup 
                                    label="Select a size" 
                                    name="size" 
                                    v-model="selectedSize"
                                    required
                                >
                                    <Radio value="small" label="Small" />
                                    <Radio value="medium" label="Medium" />
                                    <Radio value="large" label="Large" />
                                </RadioGroup>
                                <p class="tm-body mt-4">
                                    Selected size: {{ selectedSize }}
                                </p>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
&lt;RadioGroup 
  label="Select a size" 
  name="size" 
  v-model="selectedSize"
  required
&gt;
  &lt;Radio value="small" label="Small" /&gt;
  &lt;Radio value="medium" label="Medium" /&gt;
  &lt;Radio value="large" label="Large" /&gt;
&lt;/RadioGroup&gt;
                </code></pre>
                            </div>
                        </section>

                        <!-- Horizontal Radio Group -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Horizontal Radio Group</h2>
                            <p class="tm-body mb-4">
                                Radio groups can be displayed horizontally for a more compact layout or when space is limited.
                            </p>

                            <div class="example-container p-6">
                                <RadioGroup 
                                    label="Notification preference" 
                                    name="notification" 
                                    v-model="selectedNotification"
                                    orientation="horizontal"
                                >
                                    <Radio value="email" label="Email" />
                                    <Radio value="sms" label="SMS" />
                                    <Radio value="push" label="Push notification" />
                                </RadioGroup>
                                <p class="tm-body mt-4">
                                    Notification preference: {{ selectedNotification }}
                                </p>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
&lt;RadioGroup 
  label="Notification preference" 
  name="notification" 
  v-model="selectedNotification"
  orientation="horizontal"
&gt;
  &lt;Radio value="email" label="Email" /&gt;
  &lt;Radio value="sms" label="SMS" /&gt;
  &lt;Radio value="push" label="Push notification" /&gt;
&lt;/RadioGroup&gt;
                </code></pre>
                            </div>
                        </section>

                        <!-- Compact Radio Buttons -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Compact Radio Buttons</h2>
                            <p class="tm-body mb-4">
                                Compact radio buttons are used in space-constrained scenarios or within tables and forms
                                that require a denser layout.
                            </p>

                            <div class="example-container p-6">
                                <Card class="max-w-lg mx-auto">
                                    <template #title>Language Settings</template>
                                    <RadioGroup 
                                        label="Select language" 
                                        name="language" 
                                        v-model="selectedLanguage"
                                        size="compact"
                                    >
                                        <Radio value="en" label="English" />
                                        <Radio value="es" label="Spanish" />
                                        <Radio value="fr" label="French" />
                                        <Radio value="de" label="German" />
                                    </RadioGroup>
                                </Card>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
&lt;RadioGroup 
  label="Select language" 
  name="language" 
  v-model="selectedLanguage"
  size="compact"
&gt;
  &lt;Radio value="en" label="English" /&gt;
  &lt;Radio value="es" label="Spanish" /&gt;
  &lt;Radio value="fr" label="French" /&gt;
  &lt;Radio value="de" label="German" /&gt;
&lt;/RadioGroup&gt;
                </code></pre>
                            </div>
                        </section>

                        <!-- Disabled Radio Buttons -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Disabled Radio Buttons</h2>
                            <p class="tm-body mb-4">
                                Disabled radio buttons indicate that a selection is not available for interaction.
                            </p>

                            <div class="example-container p-6">
                                <div class="flex flex-col gap-2">
                                    <Radio 
                                        name="disabledExample" 
                                        value="option1" 
                                        disabled 
                                        label="Disabled radio button" 
                                    />
                                    <Radio 
                                        name="disabledExample" 
                                        value="option2" 
                                        disabled 
                                        checked 
                                        label="Disabled checked radio button" 
                                    />
                                </div>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
&lt;Radio 
  name="disabledExample" 
  value="option1" 
  disabled 
  label="Disabled radio button" 
/&gt;
&lt;Radio 
  name="disabledExample" 
  value="option2" 
  disabled 
  checked 
  label="Disabled checked radio button" 
/&gt;
                </code></pre>
                            </div>
                        </section>

                        <!-- Dynamic Radio Buttons -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Dynamic Radio Buttons</h2>
                            <p class="tm-body mb-4">
                                Radio buttons can be generated dynamically from an array of options.
                            </p>

                            <div class="example-container p-6">
                                <RadioGroup 
                                    label="Select color" 
                                    name="color" 
                                    v-model="selectedColor"
                                >
                                    <Radio 
                                        v-for="option in colorOptions" 
                                        :key="option.value"
                                        :value="option.value" 
                                        :label="option.label" 
                                    />
                                </RadioGroup>
                                <p class="tm-body mt-4">
                                    Selected color: {{ selectedColor }}
                                </p>
                            </div>

                            <div class="code-block">
                                <pre><code class="block whitespace-pre-wrap">
// In the script
const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' }
]
const selectedColor = ref('blue')

// In the template
&lt;RadioGroup 
  label="Select color" 
  name="color" 
  v-model="selectedColor"
&gt;
  &lt;Radio 
    v-for="option in colorOptions" 
    :key="option.value"
    :value="option.value" 
    :label="option.label" 
  /&gt;
&lt;/RadioGroup&gt;
                </code></pre>
                            </div>
                        </section>
                    </div>
                </Tab>

                <Tab id="api" label="API">
                    <div class="mt-6">
                        <h2 class="tm-h2 mb-4">Radio Button Props</h2>
                        <table class="tm-table mb-8 w-full">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>id</code></td>
                                    <td><code>string</code></td>
                                    <td>Auto-generated</td>
                                    <td>The ID attribute for the radio button</td>
                                </tr>
                                <tr>
                                    <td><code>name</code></td>
                                    <td><code>string</code></td>
                                    <td><code>undefined</code></td>
                                    <td>The name attribute for the radio button</td>
                                </tr>
                                <tr>
                                    <td><code>label</code></td>
                                    <td><code>string</code></td>
                                    <td><code>undefined</code></td>
                                    <td>The text label for the radio button</td>
                                </tr>
                                <tr>
                                    <td><code>checked</code></td>
                                    <td><code>boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Whether the radio button is checked</td>
                                </tr>
                                <tr>
                                    <td><code>modelValue</code></td>
                                    <td><code>any</code></td>
                                    <td><code>undefined</code></td>
                                    <td>v-model binding for the radio button</td>
                                </tr>
                                <tr>
                                    <td><code>value</code></td>
                                    <td><code>string | number | boolean</code></td>
                                    <td><code>undefined</code></td>
                                    <td>The value attribute of the radio button</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td><code>boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Whether the radio button is disabled</td>
                                </tr>
                                <tr>
                                    <td><code>required</code></td>
                                    <td><code>boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Whether the radio button is required</td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td><code>'default' | 'compact'</code></td>
                                    <td><code>'default'</code></td>
                                    <td>The size of the radio button</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 class="tm-h2 mb-4">Radio Group Props</h2>
                        <table class="tm-table mb-8 w-full">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>id</code></td>
                                    <td><code>string</code></td>
                                    <td><code>undefined</code></td>
                                    <td>The ID attribute for the radio group</td>
                                </tr>
                                <tr>
                                    <td><code>name</code></td>
                                    <td><code>string</code></td>
                                    <td>Auto-generated</td>
                                    <td>The name attribute shared by all radio buttons in the group</td>
                                </tr>
                                <tr>
                                    <td><code>label</code></td>
                                    <td><code>string</code></td>
                                    <td><code>undefined</code></td>
                                    <td>The text label for the radio group</td>
                                </tr>
                                <tr>
                                    <td><code>modelValue</code></td>
                                    <td><code>any</code></td>
                                    <td><code>undefined</code></td>
                                    <td>v-model binding for the radio group</td>
                                </tr>
                                <tr>
                                    <td><code>disabled</code></td>
                                    <td><code>boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Whether the entire radio group is disabled</td>
                                </tr>
                                <tr>
                                    <td><code>required</code></td>
                                    <td><code>boolean</code></td>
                                    <td><code>false</code></td>
                                    <td>Whether selection in the radio group is required</td>
                                </tr>
                                <tr>
                                    <td><code>size</code></td>
                                    <td><code>'default' | 'compact'</code></td>
                                    <td><code>'default'</code></td>
                                    <td>The size of all radio buttons in the group</td>
                                </tr>
                                <tr>
                                    <td><code>orientation</code></td>
                                    <td><code>'vertical' | 'horizontal'</code></td>
                                    <td><code>'vertical'</code></td>
                                    <td>The orientation of the radio group</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 class="tm-h2 mb-4">Radio Button Events</h2>
                        <table class="tm-table mb-8 w-full">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Payload</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>update:modelValue</code></td>
                                    <td><code>any</code></td>
                                    <td>Emitted when the radio button value changes</td>
                                </tr>
                                <tr>
                                    <td><code>change</code></td>
                                    <td><code>any</code></td>
                                    <td>Emitted when the radio button value changes</td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 class="tm-h2 mb-4">Radio Group Events</h2>
                        <table class="tm-table mb-8 w-full">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Payload</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>update:modelValue</code></td>
                                    <td><code>any</code></td>
                                    <td>Emitted when the selected value in the group changes</td>
                                </tr>
                                <tr>
                                    <td><code>change</code></td>
                                    <td><code>any</code></td>
                                    <td>Emitted when the selected value in the group changes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tab>

                <Tab id="accessibility" label="Accessibility">
                    <div class="mt-6">
                        <h2 class="tm-h2 mb-4">Accessibility Guidelines</h2>
                        <p class="tm-body mb-4">
                            Radio buttons must be accessible to all users, including those who use assistive technologies.
                            The following guidelines ensure your radio buttons meet accessibility standards:
                        </p>

                        <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
                        <ul class="tm-list-disc mb-4 ml-6">
                            <li>Users can navigate to radio buttons using the <code>Tab</code> key</li>
                            <li>Once focused, users can select radio buttons using the <code>Space</code> key</li>
                            <li>Within a radio group, users can navigate between options using arrow keys</li>
                        </ul>

                        <h3 class="tm-h3 mt-6 mb-2">Screen Readers</h3>
                        <ul class="tm-list-disc mb-4 ml-6">
                            <li>Radio buttons have proper labels that are announced by screen readers</li>
                            <li>Radio groups have descriptive labels to provide context</li>
                            <li>The selected state of radio buttons is communicated to screen readers</li>
                        </ul>

                        <h3 class="tm-h3 mt-6 mb-2">Visual Cues</h3>
                        <ul class="tm-list-disc mb-4 ml-6">
                            <li>Radio buttons have a visible focus state for keyboard navigation</li>
                            <li>There is sufficient color contrast between the radio button and its background</li>
                            <li>The selected state is visually distinct and not reliant solely on color</li>
                        </ul>

                        <h3 class="tm-h3 mt-6 mb-2">Markup Best Practices</h3>
                        <ul class="tm-list-disc mb-4 ml-6">
                            <li>Use the native <code>&lt;input type="radio"&gt;</code> element for built-in accessibility</li>
                            <li>Group related radio buttons using the <code>name</code> attribute</li>
                            <li>Provide a <code>fieldset</code> and <code>legend</code> (via RadioGroup component) for groups of radio buttons</li>
                            <li>Include <code>aria-required</code> when a selection is mandatory</li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>
