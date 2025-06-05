<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  title?: string
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  shadow?: 'none' | 'level-1' | 'level-2' | 'level-3'
  ariaLabel?: string
  ariaLabelledby?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  size: 'medium',
  fullWidth: false,
  shadow: 'level-1'
})

const cardClasses = computed(() => {
  return [
    'tm-card',
    `tm-card-${props.size}`,
    props.shadow !== 'none' ? `tm-shadow-${props.shadow}` : '',
    {
      'tm-card-full-width': props.fullWidth
    }
  ]
})
</script>

<template>
  <div :class="cardClasses" 
       :aria-label="ariaLabel" 
       :aria-labelledby="ariaLabelledby || (title && !$slots.header ? 'card-title' : undefined)"
       role="region">
    <div v-if="$slots.header || title" class="tm-card-header">
      <slot name="header">
        <h3 v-if="title" id="card-title" class="tm-card-title">{{ title }}</h3>
      </slot>
    </div>
    <div class="tm-card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="tm-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
/* Styles moved to card.css */
</style>
