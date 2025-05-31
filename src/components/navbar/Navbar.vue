<!-- 
  Navbar component following Trimble Modus design system
  Uses external navbar.css for styling with PrimeVue's @theme approach
-->
<script setup lang="ts">
import { computed } from 'vue'

export interface NavbarProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  fixed?: boolean
  elevated?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<NavbarProps>(), {
  variant: 'primary',
  size: 'medium',
  fixed: false,
  elevated: false,
  rounded: false
})

const navbarClasses = computed(() => {
  return [
    'tm-navbar',
    `tm-navbar-${props.variant}`,
    `tm-navbar-${props.size}`,
    {
      'tm-navbar-fixed': props.fixed,
      'tm-navbar-elevated': props.elevated,
      'tm-navbar-rounded': props.rounded
    }
  ]
})
</script>

<template>
  <nav :class="navbarClasses">
    <div class="tm-navbar-container">
      <div class="tm-navbar-left">
        <slot name="left"></slot>
      </div>
      <div class="tm-navbar-middle">
        <slot name="middle"></slot>
      </div>
      <div class="tm-navbar-right">
        <slot name="right"></slot>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Styles moved to navbar.css */
</style>
