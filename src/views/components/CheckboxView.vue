<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, Card, Tabs, Tab } from '@/components'

// Example states for checkboxes
const activeTab = ref('features')
const termsAccepted = ref(false)
const notificationsEnabled = ref(true)
const indeterminateState = ref(true)

// For demonstrating multiple checkboxes
const multipleOptions = ref([
    { id: 'option1', label: 'Option 1', checked: false },
    { id: 'option2', label: 'Option 2', checked: true },
    { id: 'option3', label: 'Option 3', checked: false }
])

// Update multiple checkboxes
const updateOption = (index: number, value: boolean) => {
    multipleOptions.value[index].checked = value
}
</script>

<template>
    <div class="tm-container">
        <!-- Header Section -->
        <div class="showcase-header mb-6">
            <h1 class="tm-h1 mb-2">Checkbox</h1>
            <p class="tm-body mb-6">
                Checkboxes allow users to select one or more items from a list, or to turn an option on or off.
                They are used for binary choices or multiple selections.
            </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="mb-8">
            <Tabs :active="activeTab" @update:active="activeTab = $event">
                <Tab id="features" label="Features">
                    <div class="mt-6">
                        <!-- Default Checkbox -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Default Checkbox</h2>
                            <p class="tm-body mb-4">
                                The default checkbox is used for binary choices or multiple selections.
                            </p>

                            <div class="example-container p-6 ">
                                <Checkbox v-model="termsAccepted" label="I accept the terms and conditions" />
                                <p class="tm-body mt-4">
                                    Current state: {{ termsAccepted ? 'Checked' : 'Unchecked' }}
                                </p>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
&lt;Checkbox 
  v-model="termsAccepted" 
  label="I accept the terms and conditions"
