
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

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'button',
    'inline-flex',
    'items-center',
    'justify-center',
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
  const variantClass = `button-tm-${props.severity}-${props.variant}`

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
    @click="emit('click', $event)"
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

<style scoped>


/* Outlined button styles */
.button-tm-primary-outlined {
  background-color: transparent !important;
  color: var(--color-tm-blue) !important;
  border-color: var(--color-tm-blue) !important;
}

.button-tm-primary-outlined:hover {
  background-color: rgba(33, 124, 187, 0.15) !important; /* tm-color-blue-light with opacity */
}

:global(.dark) .button-tm-primary-outlined {
  color: var(--color-tm-blue-dark) !important;
  border-color: var(--color-tm-blue-dark) !important;
}

:global(.dark) .button-tm-primary-outlined:hover {
  background-color: rgba(0, 99, 163, 0.15) !important; /* tm-color-blue with opacity */
}

.button-tm-secondary-outlined {
  background-color: transparent !important;
  color: var(--color-tm-trimble-gray) !important;
  border-color: var(--color-tm-trimble-gray) !important;
}

.button-tm-secondary-outlined:hover {
  background-color: rgba(106, 110, 121, 0.15) !important; /* tm-color-gray-6 with opacity */
}

:global(.dark) .button-tm-secondary-outlined {
  color: var(--color-tm-trimble-gray) !important;
  border-color: var(--color-tm-trimble-gray) !important;
}

:global(.dark) .button-tm-secondary-outlined:hover {
  background-color: rgba(144, 147, 159, 0.15) !important; /* tm-color-gray-4 with opacity */
}

.button-tm-success-outlined {
  background-color: transparent !important;
  color: var(--color-tm-green) !important;
  border-color: var(--color-tm-green) !important;
}

.button-tm-success-outlined:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

:global(.dark) .button-tm-success-outlined {
  color: var(--color-tm-green-dark) !important;
  border-color: var(--color-tm-green-dark) !important;
}

:global(.dark) .button-tm-success-outlined:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

.button-tm-warning-outlined {
  background-color: transparent !important;
  color: var(--color-tm-yellow) !important;
  border-color: var(--color-tm-yellow) !important;
}

.button-tm-warning-outlined:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

:global(.dark) .button-tm-warning-outlined {
  color: var(--color-tm-yellow-dark) !important;
  border-color: var(--color-tm-yellow-dark) !important;
}

:global(.dark) .button-tm-warning-outlined:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

.button-tm-danger-outlined {
  background-color: transparent !important;
  color: var(--color-tm-red) !important;
  border-color: var(--color-tm-red) !important;
}

.button-tm-danger-outlined:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

:global(.dark) .button-tm-danger-outlined {
  color: var(--color-tm-red-dark) !important;
  border-color: var(--color-tm-red-dark) !important;
}

:global(.dark) .button-tm-danger-outlined:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

/* Text button styles */
.button-tm-primary-text {
  background-color: transparent !important;
  color: var(--color-tm-blue) !important;
  border-color: transparent !important;
}

.button-tm-primary-text:hover {
  background-color: rgba(33, 124, 187, 0.15) !important; /* tm-color-blue-light with opacity */
}

:global(.dark) .button-tm-primary-text {
  color: var(--color-tm-blue-dark) !important;
}

:global(.dark) .button-tm-primary-text:hover {
  background-color: rgba(0, 99, 163, 0.15) !important; /* tm-color-blue with opacity */
}

.button-tm-secondary-text {
  background-color: transparent !important;
  color: var(--color-tm-trimble-gray) !important;
  border-color: transparent !important;
}

.button-tm-secondary-text:hover {
  background-color: rgba(106, 110, 121, 0.15) !important; /* tm-color-gray-6 with opacity */
}

:global(.dark) .button-tm-secondary-text {
  color: var(--color-tm-trimble-gray) !important;
}

:global(.dark) .button-tm-secondary-text:hover {
  background-color: rgba(144, 147, 159, 0.15) !important; /* tm-color-gray-4 with opacity */
}

.button-tm-success-text {
  background-color: transparent !important;
  color: var(--color-tm-green) !important;
  border-color: transparent !important;
}

.button-tm-success-text:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

:global(.dark) .button-tm-success-text {
  color: var(--color-tm-green-dark) !important;
}

:global(.dark) .button-tm-success-text:hover {
  background-color: rgba(78, 166, 70, 0.15) !important; /* tm-color-green-light with opacity */
}

.button-tm-warning-text {
  background-color: transparent !important;
  color: var(--color-tm-yellow) !important;
  border-color: transparent !important;
}

