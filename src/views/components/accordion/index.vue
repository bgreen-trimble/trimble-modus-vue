<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Tab } from '@/components'
import AccordionFeatures from './AccordionFeatures.vue'
import AccordionAPI from './AccordionAPI.vue'
import AccordionAccessibility from './AccordionAccessibility.vue'

const activeTab = ref('features')
</script>

<template>
    <div class="tm-container">
        <!-- Header Section -->
        <div class="showcase-header mb-6">
            <h1 class="tm-h1 mb-2">Accordion</h1>
            <p class="tm-body mb-6">
                Accordions organize and allow navigation between groups of content. They deliver large amounts of
                content
                in a small space through progressive disclosure.
            </p>
        </div>

        <!-- Navigation Tabs -->
        <div class="mb-8">
            <Tabs :active="activeTab" @update:active="activeTab = $event">
                <Tab id="features" label="Features">
                    <AccordionFeatures />
                </Tab>
                <Tab id="api" label="API">
                    <AccordionAPI />
                </Tab>
                <Tab id="accessibility" label="Accessibility">
                    <AccordionAccessibility />
                </Tab>
            </Tabs>
        </div>
    </div>
</template>
