<script setup lang="ts">
import { ref } from 'vue'
import { Radio, RadioGroup, Card } from '@/components'
import { CodeExample } from '@/components/app/code-example'

// Example states for radio buttons
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
    <div class="mt-6">
        <!-- Default Radio Button -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Default Radio Button</h2>
            <p class="tm-body mb-4">
                The default radio button is used for selecting a single option from a list.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`<div><Radio 
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
/></div>`}}
            </CodeExample>
        </section>

        <!-- Radio Group -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Radio Group</h2>
            <p class="tm-body mb-4">
                Radio groups help organize related radio buttons and manage their state collectively.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`<RadioGroup 
  label="Select a size" 
  name="size" 
  v-model="selectedSize"
  required
>
  <Radio value="small" label="Small" />
  <Radio value="medium" label="Medium" />
  <Radio value="large" label="Large" />
</RadioGroup>`}}
            </CodeExample>
        </section>

        <!-- Horizontal Radio Group -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Horizontal Radio Group</h2>
            <p class="tm-body mb-4">
                Radio groups can be displayed horizontally for a more compact layout or when space is limited.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`<RadioGroup 
  label="Notification preference" 
  name="notification" 
  v-model="selectedNotification"
  orientation="horizontal"
>
  <Radio value="email" label="Email" />
  <Radio value="sms" label="SMS" />
  <Radio value="push" label="Push notification" />
</RadioGroup>`}}
            </CodeExample>
        </section>

        <!-- Compact Radio Buttons -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Compact Radio Buttons</h2>
            <p class="tm-body mb-4">
                Compact radio buttons are used in space-constrained scenarios or within tables and forms
                that require a denser layout.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`<Card>
  <template #title>Language Settings</template>
  <div>
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
  </RadioGroup></div>
</Card>`}}
            </CodeExample>
        </section>

        <!-- Disabled Radio Buttons -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Disabled Radio Buttons</h2>
            <p class="tm-body mb-4">
                Disabled radio buttons indicate that a selection is not available for interaction.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`<div><Radio 
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
/></div>`}}
            </CodeExample>
        </section>

        <!-- Dynamic Radio Buttons -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Dynamic Radio Buttons</h2>
            <p class="tm-body mb-4">
                Radio buttons can be generated dynamically from an array of options.
            </p>

            <div class="example-container p-6 bg-tm-gray-0 border border-tm-gray-2 rounded-lg dark:bg-tm-gray-10 dark:border-tm-gray-8">
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

            <CodeExample language="vue" class="mt-4">
                {{`// In the script
const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' }
]
const selectedColor = ref('blue')

// In the template
<div>
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
</RadioGroup></div>`}}
            </CodeExample>
        </section>
    </div>
</template>
