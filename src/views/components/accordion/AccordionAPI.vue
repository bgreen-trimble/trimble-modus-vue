<script setup lang="ts">
</script>

<template>
    <div class="mt-6">
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Accordion Component</h2>
            <p class="tm-body mb-4">
                The main container for accordion items.
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
                        <td class="p-2 font-mono">size</td>
                        <td class="p-2 font-mono">'default' | 'compact'</td>
                        <td class="p-2 font-mono">'default'</td>
                        <td class="p-2">Size variant of the accordion</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">borderless</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether to display the accordion without a border</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">allowMultiple</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether multiple accordion items can be expanded at once</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">showActiveBorder</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether to show an active border on all accordion items</td>
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
                        <td class="p-2">Content for the accordion (AccordionItem components)</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="showcase-section">
            <h2 class="tm-h2 mb-4">AccordionItem Component</h2>
            <p class="tm-body mb-4">
                Individual expandable/collapsible sections within an Accordion.
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
                        <td class="p-2 font-mono">-</td>
                        <td class="p-2">Unique identifier for the accordion item</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">title</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">-</td>
                        <td class="p-2">Title text for the accordion item header</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">defaultExpanded</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the accordion item is expanded by default</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">disabled</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether the accordion item is disabled</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">icon</td>
                        <td class="p-2 font-mono">string</td>
                        <td class="p-2 font-mono">-</td>
                        <td class="p-2">Modus icon name to display in the header</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">showActiveBorder</td>
                        <td class="p-2 font-mono">boolean</td>
                        <td class="p-2 font-mono">false</td>
                        <td class="p-2">Whether to show an active border when expanded</td>
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
                        <td class="p-2">Content to display when the accordion item is expanded</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">title</td>
                        <td class="p-2">Custom content for the accordion item header</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
