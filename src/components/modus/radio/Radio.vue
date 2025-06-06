<script setup lang="ts">
import { computed, ref, watch } from 'vue'

/**
 * Radio component allows users to select a single option from a list.
 */

/**
 * Props for the Radio component.
 *
 * @property {string} [id] - The id attribute for the radio input.
 * @property {string} [name] - The name attribute for the radio input.
 * @property {string} [label] - The text label for the radio button.
 * @property {boolean} [checked] - Whether the radio button is checked.
 * @property {any} [modelValue] - v-model binding for the radio button.
 * @property {string|number|boolean} [value] - The value attribute of the radio button.
 * @property {boolean} [disabled] - Whether the radio button is disabled.
 * @property {boolean} [required] - Whether the radio button is required.
 * @property {string} [size] - The size of the radio button ('default' or 'compact').
 * @property {string} [ariaLabel] - Accessible label for the radio button.
 * @property {string} [ariaDescribedby] - ID of an element that describes the radio button.
 * @property {boolean} [autoId] - Whether to automatically generate an ID if none is provided.
 */
export interface RadioProps {
    id?: string
    name?: string
    label?: string
    checked?: boolean
    modelValue?: any
    value?: string | number | boolean
    disabled?: boolean
    required?: boolean
    size?: 'default' | 'compact'
    ariaLabel?: string
    ariaDescribedby?: string
    autoId?: boolean
}

const props = withDefaults(defineProps<RadioProps>(), {
    id: undefined,
    name: undefined,
    label: undefined,
    checked: false,
    modelValue: undefined,
    value: undefined,
    disabled: false,
    required: false,
    size: 'default',
    ariaLabel: undefined,
    ariaDescribedby: undefined,
    autoId: true
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'change', value: any): void
}>()

// Generate a unique ID if none is provided and autoId is true
const uniqueId = `radio-${Math.random().toString(36).substring(2, 9)}`
const radioId = computed(() => props.id || (props.autoId ? uniqueId : undefined))

// Handle the internal checked state
const isChecked = computed(() => {
    if (props.modelValue !== undefined) {
        return props.modelValue === props.value
    }
    return props.checked
})

// Handle radio button changes
const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const newValue = props.value !== undefined ? props.value : target.value

    // Emit both events for flexibility
    emit('update:modelValue', newValue)
    emit('change', newValue)
}
</script>

<template>
    <div :class="[
        'tm-radio-container',
        `tm-radio-${size}`,
        {
            'tm-radio-disabled': disabled
        }
    ]">
        <input type="radio" :class="'tm-radio-input'" :id="radioId" :name="name"
            :value="value" :checked="isChecked" :disabled="disabled" :required="required" :aria-label="ariaLabel"
            :aria-describedby="ariaDescribedby" @change="handleChange" />
        <label v-if="label || $slots.default" :for="radioId"
            :class="['tm-radio-label', { 'tm-radio-required': required }]">
            <slot>{{ label }}</slot>
        </label>
    </div>
</template>
