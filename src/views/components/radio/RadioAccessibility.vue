<script setup lang="ts">
</script>

<template>
    <div class="mt-6">
        <section class="showcase-section">
            <h2 class="tm-h2 mb-4">Accessibility Guidelines</h2>

            <h3 class="tm-h3 mt-6 mb-2">ARIA Attributes</h3>
            <p class="tm-body mb-4">
                The Modus Vue Radio components implement the following ARIA attributes:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><code>role="radiogroup"</code> - Applied to the RadioGroup component to indicate it contains a group of radio buttons</li>
                <li class="mb-2"><code>aria-label</code> - Provides an accessible name when visible text label is not available</li>
                <li class="mb-2"><code>aria-labelledby</code> - References the ID of an element that labels the radio button or group</li>
                <li class="mb-2"><code>aria-describedby</code> - References the ID of an element that provides additional information</li>
                <li class="mb-2"><code>aria-required</code> - Indicates that user input is required on the radio group</li>
                <li class="mb-2"><code>aria-disabled</code> - Applied to disabled radio buttons or groups</li>
            </ul>

            <h3 class="tm-h3 mt-6 mb-2">Keyboard Navigation</h3>
            <p class="tm-body mb-4">
                The radio button components support the following keyboard interactions:
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
                        <td class="p-2 font-mono">Tab</td>
                        <td class="p-2">Moves focus to the radio button or the first radio button in a group</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Shift + Tab</td>
                        <td class="p-2">Moves focus to the previous focusable element</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Space</td>
                        <td class="p-2">When focus is on a radio button, selects the radio button</td>
                    </tr>
                    <tr class="border-b border-tm-gray-2">
                        <td class="p-2 font-mono">Arrow Keys (Up/Down or Left/Right)</td>
                        <td class="p-2">When focus is within a radio group, moves between radio buttons in the group and selects the focused button</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="tm-h3 mt-6 mb-2">Screen Reader Considerations</h3>
            <p class="tm-body mb-4">
                To ensure optimal screen reader support:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Always provide descriptive labels for radio buttons</li>
                <li class="mb-2">Group related radio buttons using the RadioGroup component</li>
                <li class="mb-2">Provide a descriptive label for each RadioGroup</li>
                <li class="mb-2">Use aria attributes when visual labels are not available</li>
                <li class="mb-2">Ensure proper focus management by maintaining a logical tab order</li>
            </ul>

            <h3 class="tm-h3 mt-6 mb-2">Visual Considerations</h3>
            <p class="tm-body mb-4">
                The Modus Vue Radio components provide:
            </p>
            <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Clear visual focus indicators for keyboard navigation</li>
                <li class="mb-2">Sufficient color contrast that meets WCAG 2.1 AA standards</li>
                <li class="mb-2">Visible states (selected, unselected, disabled) that don't rely solely on color</li>
                <li class="mb-2">Touch targets that are large enough for users with motor control limitations</li>
            </ul>

            <h3 class="tm-h3 mt-6 mb-2">Best Practices</h3>
            <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Use radio buttons when users need to select exactly one option from a list</li>
                <li class="mb-2">For optional selections where users might select none, provide a "None" or "Not applicable" option</li>
                <li class="mb-2">Use checkboxes instead when users can select multiple options or toggle a single option</li>
                <li class="mb-2">Keep labels short and clear</li>
                <li class="mb-2">Position labels consistently (typically to the right of the radio button)</li>
                <li class="mb-2">Avoid changing form content based solely on the selection of a radio button without informing the user</li>
            </ul>
        </section>
    </div>
</template>
