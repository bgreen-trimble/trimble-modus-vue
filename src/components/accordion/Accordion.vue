<script setup lang="ts">
import { provide, ref } from 'vue'

/**
 * Accordion component that groups related content and allows it to be expanded or collapsed.
 * Helps organize and progressively disclose content to reduce visual clutter and focus users' attention.
 */

/**
 * Props for the Accordion component.
 *
 * @property {'default' | 'compact'} [size] - Size variant of the accordion.
 * @property {boolean} [borderless] - Whether to display the accordion without a border.
 * @property {boolean} [allowMultiple] - Whether multiple accordion items can be expanded at once.
 */
export interface AccordionProps {
    size?: 'default' | 'compact'
    borderless?: boolean
    allowMultiple?: boolean
}

const props = withDefaults(defineProps<AccordionProps>(), {
    size: 'default',
    borderless: false,
    allowMultiple: false
})

const expandedItems = ref<string[]>([])

// Toggle an accordion item's expanded state
const toggleItem = (itemId: string, disabled: boolean) => {
    if (disabled) return

    if (props.allowMultiple) {
        // For multiple mode, toggle the presence of the itemId in the array
        const index = expandedItems.value.indexOf(itemId)
        if (index === -1) {
            expandedItems.value.push(itemId)
        } else {
            expandedItems.value.splice(index, 1)
        }
    } else {
        // For single mode, either set to only this itemId or clear if already expanded
        expandedItems.value = expandedItems.value[0] === itemId ? [] : [itemId]
    }
}

// Check if an item is expanded
const isExpanded = (itemId: string) => {
    return expandedItems.value.includes(itemId)
}

// Provide methods to child components
provide('toggleItem', toggleItem)
provide('isExpanded', isExpanded)
</script>

<template>
    <div :class="[
        'tm-accordion',
        `tm-accordion-${size}`,
        { 'tm-accordion-borderless': borderless }
    ]">
        <slot></slot>
    </div>
</template>

<style>
@import './accordion.css';
</style>
