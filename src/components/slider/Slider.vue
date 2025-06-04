<!-- 
  Slider component following Trimble Modus design system
-->
<template>
  <div
    :class="sliderClasses"
    :data-disabled="disabled"
  >
    <label 
      v-if="label" 
      :for="inputId"
      class="tm-slider-label"
    >
      {{ label }}
      <span v-if="showValue" class="tm-slider-value">{{ modelValue }}</span>
    </label>
    <div class="tm-slider-container">
      <input
        :id="inputId"
        ref="input"
        type="range"
        class="tm-slider-input"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :disabled="disabled"
        :aria-label="ariaLabel || label"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
        :aria-valuetext="valueText || `${modelValue}`"
        @input="updateValue"
        @change="onChangeEvent"
      />
      <div class="tm-slider-track">
        <div class="tm-slider-track-fill" :style="{ width: fillWidth }"></div>
      </div>
      <div v-if="ticks && !disabled" class="tm-slider-ticks">
        <div 
          v-for="tick in ticksArray" 
          :key="tick.value"
          class="tm-slider-tick"
          :class="{ 'tm-slider-tick-active': modelValue >= tick.value }"
          :style="{ left: `${tick.position}%` }"
        >
          <span v-if="tick.label" class="tm-slider-tick-label">{{ tick.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface SliderProps {
  modelValue: number
  min?: number
  max?: number
  step?: number
  label?: string
  showValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  id?: string
  ariaLabel?: string
  valueText?: string
  ticks?: boolean | { value: number, label?: string }[]
}

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  size: 'medium',
  showValue: false,
  ticks: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const input = ref<HTMLInputElement>()

const inputId = computed(() => {
  return props.id || `slider-${Math.random().toString(36).substring(2, 9)}`
})

const sliderClasses = computed(() => {
  return [
    'tm-slider',
    `tm-slider-${props.size}`,
    {
      'tm-slider-disabled': props.disabled,
      'tm-slider-with-ticks': props.ticks
    }
  ]
})

const fillWidth = computed(() => {
  const percentage = ((props.modelValue - props.min) / (props.max - props.min)) * 100
  return `${Math.min(Math.max(percentage, 0), 100)}%`
})

const ticksArray = computed(() => {
  if (!props.ticks) return []
  
  if (Array.isArray(props.ticks)) {
    return props.ticks.map(tick => ({
      value: tick.value,
      label: tick.label,
      position: ((tick.value - props.min) / (props.max - props.min)) * 100
    }))
  } else {
    // Create evenly spaced ticks
    const tickCount = Math.floor((props.max - props.min) / props.step) + 1
    const result = []
    
    // Limit the number of ticks to a reasonable number
    const maxTicks = 10
    const step = tickCount <= maxTicks ? 1 : Math.ceil(tickCount / maxTicks)
    
    for (let i = 0; i < tickCount; i += step) {
      const value = props.min + (i * props.step)
      result.push({
        value,
        label: undefined,
        position: ((value - props.min) / (props.max - props.min)) * 100
      })
    }
    
    // Always include the last tick
    if (result[result.length - 1]?.value !== props.max) {
      result.push({
        value: props.max,
        label: undefined,
        position: 100
      })
    }
    
    return result
  }
})

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = parseFloat(target.value)
  emit('update:modelValue', value)
}

const onChangeEvent = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = parseFloat(target.value)
  emit('change', value)
}
</script>

<style scoped>
.tm-slider {
  width: 100%;
  position: relative;
  margin: 1rem 0;
}

.tm-slider-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--color-tm-slider-label-color);
}

.tm-slider-value {
  font-weight: 600;
}

.tm-slider-container {
  position: relative;
  height: 36px;
  margin-top: 0.5rem;
}

.tm-slider-track {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 8px;
  transform: translateY(-50%);
  background-color: var(--color-tm-slider-track-color);
  border-radius: 4px;
  pointer-events: none;
}

.tm-slider-track-fill {
  position: absolute;
  height: 100%;
  background-color: var(--color-tm-slider-fill-color);
  border-radius: 4px;
  pointer-events: none;
}

.tm-slider-input {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 100%;
  height: 36px;
  background: transparent;
  cursor: pointer;
  z-index: 2;
  margin: 0;
}

.tm-slider-input:focus {
  outline: none;
}

