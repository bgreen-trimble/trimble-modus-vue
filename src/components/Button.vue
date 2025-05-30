
<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  label?: string
  icon?: string
  variant?: 'filled' | 'outlined' | 'text'
  severity?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'filled',
  severity: 'primary',
  size: 'medium',
  disabled: false
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'button',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'tm-font-semibold',
    'rounded-md',
    'transition-all',
    'duration-200',
    'cursor-pointer',
    'border',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2'
  ]

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'px-3', 'py-1.5', 'min-h-[32px]'],
    medium: ['text-sm', 'px-4', 'py-2', 'min-h-[40px]'],
    large: ['text-base', 'px-6', 'py-3', 'min-h-[48px]']
  }

  // Generate class name for variant and severity
  const variantClass = `tm-btn-${props.severity}-${props.variant}`

  // Disabled state
  const disabledClasses = props.disabled ? [
    'cursor-not-allowed',
    'opacity-60'
  ] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    variantClass,
    ...disabledClasses
  ]
})
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="$slots.icon || icon" class="button-icon" :class="{ 'icon-only': !$slots.default && !label }">
      <slot name="icon">
        <i v-if="icon" class="modus-icons">{{ icon }}</i>
      </slot>
    </span>
    <span v-if="$slots.default || label" class="button-label">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<style>
/* Color hover and active state variables */
:root {
  /* Blue variants */
  --tm-color-blue-hover: #0082d6;
  --tm-color-blue-active: #00548a;
  --tm-color-blue-dark-hover: #0082d6;
  --tm-color-blue-dark-active: #00548a;

  /* Gray variants */
  --tm-color-gray-hover: #838793;
  --tm-color-gray-active: #5e626b;
  --tm-color-trimble-gray-hover: #7d808d;
  --tm-color-trimble-gray-active: #6a6e79;

  /* Green variants */
  --tm-color-green-hover: #006638;
  --tm-color-green-active: #004d2a;
  --tm-color-green-dark-hover: #1e8a44;
  --tm-color-green-dark-active: #006638;

  /* Yellow variants */
  --tm-color-yellow-hover: #fec157;
  --tm-color-yellow-active: #e49325;
  --tm-color-yellow-dark-hover: #fbad26;
  --tm-color-yellow-dark-active: #e49325;

  /* Red variants */
  --tm-color-red-hover: #e44a53;
  --tm-color-red-active: #c41e28;
  --tm-color-red-dark-hover: #da212c;
  --tm-color-red-dark-active: #ab1f26;
}
</style>

<style scoped>
/* Color hover and active state variables */

/* Trimble Button Component Styles */
.tm-btn-primary-filled {
  background-color: var(--tm-color-blue) !important;
  color: white !important;
  border-color: var(--tm-color-blue) !important;
}

.tm-btn-primary-filled:hover {
  background-color: var(--tm-color-blue-hover) !important;
}

.tm-btn-primary-filled:active {
  background-color: var(--tm-color-blue-active) !important;
}

:global(.dark) .tm-btn-primary-filled {
  background-color: var(--tm-color-blue-dark) !important;
  border-color: var(--tm-color-blue-dark) !important;
  color: white !important;
}

:global(.dark) .tm-btn-primary-filled:hover {
  background-color: var(--tm-color-blue-dark-hover) !important;
  color: white !important;
}

:global(.dark) .tm-btn-primary-filled:active {
  background-color: var(--tm-color-blue-dark-active) !important;
  color: white !important;
}

.tm-btn-secondary-filled {
  background-color: var(--tm-color-trimble-gray) !important;
  color: white !important;
  border-color: var(--tm-color-trimble-gray) !important;
}

.tm-btn-secondary-filled:hover {
  background-color: var(--tm-color-gray-hover) !important;
}

.tm-btn-secondary-filled:active {
  background-color: var(--tm-color-gray-active) !important;
}

:global(.dark) .tm-btn-secondary-filled {
  background-color: var(--tm-color-trimble-gray) !important;
  border-color: var(--tm-color-trimble-gray) !important;
  color: white !important;
}

:global(.dark) .tm-btn-secondary-filled:hover {
  background-color: var(--tm-color-trimble-gray-hover) !important;
  color: white !important;
}

