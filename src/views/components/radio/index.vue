<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Tab } from '@/components'
import RadioFeatures from './RadioFeatures.vue'
import RadioAPI from './RadioAPI.vue'
import RadioAccessibility from './RadioAccessibility.vue'

const activeTab = ref('features')
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
                    <RadioFeatures />
                </Tab>
                <Tab id="api" label="API">
                    <RadioAPI />
                </Tab>
                <Tab id="accessibility" label="Accessibility">
                    <RadioAccessibility />
                </Tab>
            </Tabs>
        </div>
    </div>
</template>