.tm-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-tm-slider-thumb-color);
  border: 2px solid var(--color-tm-slider-thumb-border-color);
  box-shadow: none;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.tm-slider-input::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-tm-slider-thumb-color);
  border: 2px solid var(--color-tm-slider-thumb-border-color);
  box-shadow: none;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.tm-slider-input:focus::-webkit-slider-thumb {
  transform: scale(1.1);
  box-shadow: none;
}

.tm-slider-input:focus::-moz-range-thumb {
  transform: scale(1.1);
  box-shadow: none;
}

.tm-slider-input:active::-webkit-slider-thumb {
  transform: scale(1.2);
  background: var(--color-tm-slider-thumb-active-color);
}

.tm-slider-input:active::-moz-range-thumb {
  transform: scale(1.2);
  background: var(--color-tm-slider-thumb-active-color);
}

/* Size variations */
.tm-slider-small .tm-slider-input::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
}

.tm-slider-small .tm-slider-input::-moz-range-thumb {
  width: 12px;
  height: 12px;
}

.tm-slider-small .tm-slider-track {
  height: 6px;
}

.tm-slider-large .tm-slider-input::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
}

.tm-slider-large .tm-slider-input::-moz-range-thumb {
  width: 20px;
  height: 20px;
}

.tm-slider-large .tm-slider-track {
  height: 10px;
}

/* Disabled state */
.tm-slider-disabled .tm-slider-label {
  color: var(--color-tm-slider-disabled-label-color);
  opacity: 0.6;
}

.tm-slider-disabled .tm-slider-input {
  cursor: not-allowed;
  opacity: 0.6;
}

.tm-slider-disabled .tm-slider-track-fill {
  background-color: var(--color-tm-slider-disabled-fill-color);
}

.tm-slider-disabled .tm-slider-input::-webkit-slider-thumb {
  background-color: var(--color-tm-slider-disabled-thumb-color);
  border-color: var(--color-tm-slider-disabled-thumb-border-color);
}

.tm-slider-disabled .tm-slider-input::-moz-range-thumb {
  background-color: var(--color-tm-slider-disabled-thumb-color);
  border-color: var(--color-tm-slider-disabled-thumb-border-color);
}

/* Ticks */
.tm-slider-ticks {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4px;
  pointer-events: none;
}

.tm-slider-tick {
  position: absolute;
  width: 1px;
  height: 8px;
  background-color: var(--color-tm-slider-tick-color);
  transform: translate(-50%, 10px);
}

.tm-slider-tick-active {
  background-color: var(--color-tm-slider-fill-color);
}

.tm-slider-tick-label {
  position: absolute;
  font-size: 0.75rem;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: var(--color-tm-slider-tick-label-color);
}

/* Dark mode support */
:global(.dark) .tm-slider-label {
  color: var(--color-tm-gray-1);
}

:global(.dark) .tm-slider-track {
  background-color: var(--color-tm-gray-8);
}

:global(.dark) .tm-slider-input::-webkit-slider-thumb {
  background-color: var(--color-tm-gray-9);
  border-color: var(--color-tm-blue);
}

:global(.dark) .tm-slider-input::-moz-range-thumb {
  background-color: var(--color-tm-gray-9);
  border-color: var(--color-tm-blue);
}

:global(.dark) .tm-slider-tick {
  background-color: var(--color-tm-gray-6);
}

:global(.dark) .tm-slider-tick-label {
  color: var(--color-tm-gray-3);
}

/* High contrast mode support */
@media (forced-colors: active) {
  .tm-slider-track {
    background-color: ButtonFace;
    border: 1px solid ButtonText;
  }
  
  .tm-slider-track-fill {
    background-color: Highlight;
    border: 1px solid ButtonText;
  }
  
  .tm-slider-input::-webkit-slider-thumb {
    background-color: ButtonFace;
    border: 2px solid ButtonText;
  }
  
  .tm-slider-input::-moz-range-thumb {
    background-color: ButtonFace;
    border: 2px solid ButtonText;
  }
  
  .tm-slider-disabled .tm-slider-track-fill {
    background-color: GrayText;
  }
  
  .tm-slider-disabled .tm-slider-input::-webkit-slider-thumb {
    border-color: GrayText;
  }
  
  .tm-slider-disabled .tm-slider-input::-moz-range-thumb {
    border-color: GrayText;
  }
  
  .tm-slider-tick {
    background-color: ButtonText;
  }
  
  .tm-slider-tick-active {
    background-color: Highlight;
  }
}
</style>