:global(.dark) .tm-btn-secondary-filled:active {
  background-color: var(--tm-color-trimble-gray-active) !important;
  color: white !important;
}

.tm-btn-success-filled {
  background-color: var(--tm-color-green) !important;
  color: white !important;
  border-color: var(--tm-color-green) !important;
}

.tm-btn-success-filled:hover {
  background-color: var(--tm-color-green-hover) !important;
}

.tm-btn-success-filled:active {
  background-color: var(--tm-color-green-active) !important;
}

:global(.dark) .tm-btn-success-filled {
  background-color: var(--tm-color-green-dark) !important;
  border-color: var(--tm-color-green-dark) !important;
  color: white !important;
}

:global(.dark) .tm-btn-success-filled:hover {
  background-color: var(--tm-color-green-dark-hover) !important;
  color: white !important;
}

:global(.dark) .tm-btn-success-filled:active {
  background-color: var(--tm-color-green-dark-active) !important;
  color: white !important;
}

.tm-btn-warning-filled {
  background-color: var(--tm-color-yellow) !important;
  color: black !important;
  border-color: var(--tm-color-yellow) !important;
}

.tm-btn-warning-filled:hover {
  background-color: var(--tm-color-yellow-hover) !important;
}

.tm-btn-warning-filled:active {
  background-color: var(--tm-color-yellow-active) !important;
}

:global(.dark) .tm-btn-warning-filled {
  background-color: var(--tm-color-yellow-dark) !important;
  border-color: var(--tm-color-yellow-dark) !important;
  color: black !important;
}

:global(.dark) .tm-btn-warning-filled:hover {
  background-color: var(--tm-color-yellow-dark-hover) !important;
  color: black !important;
}

:global(.dark) .tm-btn-warning-filled:active {
  background-color: var(--tm-color-yellow-dark-active) !important;
  color: black !important;
}

.tm-btn-danger-filled {
  background-color: var(--tm-color-red) !important;
  color: white !important;
  border-color: var(--tm-color-red) !important;
}

.tm-btn-danger-filled:hover {
  background-color: var(--tm-color-red-hover) !important;
}

.tm-btn-danger-filled:active {
  background-color: var(--tm-color-red-active) !important;
}

:global(.dark) .tm-btn-danger-filled {
  background-color: var(--tm-color-red-dark) !important;
  border-color: var(--tm-color-red-dark) !important;
  color: white !important;
}

:global(.dark) .tm-btn-danger-filled:hover {
  background-color: var(--tm-color-red-dark-hover) !important;
  color: white !important;
}

:global(.dark) .tm-btn-danger-filled:active {
  background-color: var(--tm-color-red-dark-active) !important;
  color: white !important;
}

/* Outlined button styles */
.tm-btn-primary-outlined {
  background-color: transparent !important;
  color: var(--tm-color-blue) !important;
  border-color: var(--tm-color-blue) !important;
}

.tm-btn-primary-outlined:hover {
  background-color: rgba(33, 124, 187, 0.15) !important; /* tm-color-blue-light with opacity */
}

:global(.dark) .tm-btn-primary-outlined {
  color: var(--tm-color-blue-dark) !important;
  border-color: var(--tm-color-blue-dark) !important;
}

:global(.dark) .tm-btn-primary-outlined:hover {
  background-color: rgba(0, 99, 163, 0.15) !important; /* tm-color-blue with opacity */
}

.tm-btn-secondary-outlined {
  background-color: transparent !important;
  color: var(--tm-color-trimble-gray) !important;
  border-color: var(--tm-color-trimble-gray) !important;
}

.tm-btn-secondary-outlined:hover {
  background-color: rgba(106, 110, 121, 0.15) !important; /* tm-color-gray-6 with opacity */
}

:global(.dark) .tm-btn-secondary-outlined {
  color: var(--tm-color-trimble-gray) !important;
  border-color: var(--tm-color-trimble-gray) !important;
}

:global(.dark) .tm-btn-secondary-outlined:hover {
  background-color: rgba(144, 147, 159, 0.15) !important; /* tm-color-gray-4 with opacity */
}

.tm-btn-success-outlined {
  background-color: transparent !important;
  color: var(--tm-color-green) !important;
  border-color: var(--tm-color-green) !important;
}

