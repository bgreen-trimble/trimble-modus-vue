<script setup lang="ts">
</script>

<template>
    <div class="mt-6">
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Radio Component</h2>
            <p class="tm-body mb-4">
                The individual radio button component that can be used standalone or within a RadioGroup.
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
                        <td class="p-2 font-mono">Auto-generated</td>
                        <td class="p-2">The ID attribute for the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">name</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">The name attribute for the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">label</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">The text label for the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">checked</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the radio button is checked</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">modelValue</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">v-model binding for the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">value</td>
                        <td class="p-2 font-mono">string | number | boolean</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">The value attribute of the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">disabled</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the radio button is disabled</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">required</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the radio button is required</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">size</td>
                        <td class="p-2 font-mono">'default' | 'compact'</td>
                        <td class="p-2 font-mono">'default'</td>
                        <td class="p-2">The size of the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">ariaLabel</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">Accessible label for the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">ariaDescribedby</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">ID of an element that describes the radio button</td>
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
                        <th class="p-2 text-left">Payload</th>
                        <th class="p-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">update:modelValue</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2">Emitted when the radio button value changes</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">change</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2">Emitted when the radio button value changes</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b border-tm-gray-2">
                        <th class="p-2 text-left">Slot</th>
                        <th class="p-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">default</td>
                        <td class="p-2">Custom content for the radio button label</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">RadioGroup Component</h2>
            <p class="tm-body mb-4">
                Container component that manages a group of radio buttons.
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
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">The ID attribute for the radio group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">name</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">Auto-generated</td>
                        <td class="p-2">The name attribute shared by all radio buttons in the group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">label</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">The text label for the radio group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">modelValue</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">v-model binding for the radio group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">disabled</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the entire radio group is disabled</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">required</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether selection in the radio group is required</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">size</td>
                        <td class="p-2 font-mono">'default' | 'compact'</td>
                        <td class="p-2 font-mono">'default'</td>
                        <td class="p-2">The size of all radio buttons in the group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">orientation</td>
                        <td class="p-2 font-mono">'vertical' | 'horizontal'</td>
                        <td class="p-2 font-mono">'vertical'</td>
                        <td class="p-2">The orientation of the radio group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">ariaLabel</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">Accessible label for the radio group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">ariaDescribedby</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">undefined</td>
                        <td class="p-2">ID of an element that describes the radio group</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="tm-h3 mt-6 mb-2">Events</h3>
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b border-tm-gray-2">
                        <th class="p-2 text-left">Event</th>
                        <th class="p-2 text-left">Payload</th>
                        <th class="p-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">update:modelValue</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2">Emitted when the selected value in the group changes</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">change</td>
                        <td class="p-2 font-mono">any</td>
                        <td class="p-2">Emitted when the selected value in the group changes</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="tm-h3 mt-6 mb-2">Slots</h3>
            <table class="w-full border-collapse">
                <thead>
                    <tr class="border-b border-tm-gray-2">
                        <th class="p-2 text-left">Slot</th>
                        <th class="p-2 text-left">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">default</td>
                        <td class="p-2">Content area for Radio components</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