.button-tm-warning-text:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

:global(.dark) .button-tm-warning-text {
  color: var(--color-tm-yellow-dark) !important;
}

:global(.dark) .button-tm-warning-text:hover {
  background-color: rgba(254, 193, 87, 0.15) !important; /* tm-color-yellow-light with opacity */
}

.button-tm-danger-text {
  background-color: transparent !important;
  color: var(--color-tm-red) !important;
  border-color: transparent !important;
}

.button-tm-danger-text:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

:global(.dark) .button-tm-danger-text {
  color: var(--color-tm-red-dark) !important;
}

:global(.dark) .button-tm-danger-text:hover {
  background-color: rgba(232, 99, 99, 0.15) !important; /* tm-color-red-light with opacity */
}

/* Disabled button styles for dark mode */
:global(.dark) .button-tm-primary-filled:disabled,
:global(.dark) .button-tm-secondary-filled:disabled,
:global(.dark) .button-tm-success-filled:disabled,
:global(.dark) .button-tm-warning-filled:disabled,
:global(.dark) .button-tm-danger-filled:disabled {
  background-color: rgb(75 85 99) !important; /* gray-600 */
  color: rgb(156 163 175) !important; /* gray-400 */
  border-color: rgb(75 85 99) !important; /* gray-600 */
}

:global(.dark) .button-tm-primary-outlined:disabled,
:global(.dark) .button-tm-secondary-outlined:disabled,
:global(.dark) .button-tm-success-outlined:disabled,
:global(.dark) .button-tm-warning-outlined:disabled,
:global(.dark) .button-tm-danger-outlined:disabled,
:global(.dark) .button-tm-primary-text:disabled,
:global(.dark) .button-tm-secondary-text:disabled,
:global(.dark) .button-tm-success-text:disabled,
:global(.dark) .button-tm-warning-text:disabled,
:global(.dark) .button-tm-danger-text:disabled {
  color: rgb(107 114 128) !important; /* gray-500 */
}

:global(.dark) .button-tm-primary-outlined:disabled,
:global(.dark) .button-tm-secondary-outlined:disabled,
:global(.dark) .button-tm-success-outlined:disabled,
:global(.dark) .button-tm-warning-outlined:disabled,
:global(.dark) .button-tm-danger-outlined:disabled {
  border-color: rgb(75 85 99) !important; /* gray-600 */
}

/* Focus states for better accessibility in dark mode */
:global(.dark) .button-tm-primary-filled:focus,
:global(.dark) .button-tm-primary-outlined:focus,
:global(.dark) .button-tm-primary-text:focus {
  box-shadow: 0 0 0 2px rgba(1, 154, 235, 0.3) !important;
}

:global(.dark) .button-tm-secondary-filled:focus,
:global(.dark) .button-tm-secondary-outlined:focus,
:global(.dark) .button-tm-secondary-text:focus {
  box-shadow: 0 0 0 2px rgba(144, 147, 159, 0.3) !important;
}

:global(.dark) .button-tm-success-filled:focus,
:global(.dark) .button-tm-success-outlined:focus,
:global(.dark) .button-tm-success-text:focus {
  box-shadow: 0 0 0 2px rgba(78, 166, 70, 0.3) !important;
}

:global(.dark) .button-tm-warning-filled:focus,
:global(.dark) .button-tm-warning-outlined:focus,
:global(.dark) .button-tm-warning-text:focus {
  box-shadow: 0 0 0 2px rgba(254, 193, 87, 0.3) !important;
}

:global(.dark) .button-tm-danger-filled:focus,
:global(.dark) .button-tm-danger-outlined:focus,
:global(.dark) .button-tm-danger-text:focus {
  box-shadow: 0 0 0 2px rgba(232, 99, 99, 0.3) !important;
}

/* Active states for dark mode */
:global(.dark) .button-tm-primary-outlined:active,
:global(.dark) .button-tm-primary-text:active {
  background-color: rgba(1, 154, 235, 0.18) !important;
}

:global(.dark) .button-tm-secondary-outlined:active,
:global(.dark) .button-tm-secondary-text:active {
  background-color: rgba(144, 147, 159, 0.2) !important;
}

:global(.dark) .button-tm-success-outlined:active,
:global(.dark) .button-tm-success-text:active {
  background-color: rgba(78, 166, 70, 0.2) !important;
}

:global(.dark) .button-tm-warning-outlined:active,
:global(.dark) .button-tm-warning-text:active {
  background-color: rgba(254, 193, 87, 0.2) !important;
}

:global(.dark) .button-tm-danger-outlined:active,
:global(.dark) .button-tm-danger-text:active {
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
