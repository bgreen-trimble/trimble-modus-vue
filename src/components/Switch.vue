<template>
  <div
    :class="switchClasses"
    @click="toggle"
    @keydown.space.prevent="toggle"
    @keydown.enter.prevent="toggle"
    tabindex="0"
  >
    <input
      :id="inputId"
      ref="input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-label="label"
      @change="toggle"
    />
    <div class="switch" :class="{ checked: modelValue }">
      <span class="slider"></span>
    </div>
    <label
      v-if="label"
      :for="inputId"
      class="switch-label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface SwitchProps {
  modelValue: boolean
  label?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  id?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: 'medium'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const input = ref<HTMLInputElement>()

const inputId = computed(() => {
  return props.id || `switch-${Math.random().toString(36).substr(2, 9)}`
})

const switchClasses = computed(() => {
  return [
    'modus-switch',
    {
      'small': props.size === 'small',
      'large': props.size === 'large',
      'disabled': props.disabled
    }
  ]
})

const toggle = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
/* Modus Switch Component - Based on official Trimble Modus Web Components */
/* Source: https://github.com/trimble-oss/modus-web-components */

.modus-switch {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: inherit;
  font-size: 0.875rem; /* 14px */
  outline: none;
  cursor: pointer;
  user-select: none;
}

.modus-switch.small {
  font-size: 0.75rem; /* 12px */
}

.modus-switch.small .switch {
  height: 0.75rem; /* 12px */
  width: 1.625rem; /* 26px */
}

.modus-switch.small .slider {
  border-radius: 0.5rem; /* 8px */
  height: 0.75rem; /* 12px */
  width: 1.625rem; /* 26px */
}

.modus-switch.small .slider::before {
  height: 0.5rem; /* 8px - properly sized small thumb */
  width: 0.5rem; /* 8px */
  top: 0.125rem; /* 2px - center vertically (12px - 8px) / 2 */
  left: 0.125rem; /* 2px - initial position with proper padding */
}

.modus-switch.small .switch.checked .slider::before {
  transform: translateX(1rem); /* 16px - proper small checked position (26px - 8px - 2px) */
}

/* Large size styles - extrapolated from Trimble Modus pattern */
.modus-switch.large {
  font-size: 1rem; /* 16px */
}

.modus-switch.large .switch {
  height: 1.25rem; /* 20px */
  width: 2.875rem; /* 46px */
}

.modus-switch.large .slider {
  border-radius: 0.625rem; /* 10px */
  height: 1.25rem; /* 20px */
  width: 2.875rem; /* 46px */
}

.modus-switch.large .slider::before {
  height: 1rem; /* 16px - properly sized large thumb */
  width: 1rem; /* 16px */
  top: 0.125rem; /* 2px - center vertically (20px - 16px) / 2 */
  left: 0.125rem; /* 2px - initial position with proper padding */
}

.modus-switch.large .switch.checked .slider::before {
  transform: translateX(1.75rem); /* 28px - proper large checked position (46px - 16px - 2px) */
}

.modus-switch input {
  display: none;
}

.switch {
  background-color: #90939f; /* Trimble Gray Light */
  border-radius: 1rem; /* 16px */
  height: 1rem; /* 16px */
  position: relative;
  width: 2.25rem; /* 36px */
  transition: all 0.15s ease-in-out;
  cursor: pointer;
}

.dark .switch {
  background-color: #6a6e79; /* Darker gray for dark mode */
}

.slider {
  background-color: transparent; /* Remove background - switch handles this */
  border-radius: 1rem; /* 16px */
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  transition: all 0.15s ease-in-out;
}

.slider::before {
  background-color: white;
  border-radius: 50%;
  content: '';
  height: 0.75rem; /* 12px - properly sized thumb */
  width: 0.75rem; /* 12px */
  position: absolute;
  top: 0.125rem; /* 2px - center vertically (16px - 12px) / 2 */
  left: 0.125rem; /* 2px - initial position with proper padding */
  transition: transform 0.15s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch.checked {
  background-color: #217cbb; /* Trimble Blue */
}

.dark .switch.checked {
  background-color: #019aeb; /* Trimble Blue Light for dark mode */
}

.switch.checked .slider::before {
  transform: translateX(1.125rem); /* 18px - proper checked position (36px - 12px - 4px) */
}

/* Hover states */
.modus-switch:hover:not(.disabled) .switch {
  background-color: #217cbb; /* Trimble Blue on hover */
}

.dark .modus-switch:hover:not(.disabled) .switch {
  background-color: #019aeb;
}

.modus-switch:hover:not(.disabled) .switch.checked {
  background-color: #0063a3; /* Darker blue on hover when checked */
}

.dark .modus-switch:hover:not(.disabled) .switch.checked {
  background-color: #0082d6;
}

/* Focus states */
.modus-switch:focus:not(.disabled) .switch {
  outline: 2px solid #019aeb; /* Trimble Blue Focus */
  outline-offset: 2px;
}

.dark .modus-switch:focus:not(.disabled) .switch {
  outline-color: #019aeb;
}

/* Active states */
.modus-switch:active:not(.disabled) .switch {
  background-color: #217cbb;
}

.dark .modus-switch:active:not(.disabled) .switch {
  background-color: #019aeb;
}

/* Label styles */
.switch-label {
  color: #464b52; /* Trimble Gray Dark */
  margin-bottom: 0.01rem;
  margin-left: 0.5rem; /* 8px */
  cursor: pointer;
  font-weight: 400;
}

.dark .switch-label {
  color: #e5e7eb; /* Light gray for dark mode */
}

/* Disabled states */
.modus-switch.disabled {
  opacity: 0.3;
  pointer-events: none;
  cursor: default;
}

.modus-switch.disabled .switch-label {
  cursor: default;
}

/* High contrast mode support */
@media (forced-colors: active) and (prefers-color-scheme: light) {
  .slider::before {
    border: 1px solid ButtonText;
    margin-top: -1px;
  }
}
</style>
