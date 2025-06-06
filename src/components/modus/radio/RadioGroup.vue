<script setup lang="ts">
import { computed, provide } from 'vue'
import Radio from './Radio.vue'
import './radio.css'

/**
 * RadioGroup component allows users to group radio buttons together and manage their state collectively.
 */

/**
 * Props for the RadioGroup component.
 *
 * @property {string} [id] - The id attribute for the radio group.
 * @property {string} [name] - The name attribute shared by all radio buttons in the group.
 * @property {string} [label] - The text label for the radio group.
 * @property {any} [modelValue] - v-model binding for the radio group.
 * @property {boolean} [disabled] - Whether the entire radio group is disabled.
 * @property {boolean} [required] - Whether selection in the radio group is required.
 * @property {string} [size] - The size of all radio buttons in the group ('default' or 'compact').
 * @property {string} [orientation] - The orientation of the radio group ('vertical' or 'horizontal').
 * @property {string} [ariaLabel] - Accessible label for the radio group.
 * @property {string} [ariaDescribedby] - ID of an element that describes the radio group.
 */
export interface RadioGroupProps {
    id?: string
    name?: string
    label?: string
    modelValue?: any
    disabled?: boolean
    required?: boolean
    size?: 'default' | 'compact'
    orientation?: 'vertical' | 'horizontal'
    ariaLabel?: string
    ariaDescribedby?: string
}

const props = withDefaults(defineProps<RadioGroupProps>(), {
    id: undefined,
    name: undefined,
    label: undefined,
    modelValue: undefined,
    disabled: false,
    required: false,
    size: 'default',
    orientation: 'vertical',
    ariaLabel: undefined,
    ariaDescribedby: undefined
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'change', value: any): void
}>()

// Generate a unique name for the radio group if none is provided
const groupName = computed(() => props.name || `radio-group-${Math.random().toString(36).substring(2, 9)}`)

// Provide context to child radio components
provide('radioGroupContext', {
    name: groupName,
    modelValue: computed(() => props.modelValue),
    size: computed(() => props.size),
    disabled: computed(() => props.disabled),
    updateValue: (value: any) => {
        emit('update:modelValue', value)
        emit('change', value)
    }
})

</script>

<template>
    <div :class="[
        'tm-radio-group',
        {
            'tm-radio-group-horizontal': orientation === 'horizontal',
            'tm-radio-group-disabled': disabled
        }
    ]" :id="id" role="radiogroup" :aria-label="ariaLabel" :aria-describedby="ariaDescribedby">
        <label v-if="label" :class="['tm-radio-group-label', { 'tm-radio-required': required }]">
            {{ label }}
        </label>
        <slot></slot>
    </div>
</template>
