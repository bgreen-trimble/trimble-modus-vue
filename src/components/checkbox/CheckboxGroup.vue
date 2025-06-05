<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import './checkbox.css'

/**
 * CheckboxGroup component provides a wrapper for multiple Checkbox components,
 * managing their state and providing a unified v-model interface.
 */

/**
 * Props for the CheckboxGroup component.
 *
 * @property {Array<string|number>} [modelValue] - Array of selected values.
 * @property {string} [name] - Name attribute for the group of checkboxes.
 * @property {boolean} [disabled] - Whether all checkboxes in the group are disabled.
 * @property {string} [size] - Size of all checkboxes in the group ('default' or 'compact').
 * @property {boolean} [required] - Whether at least one checkbox in the group must be selected.
 * @property {boolean} [error] - Whether to display all checkboxes in an error state.
 * @property {string} [errorMessage] - Error message to display for the group.
 */
export interface CheckboxGroupProps {
    modelValue?: Array<string | number>
    name?: string
    disabled?: boolean
    size?: 'default' | 'compact'
    required?: boolean
    error?: boolean
    errorMessage?: string
}

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    modelValue: () => [],
    name: undefined,
    disabled: false,
    size: 'default',
    required: false,
    error: false,
    errorMessage: undefined
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: Array<string | number>): void
    (e: 'change', value: Array<string | number>): void
}>()

// Generate a unique ID for the group
const groupId = `checkbox-group-${Math.random().toString(36).substring(2, 9)}`

// Internal state for selected values
const selectedValues = ref<Array<string | number>>(props.modelValue || [])

// Watch for prop changes to update internal state
watch(() => props.modelValue, (newValue) => {
    selectedValues.value = newValue || []
})

// Handle checkbox value changes
const updateValue = (value: string | number, checked: boolean) => {
    let newSelected = [...selectedValues.value]

    if (checked) {
        // Add the value if it's not already in the array
        if (!newSelected.includes(value)) {
            newSelected.push(value)
        }
    } else {
        // Remove the value from the array
        newSelected = newSelected.filter(v => v !== value)
    }

    selectedValues.value = newSelected

    // Emit both events for flexibility
    emit('update:modelValue', newSelected)
    emit('change', newSelected)
}

// Provide context to child checkboxes
provide('checkboxGroupContext', {
    name: props.name,
    size: props.size,
    disabled: props.disabled,
    selectedValues,
    updateValue
})
</script>

<template>
    <div :class="[
        'tm-checkbox-group',
        {
            'tm-checkbox-group-error': error
        }
    ]" role="group" :aria-labelledby="$slots.label ? `${groupId}-label` : undefined"
        :aria-describedby="error && errorMessage ? `${groupId}-error` : undefined" :aria-invalid="error"
        :aria-required="required">
        <div v-if="$slots.label" :id="`${groupId}-label`" class="tm-checkbox-group-label">
            <slot name="label"></slot>
            <span v-if="required" class="tm-checkbox-required" aria-hidden="true"></span>
        </div>

        <div class="tm-checkbox-group-items">
            <slot></slot>
        </div>

        <div v-if="error && errorMessage" :id="`${groupId}-error`" class="tm-checkbox-error-message" role="alert">
            {{ errorMessage }}
        </div>
    </div>
</template>