.tm-btn-success-outlined:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

:global(.dark) .tm-btn-success-outlined {
  color: var(--tm-color-green-dark) !important;
  border-color: var(--tm-color-green-dark) !important;
}

:global(.dark) .tm-btn-success-outlined:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

.tm-btn-warning-outlined {
  background-color: transparent !important;
  color: var(--tm-color-yellow) !important;
  border-color: var(--tm-color-yellow) !important;
}

.tm-btn-warning-outlined:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

:global(.dark) .tm-btn-warning-outlined {
  color: var(--tm-color-yellow-dark) !important;
  border-color: var(--tm-color-yellow-dark) !important;
}

:global(.dark) .tm-btn-warning-outlined:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

.tm-btn-danger-outlined {
  background-color: transparent !important;
  color: var(--tm-color-red) !important;
  border-color: var(--tm-color-red) !important;
}

.tm-btn-danger-outlined:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

:global(.dark) .tm-btn-danger-outlined {
  color: var(--tm-color-red-dark) !important;
  border-color: var(--tm-color-red-dark) !important;
}

:global(.dark) .tm-btn-danger-outlined:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

/* Text button styles */
.tm-btn-primary-text {
  background-color: transparent !important;
  color: var(--tm-color-blue) !important;
  border-color: transparent !important;
}

.tm-btn-primary-text:hover {
  background-color: rgba(33, 124, 187, 0.15) !important; /* tm-color-blue-light with opacity */
}

:global(.dark) .tm-btn-primary-text {
  color: var(--tm-color-blue-dark) !important;
}

:global(.dark) .tm-btn-primary-text:hover {
  background-color: rgba(0, 99, 163, 0.15) !important; /* tm-color-blue with opacity */
}

.tm-btn-secondary-text {
  background-color: transparent !important;
  color: var(--tm-color-trimble-gray) !important;
  border-color: transparent !important;
}

.tm-btn-secondary-text:hover {
  background-color: rgba(106, 110, 121, 0.15) !important; /* tm-color-gray-6 with opacity */
}

:global(.dark) .tm-btn-secondary-text {
  color: var(--tm-color-trimble-gray) !important;
}

:global(.dark) .tm-btn-secondary-text:hover {
  background-color: rgba(144, 147, 159, 0.15) !important; /* tm-color-gray-4 with opacity */
}

.tm-btn-success-text {
  background-color: transparent !important;
  color: var(--tm-color-green) !important;
  border-color: transparent !important;
}

.tm-btn-success-text:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

:global(.dark) .tm-btn-success-text {
  color: var(--tm-color-green-dark) !important;
}

:global(.dark) .tm-btn-success-text:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

.tm-btn-warning-text {
  background-color: transparent !important;
  color: var(--tm-color-yellow) !important;
  border-color: transparent !important;
}

.tm-btn-warning-text:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

:global(.dark) .tm-btn-warning-text {
  color: var(--tm-color-yellow-dark) !important;
}

:global(.dark) .tm-btn-warning-text:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

.tm-btn-danger-text {
  background-color: transparent !important;
  color: var(--tm-color-red) !important;
  border-color: transparent !important;
}

.tm-btn-danger-text:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

:global(.dark) .tm-btn-danger-text {
  color: var(--tm-color-red-dark) !important;
}

:global(.dark) .tm-btn-danger-text:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

/* Disabled button styles for dark mode */
:global(.dark) .tm-btn-primary-filled:disabled,
:global(.dark) .tm-btn-secondary-filled:disabled,
:global(.dark) .tm-btn-success-filled:disabled,
:global(.dark) .tm-btn-warning-filled:disabled,
:global(.dark) .tm-btn-danger-filled:disabled {
  background-color: rgb(75 85 99) !important; /* gray-600 */
  color: rgb(156 163 175) !important; /* gray-400 */
  border-color: rgb(75 85 99) !important; /* gray-600 */
}

