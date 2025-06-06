<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button, Switch, Slider } from '@/components';
import { CodeFormatter } from '@/components/app/code-example';

const positions = ['top', 'right', 'bottom', 'left'];
const position = ref('top');
const delay = ref(0);
const content = ref('This is a tooltip');
const switchValue = ref(false);
const sliderValue = ref(50);

const exampleCode = computed(() => {
    if (position.value === 'top' && delay.value === 0) {
        return `<Button v-tooltip="${content.value}">Hover Me</Button>`;
    }

    return `<Button v-tooltip="{
    content: '${content.value}',
    position: '${position.value}'${delay.value > 0 ? `,
    delay: ${delay.value}` : ''}
}">Hover Me</Button>`;
});
</script>

<template>
    <div class="tm-container">
        <!-- Header Section -->
        <div class="showcase-header mb-6">
            <h1 class="tm-h1 mb-2">Tooltip</h1>
            <p class="tm-body mb-6">
                The tooltip directive provides a simple way to add tooltips to any element.
                Tooltips can be positioned and delayed to suit your application's needs.
            </p>
        </div>

        <!-- Basic Usage -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Basic Usage</h2>

            <div class="grid grid-cols-1 gap-8">
                <!-- Simple String Example -->
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <h3 class="tm-h3 mb-2">Simple String Tooltip</h3>
                        <p class="tm-body mb-4">
                            For basic usage, simply pass a string to the v-tooltip directive.
                        </p>

                        <div class="example-container p-6 mb-4">
                            <Button v-tooltip="'This is a simple tooltip'" variant="filled">
                                Hover Me
                            </Button>
                        </div>
                    </div>

                    <CodeFormatter language="vue">
                        {{ `<Button v-tooltip="'This is a simple tooltip'" variant="filled">
                            Hover Me
                        </Button>`}}
                    </CodeFormatter>
                </div>

                <!-- Object Configuration Example -->
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <h3 class="tm-h3 mb-2">Object Configuration</h3>
                        <p class="tm-body mb-4">
                            For more control, pass an object with configuration options.
                        </p>

                        <div class="example-container p-6 mb-4">
                            <Button v-tooltip="{ content: 'Configured tooltip', position: 'right' }" variant="outlined">
                                Configured Tooltip
                            </Button>
                        </div>
                    </div>

                    <CodeFormatter language="vue">
                        {{ `<Button v-tooltip="{
    content: 'Configured tooltip',
    position: 'right'
}" variant="outlined">Configured Tooltip</Button>`}}
                    </CodeFormatter>
                </div>
            </div>
        </section>

        <!-- Interactive Components -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Interactive Components</h2>
            <p class="tm-body mb-4">
                Tooltips can be used with interactive components to provide additional context.
            </p>

            <div class="grid grid-cols-1 gap-8">
                <!-- Switch Example -->
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <h3 class="tm-h3 mb-2">Switch with Tooltip</h3>
                        <div class="example-container p-6 mb-4">
                            <div class="flex items-center gap-4">
                                <Switch v-model="switchValue" v-tooltip="{
                                    content: switchValue ? 'Click to disable' : 'Click to enable',
                                    position: 'right'
                                }" />
                                <span class="tm-body">Status: {{ switchValue ? 'Enabled' : 'Disabled' }}</span>
                            </div>
                        </div>
                    </div>

                    <CodeFormatter language="vue">
                        {{ `
                        <Switch v-model="switchValue"
                            v-tooltip="{content: switchValue ? 'Click to disable' : 'Click to enable', position: 'right'}" />
                        `}}
                    </CodeFormatter>
                </div>

                <!-- Slider Example -->
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <h3 class="tm-h3 mb-2">Slider with Tooltip</h3>
                        <div class="example-container p-6 mb-4">
                            <Slider v-model="sliderValue" v-tooltip="{
                                content: `Current value: ${sliderValue}%`,
                                position: 'top'
                            }" />
                        </div>
                    </div>

                    <CodeFormatter language="vue">
                        {{`
                        <Slider v-model="sliderValue"
                            v-tooltip="{ position: 'top' content: \`Current value: \${sliderValue}%\` }" />`}}
                    </CodeFormatter>
                </div>
            </div>
        </section>

        <!-- Positions -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Tooltip Positions</h2>
            <p class="tm-body mb-4">
                Tooltips can be positioned around the element. Available positions are: top, right, bottom, and left.
            </p>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="example-container p-6 mb-4">
                        <div class="flex flex-wrap justify-center gap-4 mb-6">
                            <Button v-for="pos in positions" :key="pos"
                                v-tooltip="{ content: `${pos.charAt(0).toUpperCase() + pos.slice(1)} tooltip`, position: pos }"
                                variant="outlined" :severity="position === pos ? 'primary' : 'secondary'"
                                @click="position = pos">
                                {{ pos.charAt(0).toUpperCase() + pos.slice(1) }}
                            </Button>
                        </div>

                        <div class="flex justify-center">
                            <Button v-tooltip="{ content: 'Position example', position }" variant="filled">
                                Hover for {{ position }} tooltip
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Delay -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Tooltip Delay</h2>
            <p class="tm-body mb-4">
                You can add a delay before the tooltip appears, which can be useful for preventing accidental
                triggering.
            </p>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="example-container p-6 mb-4">
                        <div class="flex flex-wrap items-center gap-4 mb-6">
                            <span class="tm-body">Delay: {{ delay }}ms</span>
                            <input type="range" min="0" max="1000" step="100" v-model.number="delay" class="w-64">
                        </div>

                        <div class="flex justify-center">
                            <Button v-tooltip="{ content: 'Delayed tooltip', delay }" variant="filled">
                                Hover for delayed tooltip
                            </Button>
                        </div>
                    </div>
                </div>

                <CodeFormatter language="vue">
                    {{ `<Button v-tooltip="{ content: 'Delayed tooltip', delay: 500 }" variant="filled">
                        Hover for delayed tooltip
                    </Button>`}}
                </CodeFormatter>
            </div>
        </section>

        <!-- Custom Configuration -->
        <section class="showcase-section mb-8">
            <h2 class="tm-h2 mb-4">Custom Configuration</h2>
            <p class="tm-body mb-4">
                Try different combinations of options to see how they work together.
            </p>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="example-container p-6 mb-4">
                        <div class="grid md:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label class="tm-body block mb-2">Content:</label>
                                <input type="text" v-model="content"
                                    class="w-full p-2 border border-tm-gray-2 dark:border-tm-gray-8 rounded">
                            </div>

                            <div>
                                <label class="tm-body block mb-2">Position:</label>
                                <select v-model="position"
                                    class="w-full p-2 border border-tm-gray-2 dark:border-tm-gray-8 rounded">
                                    <option v-for="pos in positions" :key="pos" :value="pos">
                                        {{ pos.charAt(0).toUpperCase() + pos.slice(1) }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="tm-body block mb-2">Delay: {{ delay }}ms</label>
                                <input type="range" min="0" max="1000" step="100" v-model.number="delay" class="w-full">
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <Button v-tooltip="{ content, position, delay }" variant="filled">
                                Try your custom tooltip
                            </Button>
                        </div>
                    </div>
                </div>

                <CodeFormatter language="vue">{{ exampleCode }}</CodeFormatter>
            </div>
        </section>

        <!-- Accessibility -->
        <section class="showcase-section">
            <h2 class="tm-h2 mb-4">Accessibility</h2>
            <p class="tm-body mb-4">
                For icon-only buttons or elements without text content, it's recommended to add an
                <code>aria-label</code> for screen readers.
            </p>

            <div class="grid grid-cols-1 gap-4">
                <div>
                    <div class="example-container p-6 mb-4">
                        <div class="flex justify-center">
                            <Button aria-label="Settings" v-tooltip="'Settings'"
                                class="p-2 rounded-full hover:bg-tm-gray-1 dark:hover:bg-tm-gray-9 transition-colors"
                                variant="text">
                                <i class="modus-icons" aria-hidden="true">settings</i>
                            </Button>
                        </div>
                    </div>
                </div>

                <CodeFormatter language="vue">
                    {{ `<Button aria-label="Settings" v-tooltip="'Settings'"
                        class="p-2 rounded-full hover:bg-tm-gray-1 dark:hover:bg-tm-gray-9 transition-colors"
                        variant="text">
                        <i class="modus-icons" aria-hidden="true">settings</i>
                    </Button>`
                    }}
                </CodeFormatter>
            </div>
        </section>
    </div>
</template>

<style scoped>
.showcase-section {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid var(--color-tm-gray-2, #e0e1e9);
    border-radius: 0.5rem;
}

.example-container {
    background-color: var(--color-tm-gray-0, #f7f9fa);
    border: 1px solid var(--color-tm-gray-2, #e0e1e9);
    border-radius: 0.5rem;
}

@media (prefers-color-scheme: dark) {
    .showcase-section {
        border-color: var(--color-tm-gray-8, #4c505b);
    }

    .example-container {
        background-color: var(--color-tm-gray-10, #2c3038);
        border-color: var(--color-tm-gray-8, #4c505b);
    }
}

:root.dark .showcase-section {
    border-color: var(--color-tm-gray-8, #4c505b);
}

:root.dark .example-container {
    background-color: var(--color-tm-gray-10, #2c3038);
    border-color: var(--color-tm-gray-8, #4c505b);
}
</style>
