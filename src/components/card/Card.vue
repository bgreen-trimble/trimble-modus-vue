<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  title?: string
  variant?: 'default' | 'elevated' | 'outlined' | 'primary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  size: 'medium',
  fullWidth: false,
  shadow: 'md',
  interactive: false
})

const cardClasses = computed(() => {
  return [
    'tm-card',
    `tm-card-${props.variant}`,
    `tm-card-${props.size}`,
    props.shadow !== 'md' ? `tm-card-shadow-${props.shadow}` : '',
    {
      'tm-card-full-width': props.fullWidth,
      'tm-card-interactive': props.interactive
    }
  ]
})
</script>

<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="tm-card-header">
      <slot name="header">
        <h3 v-if="title" class="tm-card-title">{{ title }}</h3>
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
