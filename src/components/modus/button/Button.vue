<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  label?: string
  icon?: string
  variant?: 'filled' | 'outlined' | 'text'
  severity?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  ariaLabel?: string
  ariaExpanded?: boolean
  ariaControls?: string
  ariaHaspopup?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid'
  loading?: boolean
  role?: string
  highContrast?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'filled',
  severity: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  highContrast: false
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
    'touch-target'
  ]

  // Size classes - Ensures proper touch target size for mobile
  const sizeClasses = {
    small: ['text-xs', 'min-w-[44px]', 'min-h-[32px]', 'px-2', 'py-2'],
    medium: ['text-sm', 'min-w-[44px]', 'min-h-[44px]', 'px-4', 'py-1.5'],
    large: ['text-base', 'min-w-[44px]', 'min-h-[48px]', 'px-4', 'py-2']
  }

  // Generate class name for variant and severity
  const variantClass = [
    `button-tm-${props.severity}-${props.variant}`,
    props.highContrast && 'high-contrast'
  ]

  // States
  const stateClasses = [
    props.disabled && 'cursor-not-allowed opacity-60',
    props.loading && 'button-loading'
  ]

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClass,
    ...stateClasses
  ].filter(Boolean)
})

const computedAriaLabel = computed(() => {
  let label = props.ariaLabel || props.label || undefined
  if (props.loading) {
    label = `${label || 'button'} loading`
  }
  return label
})

</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="!loading && emit('click', $event)"
    :aria-label="computedAriaLabel"
    :aria-expanded="ariaExpanded"
    :aria-controls="ariaControls"
    :aria-haspopup="ariaHaspopup"
    :aria-busy="loading"
    :role="role"
    :aria-disabled="disabled || loading"
  >
    <span 
      v-if="loading" 
      class="button-loading-indicator" 
      aria-hidden="true"
    >
      <slot name="loading">
        <span class="loading-spinner" />
      </slot>
    </span>
    <span 
      v-else-if="$slots.icon || icon" 
      class="button-icon" 
      :class="{ 'icon-only': !$slots.default && !label }" 
      aria-hidden="true"
    >
      <slot name="icon">
        <i v-if="icon" class="modus-icons">{{ icon }}</i>
      </slot>
    </span>
    <span 
      v-if="$slots.default || label" 
      class="button-label"
    >
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<style scoped>
/* Icon and label alignment - matches official Modus Web Components */
.button {
  position: relative;
}

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

/* Loading spinner */
.button-loading {
  cursor: wait;
  position: relative;
}

.button-loading-indicator {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* High Contrast Mode */
.high-contrast {
  border-width: 2px;
}

.high-contrast:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

/* Mobile touch target size - WCAG requirements */
.touch-target {
  touch-action: manipulation;
}

@media (pointer: coarse) {
  /* Ensure buttons meet touch target size of 44x44 pixels for mobile devices */
  .button {
    min-width: 44px;
    min-height: 44px;
  }
}

/* Ensure focus styles are only visible on keyboard focus */
:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
