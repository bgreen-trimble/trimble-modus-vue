<!-- 
  Switch component following Trimble Modus design system
  Uses external switch.css for styling with PrimeVue's @theme approach
-->
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
    <div class="tm-switch" :class="{ 'tm-switch-checked': modelValue }">
      <span class="tm-switch-slider"></span>
    </div>
    <label
      v-if="label"
      :for="inputId"
      class="tm-switch-label"
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
    'tm-switch-container',
    {
      'tm-switch-container-small': props.size === 'small',
      'tm-switch-container-large': props.size === 'large',
      'tm-switch-container-disabled': props.disabled
    }
  ]
})

const toggle = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
/* Styles moved to switch.css */
</style>
