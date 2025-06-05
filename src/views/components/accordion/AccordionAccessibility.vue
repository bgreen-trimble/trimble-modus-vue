<script setup lang="ts">
</script>

<template>
    <div class="mt-6">
        <section class="showcase-section">
            <h2 class="tm-h2 mb-4">Accessibility Guidelines</h2>

            <h3 class="tm-h3 mt-6 mb-2">ARIA Attributes</h3>
            <p class="tm-body mb-4">
                The Modus Vue Accordion component implements the following ARIA attributes:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><code>role="region"</code> - Applied to the content section of each accordion
                    item</li>
                <li class="mb-2"><code>aria-labelledby</code> - Links the content section to its header
                    button</li>
                <li class="mb-2"><code>aria-expanded</code> - Indicates whether an accordion item is expanded or
                    collapsed</li>
                <li class="mb-2"><code>aria-disabled</code> - Applied to disabled accordion items</li>
                <li class="mb-2"><code>aria-controls</code> - Links the header button to its controlled content
                    section</li>
            </ul>

            <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
            <p class="tm-body mb-4">
                The accordion component supports the following keyboard interactions:
            </p>
            <table class="w-full border-collapse mb-6">
                <thead>
                    <tr class="border-b border-tm-gray-2">
                        <th class="p-2 text-left">Key</th>
                        <th class="p-2 text-left">Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Enter/Space</td>
                        <td class="p-2">When focus is on the accordion header, toggles the expansion of the associated
                            panel</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Tab</td>
                        <td class="p-2">Moves focus to the next focusable element</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Shift + Tab</td>
                        <td class="p-2">Moves focus to the previous focusable element</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Up Arrow</td>
                        <td class="p-2">When focus is on an accordion header, moves focus to the previous accordion
                            header</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Down Arrow</td>
                        <td class="p-2">When focus is on an accordion header, moves focus to the next accordion header
                        </td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Home</td>
                        <td class="p-2">When focus is on an accordion header, moves focus to the first accordion header
                        </td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">End</td>
                        <td class="p-2">When focus is on an accordion header, moves focus to the last accordion header
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3 class="tm-h3 mt-6 mb-2">Best Practices</h3>
            <ul class="list-disc pl-6">
                <li class="mb-2">Ensure accordion titles are descriptive and unique within the accordion group</li>
                <li class="mb-2">Use the <code>title</code> prop or slot for clear, concise headers that describe the
                    content</li>
                <li class="mb-2">If using icons, ensure they are decorative and don't convey crucial information</li>
                <li class="mb-2">Maintain a logical tab order within expanded content sections</li>
                <li class="mb-2">Consider using <code>allowMultiple</code> when users need to compare information
                    across sections</li>
                <li class="mb-2">Ensure sufficient color contrast for all text and interactive elements</li>
            </ul>
        </section>
    </div>
</template>