/&gt;
                </code>
                            </div>
                        </section>

                        <!-- Compact Checkbox -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Compact Checkbox</h2>
                            <p class="tm-body mb-4">
                                Compact checkboxes are used in space-constrained scenarios or within tables and forms
                                that require a denser layout.
                            </p>

                            <div class="example-container p-6">
                                <Card class="max-w-lg mx-auto">
                                    <template #title>Settings</template>
                                    <Checkbox size="compact" v-model="notificationsEnabled"
                                        label="Enable notifications" />
                                </Card>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
        &lt;Checkbox
        size="compact"
        v-model="notificationsEnabled"
        label="Enable notifications"
        /&gt;
    </code>
                            </div>
                        </section>

                        <!-- Disabled Checkbox -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Disabled Checkbox</h2>
                            <p class="tm-body mb-4">
                                Disabled checkboxes indicate that a selection is not available for interaction.
                            </p>

                            <div class="example-container p-6">
                                <div class="flex flex-col gap-4">
                                    <Checkbox disabled label="Disabled unchecked checkbox" />
                                    <Checkbox disabled checked label="Disabled checked checkbox" />
                                </div>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Checkbox
            disabled
            label="Disabled unchecked checkbox"
            /&gt;

            &lt;Checkbox
            disabled
            checked
            label="Disabled checked checkbox"
            /&gt;
        </code>
                            </div>
                        </section>

                        <!-- Required Checkbox -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Required Checkbox</h2>
                            <p class="tm-body mb-4">
                                Required checkboxes indicate that the user must select the option to proceed.
                            </p>

                            <div class="example-container p-6">
                                <Checkbox required label="I agree to the privacy policy" />
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Checkbox
            required
            label="I agree to the privacy policy"
            /&gt;
        </code>
                            </div>
                        </section>

                        <!-- Error State -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Error State</h2>
                            <p class="tm-body mb-4">
                                Error states indicate validation issues with the checkbox selection.
                            </p>

                            <div class="example-container p-6">
                                <Checkbox error errorMessage="You must accept the terms to continue"
                                    label="I accept the terms and conditions" />
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Checkbox
            error
            errorMessage="You must accept the terms to continue"
            label="I accept the terms and conditions"
            /&gt;
        </code>
                            </div>
                        </section>

                        <!-- Indeterminate Checkbox -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Indeterminate Checkbox</h2>
                            <p class="tm-body mb-4">
                                Indeterminate checkboxes represent a state that is neither checked nor unchecked,
                                often used when some but not all sub-options are selected.
                            </p>

                            <div class="example-container p-6">
                                <Checkbox :indeterminate="indeterminateState" label="Some options selected" />
                                <button class="mt-4 px-4 py-2 bg-tm-primary text-white rounded"
                                    @click="indeterminateState = !indeterminateState">
                                    Toggle Indeterminate State
                                </button>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Checkbox
            :indeterminate="indeterminateState"
            label="Some options selected"
            /&gt;
        </code>
                            </div>
                        </section>

                        <!-- Multiple Checkboxes -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Multiple Checkboxes</h2>
                            <p class="tm-body mb-4">
                                Groups of checkboxes allow users to select multiple options from a list.
                            </p>

                            <div class="example-container p-6">
                                <div class="flex flex-col gap-2">
                                    <p class="tm-body font-medium mb-2">Select your preferences:</p>
                                    <Checkbox v-for="(option, index) in multipleOptions" :key="option.id"
                                        :id="option.id" :label="option.label" :value="option.id"
                                        :checked="option.checked" @change="updateOption(index, $event)" />
                                </div>
                                <p class="tm-body mt-4">
                                    Selected options:
                                    {{multipleOptions.filter(o => o.checked).map(o => o.label).join(', ') || 'None'}}
                                </p>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;div class="flex flex-col gap-2"&gt;
            &lt;p class="tm-body font-medium mb-2"&gt;Select your preferences:&lt;/p&gt;
            &lt;Checkbox
            v-for="(option, index) in multipleOptions"
            :key="option.id"
            :id="option.id"
            :label="option.label"
            :checked="option.checked"
            @change="updateOption(index, $event)"
            /&gt;
            &lt;/div&gt;
        </code>
                            </div>
                        </section>

                        <!-- Form Usage -->
                        <section class="showcase-section mb-8">
                            <h2 class="tm-h2 mb-4">Form Usage</h2>
                            <p class="tm-body mb-4">
                                Checkboxes in forms can use the value property to specify the data that will be
                                submitted.
                            </p>

                            <div class="example-container p-6">
                                <form @submit.prevent class="flex flex-col gap-4">
                                    <Checkbox name="consent" value="yes" label="I consent to data collection" />
                                    <Checkbox name="marketing" value="subscribe"
                                        label="Subscribe to marketing emails" />
                                    <button type="submit" class="px-4 py-2 bg-tm-primary text-white rounded mt-2 w-fit">
                                        Submit Form
                                    </button>
                                </form>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;form&gt;
            &lt;Checkbox
            name="consent"
            value="yes"
            label="I consent to data collection"
            /&gt;
            &lt;Checkbox
            name="marketing"
            value="subscribe"
            label="Subscribe to marketing emails"
            /&gt;
            &lt;button type="submit"&gt;Submit Form&lt;/button&gt;
            &lt;/form&gt;
        </code>
                            </div>
                        </section>

                        <!-- Custom Label Content -->
                        <section class="showcase-section">
                            <h2 class="tm-h2 mb-4">Custom Label Content</h2>
                            <p class="tm-body mb-4">
                                Use the default slot to customize the checkbox label with more complex content.
                            </p>

                            <div class="example-container p-6">
                                <Checkbox>
                                    <div class="flex items-center gap-2">
                                        <span class="font-bold">Subscribe to newsletter</span>
                                        <span class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full">
                                            Recommended
                                        </span>
                                    </div>
                                </Checkbox>
                            </div>

                            <div class="code-block p-4 rounded-lg mt-4">
                                <code class="block whitespace-pre-wrap">
            &lt;Checkbox&gt;
            &lt;div class="flex items-center gap-2"&gt;
            &lt;span class="font-bold"&gt;Subscribe to newsletter&lt;/span&gt;
            &lt;span class="bg-tm-primary text-white text-xs px-2 py-1 rounded-full"&gt;
            Recommended
            &lt;/span&gt;
            &lt;/div&gt;
            &lt;/Checkbox&gt;
        </code>
                            </div>
                        </section>
                    </div>
                </Tab>

                <Tab id="api" label="API">
                    <div class="mt-6">
                        <section class="showcase-section">
                            <h2 class="tm-h2 mb-4">Checkbox Component</h2>
                            <p class="tm-body mb-4">
                                The checkbox component allows users to select one or more items from a list,
                                or to toggle a single option on or off.
                            </p>

                            <h3 class="tm-h3 mt-6 mb-2">Props</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Prop</th>
                                        <th class="p-2 text-left">Type</th>
                                        <th class="p-2 text-left">Default</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">id</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">auto-generated</td>
                                        <td class="p-2">Unique identifier for the checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">name</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Name attribute for the checkbox input</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">label</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Text label for the checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">checked</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the checkbox is checked</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">modelValue</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">V-model binding value</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">value</td>
                                        <td class="p-2 font-mono">string | number | boolean</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Value attribute for the checkbox input, useful in forms</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">indeterminate</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the checkbox is in an indeterminate state</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">disabled</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the checkbox is disabled</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">required</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether the checkbox is required</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">size</td>
                                        <td class="p-2 font-mono">'default' | 'compact'</td>
                                        <td class="p-2 font-mono">'default'</td>
                                        <td class="p-2">Size of the checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">error</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">false</td>
                                        <td class="p-2">Whether to display the checkbox in an error state</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">errorMessage</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Error message to display when error is true</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">ariaLabel</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">Accessible label for the checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">ariaDescribedby</td>
                                        <td class="p-2 font-mono">string</td>
                                        <td class="p-2 font-mono">undefined</td>
                                        <td class="p-2">ID of an element that describes the checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">autoId</td>
                                        <td class="p-2 font-mono">boolean</td>
                                        <td class="p-2 font-mono">true</td>
                                        <td class="p-2">Whether to automatically generate an ID if none is provided</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">Events</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Event</th>
                                        <th class="p-2 text-left">Type</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">update:modelValue</td>
                                        <td class="p-2 font-mono">(value: boolean) => void</td>
                                        <td class="p-2">Emitted when the checkbox state changes (for v-model)</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">change</td>
                                        <td class="p-2 font-mono">(value: boolean) => void</td>
                                        <td class="p-2">Emitted when the checkbox state changes</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Name</th>
                                        <th class="p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">default</td>
                                        <td class="p-2">Custom content for the checkbox label</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                </Tab>

                <Tab id="accessibility" label="Accessibility">
                    <div class="mt-6">
                        <section class="showcase-section">
                            <h2 class="tm-h2 mb-4">Accessibility Considerations</h2>
                            <p class="tm-body mb-4">
                                The checkbox component follows WAI-ARIA Authoring Practices for checkboxes,
                                ensuring it's accessible to users of assistive technologies.
                            </p>

                            <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-tm-gray-2">
                                        <th class="p-2 text-left">Key</th>
                                        <th class="p-2 text-left">Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Space</td>
                                        <td class="p-2">Toggle the checked state of the focused checkbox</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Tab</td>
                                        <td class="p-2">Move focus to the next focusable element</td>
                                    </tr>
                                    <tr class="border-b border-tm-gray-2">
                                        <td class="p-2 font-mono">Shift + Tab</td>
                                        <td class="p-2">Move focus to the previous focusable element</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 class="tm-h3 mt-6 mb-2">ARIA Attributes</h3>
                            <p class="tm-body mb-4">
                                The checkbox component uses appropriate ARIA attributes to ensure proper accessibility:
                            </p>
                            <ul class="list-disc pl-6 space-y-2">
                                <li class="tm-body">
                                    <code>aria-label</code> for providing an accessible name when visual label is not
                                    used
                                </li>
                                <li class="tm-body">
                                    <code>aria-describedby</code> to associate the checkbox with a description or error
                                    message
                                </li>
                                <li class="tm-body">
                                    <code>aria-invalid</code> to indicate that the checkbox is in an error state
                                </li>
                                <li class="tm-body">
                                    <code>role="alert"</code> for error messages to announce changes to screen readers
                                </li>
                            </ul>

                            <h3 class="tm-h3 mt-6 mb-2">Best Practices</h3>
                            <ul class="list-disc pl-6 space-y-2">
                                <li class="tm-body">
                                    Always provide a visible label for checkboxes when possible
                                </li>
                                <li class="tm-body">
                                    Use <code>ariaLabel</code> when a visible label is not provided
                                </li>
                                <li class="tm-body">
                                    Ensure the checkbox has sufficient color contrast against its background
                                </li>
                                <li class="tm-body">
                                    Group related checkboxes together logically
                                </li>
                                <li class="tm-body">
                                    Make sure the clickable area is large enough (minimum 24px × 24px)
                                </li>
                                <li class="tm-body">
                                    Display error messages clearly and associate them with the checkbox using
                                    <code>aria-describedby</code>
                                </li>
                            </ul>
                        </section>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>

<style scoped>
.showcase-section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-tm-gray-2);
    border-radius: 0.5rem;
}

.example-container {
    background-color:  var(--color-tm-gray-0);
    border: 1px solid var(--color-tm-gray-2);
    border-radius: 0.5rem;
}

.dark .example-container {
    background-color:  var(--color-tm-gray-0);
    background-color: var(--color-tm-gray-9);
    border: 1px solid var(--color-tm-gray-2);
}

.code-block {
    background-color: var(--color-tm-gray-0);
    border: 1px solid var(--color-tm-gray-2);
}

.dark .code-block {
    background-color: var(--color-tm-gray-9);
    border: 1px solid var(--color-tm-gray-2);
}

</style>

