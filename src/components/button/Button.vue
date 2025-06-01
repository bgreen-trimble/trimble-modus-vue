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
    'focus:outline-none'
    // Removed focus:ring-2 and focus:ring-offset-2 to allow button.css focus-visible styles to work
  ]

  // Size classes
  const sizeClasses = {
    small: ['text-xs', 'px-2', 'py-2', 'min-h-[24px]'],
    medium: ['text-sm', 'px-4', 'py-1.5', 'min-h-[32px]'],
    large: ['text-base', 'px-4', 'py-2', 'min-h-[48px]']
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
