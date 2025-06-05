<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import './checkbox.css'

/**
 * Checkbox component allows users to select one or more items from a list,
 * or to toggle a single option on or off.
 */

/**
 * Props for the Checkbox component.
 *
 * @property {string} [id] - The id attribute for the checkbox input.
 * @property {string} [name] - The name attribute for the checkbox input.
 * @property {string} [label] - The text label for the checkbox.
 * @property {boolean} [checked] - Whether the checkbox is checked.
 * @property {boolean} [modelValue] - v-model binding for the checkbox.
 * @property {string|number|boolean} [value] - The value attribute of the checkbox, useful in forms.
 * @property {boolean} [indeterminate] - Whether the checkbox is in an indeterminate state.
 * @property {boolean} [disabled] - Whether the checkbox is disabled.
 * @property {boolean} [required] - Whether the checkbox is required.
 * @property {string} [size] - The size of the checkbox ('default' or 'compact').
 * @property {string} [ariaLabel] - Accessible label for the checkbox.
 * @property {string} [ariaDescribedby] - ID of an element that describes the checkbox.
 * @property {boolean} [autoId] - Whether to automatically generate an ID if none is provided.
 */
export interface CheckboxProps {
    id?: string
    name?: string
    label?: string
    checked?: boolean
    modelValue?: boolean
    value?: string | number | boolean
    indeterminate?: boolean
    disabled?: boolean
    required?: boolean
    size?: 'default' | 'compact'
    ariaLabel?: string
    ariaDescribedby?: string
    autoId?: boolean
}

const props = withDefaults(defineProps<CheckboxProps>(), {
    id: undefined,
    name: undefined,
    label: undefined,
    checked: false,
    modelValue: undefined,
    value: undefined,
    indeterminate: false,
    disabled: false,
    required: false,
    size: 'default',
    ariaLabel: undefined,
    ariaDescribedby: undefined,
    autoId: true
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'change', value: boolean): void
}>()

// Generate a unique ID if none is provided and autoId is true
const uniqueId = `checkbox-${Math.random().toString(36).substring(2, 9)}`
const checkboxId = computed(() => props.id || (props.autoId ? uniqueId : undefined))

// Handle the internal checked state
const internalChecked = ref(props.modelValue !== undefined ? props.modelValue : props.checked)

// Watch for prop changes to update internal state
watch(() => props.modelValue, (newValue) => {
    if (newValue !== undefined) {
        internalChecked.value = newValue
    }
})

watch(() => props.checked, (newValue) => {
    if (props.modelValue === undefined) {
        internalChecked.value = newValue
    }
})

// Handle checkbox changes
const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const newValue = target.checked

    internalChecked.value = newValue

    // Emit both events for flexibility
    emit('update:modelValue', newValue)
    emit('change', newValue)
}

// Track and handle indeterminate state
const checkboxRef = ref<HTMLInputElement | null>(null)

watch(() => props.indeterminate, (newValue) => {
    if (checkboxRef.value) {
        checkboxRef.value.indeterminate = newValue
    }
})
</script>

<template>
    <div :class="[
        'tm-checkbox-container',
        `tm-checkbox-${size}`,
        {
            'tm-checkbox-disabled': disabled
        }
    ]">
        <input ref="checkboxRef" type="checkbox" :class="'tm-checkbox-input'" :id="checkboxId" :name="name"
            :value="value" :checked="internalChecked" :disabled="disabled" :required="required" :aria-label="ariaLabel"
            :aria-describedby="ariaDescribedby" @change="handleChange" />
        <label v-if="label || $slots.default" :for="checkboxId"
            :class="['tm-checkbox-label', { 'tm-checkbox-required': required }]">
            <slot>{{ label }}</slot>
        </label>
    </div>
</template>