:global(.dark) .tm-btn-primary-outlined:disabled,
:global(.dark) .tm-btn-secondary-outlined:disabled,
:global(.dark) .tm-btn-success-outlined:disabled,
:global(.dark) .tm-btn-warning-outlined:disabled,
:global(.dark) .tm-btn-danger-outlined:disabled,
:global(.dark) .tm-btn-primary-text:disabled,
:global(.dark) .tm-btn-secondary-text:disabled,
:global(.dark) .tm-btn-success-text:disabled,
:global(.dark) .tm-btn-warning-text:disabled,
:global(.dark) .tm-btn-danger-text:disabled {
  color: rgb(107 114 128) !important; /* gray-500 */
}

:global(.dark) .tm-btn-primary-outlined:disabled,
:global(.dark) .tm-btn-secondary-outlined:disabled,
:global(.dark) .tm-btn-success-outlined:disabled,
:global(.dark) .tm-btn-warning-outlined:disabled,
:global(.dark) .tm-btn-danger-outlined:disabled {
  border-color: rgb(75 85 99) !important; /* gray-600 */
}

/* Focus states for better accessibility in dark mode */
:global(.dark) .tm-btn-primary-filled:focus,
:global(.dark) .tm-btn-primary-outlined:focus,
:global(.dark) .tm-btn-primary-text:focus {
  box-shadow: 0 0 0 2px rgba(1, 154, 235, 0.3) !important;
}

:global(.dark) .tm-btn-secondary-filled:focus,
:global(.dark) .tm-btn-secondary-outlined:focus,
:global(.dark) .tm-btn-secondary-text:focus {
  box-shadow: 0 0 0 2px rgba(144, 147, 159, 0.3) !important;
}

:global(.dark) .tm-btn-success-filled:focus,
:global(.dark) .tm-btn-success-outlined:focus,
:global(.dark) .tm-btn-success-text:focus {
  box-shadow: 0 0 0 2px rgba(78, 166, 70, 0.3) !important;
}

:global(.dark) .tm-btn-warning-filled:focus,
:global(.dark) .tm-btn-warning-outlined:focus,
:global(.dark) .tm-btn-warning-text:focus {
  box-shadow: 0 0 0 2px rgba(254, 193, 87, 0.3) !important;
}

:global(.dark) .tm-btn-danger-filled:focus,
:global(.dark) .tm-btn-danger-outlined:focus,
:global(.dark) .tm-btn-danger-text:focus {
  box-shadow: 0 0 0 2px rgba(232, 99, 99, 0.3) !important;
}

/* Active states for dark mode */
:global(.dark) .tm-btn-primary-outlined:active,
:global(.dark) .tm-btn-primary-text:active {
  background-color: rgba(1, 154, 235, 0.18) !important;
}

:global(.dark) .tm-btn-secondary-outlined:active,
:global(.dark) .tm-btn-secondary-text:active {
  background-color: rgba(144, 147, 159, 0.2) !important;
}

:global(.dark) .tm-btn-success-outlined:active,
:global(.dark) .tm-btn-success-text:active {
  background-color: rgba(78, 166, 70, 0.2) !important;
}

:global(.dark) .tm-btn-warning-outlined:active,
:global(.dark) .tm-btn-warning-text:active {
  background-color: rgba(254, 193, 87, 0.2) !important;
}

:global(.dark) .tm-btn-danger-outlined:active,
:global(.dark) .tm-btn-danger-text:active {
  background-color: rgba(232, 99, 99, 0.2) !important;
}

/* Icon and label alignment - matches official Modus Web Components */
.button-icon {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  pointer-events: none;
}

.button-icon.icon-only {
  margin: 0;
}

.button-icon:not(.icon-only) {
  margin-right: 0.5rem;
}

.button-label {
  display: flex;
  align-items: center;
  line-height: 1;
  position: relative;
}

/* Icon size adjustments to match official Modus specs */
.button-icon .modus-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

/* Small buttons (24px height) */
.button.text-xs .button-icon .modus-icons {
  font-size: 1rem; /* 16px for small buttons */
  width: 1rem;
  height: 1rem;
}

/* Medium buttons (32px height) */
.button.text-sm .button-icon .modus-icons {
  font-size: 1.125rem; /* 18px for medium buttons */
  width: 1.125rem;
  height: 1.125rem;
}

/* Large buttons (48px height) */
.button.text-base .button-icon .modus-icons {
  font-size: 1.25rem; /* 20px for large buttons */
  width: 1.25rem;
  height: 1.25rem;
}
</style>
