<script setup lang="ts">
import { computed, inject, ref, onMounted } from 'vue'

/**
 * AccordionItem component represents a single expandable/collapsible section within an Accordion.
 * It consists of a header that users can click to show or hide the associated content.
 */

/**
 * Props for the AccordionItem component.
 *
 * @property {string} id - Unique identifier for the accordion item.
 * @property {string} title - Text to display in the accordion header.
 * @property {string} [icon] - Optional icon to display before the title.
 * @property {boolean} [disabled] - Whether the accordion item is disabled.
 * @property {boolean} [defaultExpanded] - Whether the accordion item should be expanded by default.
 * @property {boolean} [showActiveBorder] - Whether to show a vertical blue bar on the left when expanded.
 */
export interface AccordionItemProps {
    id: string
    title: string
    icon?: string
    disabled?: boolean
    defaultExpanded?: boolean
    showActiveBorder?: boolean
}

const props = withDefaults(defineProps<AccordionItemProps>(), {
    disabled: false,
    defaultExpanded: false,
    showActiveBorder: undefined // Use parent's value if not set
})

const isExpanded = inject<(id: string) => boolean>('isExpanded', () => false)
const toggleItem = inject<(id: string, disabled: boolean) => void>('toggleItem', () => { })
const hasShowActiveBorder = inject<() => boolean>('hasShowActiveBorder', () => false)

// Use parent's showActiveBorder if prop is not explicitly set
const effectiveShowActiveBorder = computed(() => {
    return props.showActiveBorder !== undefined
        ? props.showActiveBorder
        : hasShowActiveBorder()
})

// Generate unique IDs for ARIA attributes
const headingId = computed(() => `accordion-heading-${props.id}`)
const contentId = computed(() => `accordion-content-${props.id}`)

// Handle keyboard navigation within accordion
const handleKeyDown = (event: KeyboardEvent) => {
    if (props.disabled) return

    switch (event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault()
            toggleItem(props.id, props.disabled)
            break
    }
}

// Initialize default expanded state if needed
onMounted(() => {
    if (props.defaultExpanded && !props.disabled) {
        toggleItem(props.id, props.disabled)
    }
})
</script>

<template>
    <div :class="[
        'tm-accordion-item',
        {
            'tm-accordion-item-active': isExpanded(id),
            'tm-accordion-item-disabled': disabled,
            'tm-accordion-item-with-active-border': effectiveShowActiveBorder
        }
    ]">
        <h3>
            <button :class="'tm-accordion-item-header'" :id="headingId" :aria-expanded="isExpanded(id)"
                :aria-controls="contentId" :aria-disabled="disabled" :tabindex="disabled ? -1 : 0"
                @click="toggleItem(id, disabled)" @keydown="handleKeyDown">
                <span class="tm-accordion-item-title">
                    <i v-if="icon" class="modus-icons" aria-hidden="true">{{ icon }}</i>
                    <slot name="title">{{ title }}</slot>
                </span>
                <i class="modus-icons tm-accordion-item-icon" aria-hidden="true">expand_more</i>
            </button>
        </h3>
        <div :id="contentId" :class="'tm-accordion-item-content'" role="region" :aria-labelledby="headingId">
            <slot></slot>
        </div>
    </div>
</template>
