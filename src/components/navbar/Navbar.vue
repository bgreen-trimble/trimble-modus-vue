<!-- 
  Navbar component following Trimble Modus design system
  Uses external navbar.css for styling with PrimeVue's @theme approach
-->
<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

export interface NavbarProps {
  variant?: 'light' | 'trimble'
  size?: 'small' | 'medium' | 'large'
  fixed?: boolean
  elevated?: boolean
  rounded?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<NavbarProps>(), {
  variant: 'light',
  size: 'medium',
  fixed: false,
  elevated: false,
  rounded: false,
  ariaLabel: 'Main navigation'
})

// Generate unique IDs for ARIA relationships
const navId = `tm-nav-${Math.random().toString(36).slice(2, 11)}`
const menuId = `${navId}-mobile-menu`

// Mobile menu state and keyboard navigation
const menuOpen = ref(false)
const focusableElements = ref<HTMLElement[]>([])
const currentFocusIndex = ref(-1)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    // Update focusable elements when menu opens
    nextTick(() => {
      updateFocusableElements()
      if (focusableElements.value.length > 0) {
        focusableElements.value[0].focus()
      }
    })
  }
}

const updateFocusableElements = () => {
  if (!menuOpen.value) return
  focusableElements.value = Array.from(
    document.querySelectorAll(`#${menuId} a[href], #${menuId} button, #${menuId} [tabindex="0"]`)
  ) as HTMLElement[]
}

const handleKeyboard = (event: KeyboardEvent) => {
  if (!menuOpen.value) return

  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      toggleMenu()
      document.querySelector<HTMLElement>('.tm-navbar-menu-button')?.focus()
      break
    case 'Tab':
      if (focusableElements.value.length === 0) return
      if (event.shiftKey) {
        if (currentFocusIndex.value <= 0) {
          event.preventDefault()
          focusableElements.value[focusableElements.value.length - 1].focus()
          currentFocusIndex.value = focusableElements.value.length - 1
        }
      } else {
        if (currentFocusIndex.value >= focusableElements.value.length - 1) {
          event.preventDefault()
          focusableElements.value[0].focus()
          currentFocusIndex.value = 0
        }
      }
      break
  }
}

// Track focus within the mobile menu
const handleFocus = (event: FocusEvent) => {
  if (!menuOpen.value) return
  const target = event.target as HTMLElement
  currentFocusIndex.value = focusableElements.value.indexOf(target)
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (menuOpen.value && !target.closest(`#${menuId}`) && !target.closest('.tm-navbar-menu-button')) {
    toggleMenu()
  }
}

// Setup event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeyboard)
  document.addEventListener('focusin', handleFocus)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyboard)
  document.removeEventListener('focusin', handleFocus)
  document.removeEventListener('click', handleClickOutside)
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

const containerClasses = computed(() => {
  return [
    'tm-navbar-container',
    { 'menu-open': menuOpen.value }
  ]
})
</script>

<template>
  <nav 
    :id="navId"
    :class="navbarClasses" 
    role="navigation" 
    :aria-label="ariaLabel">
    <div :class="containerClasses">
      <div class="tm-navbar-left">
        <slot name="left"></slot>
      </div>
      
      <button 
        class="tm-navbar-menu-button" 
        @click="toggleMenu"
        aria-label="Toggle mobile menu"
        :aria-expanded="menuOpen"
        :aria-controls="menuId"
        :aria-haspopup="true"
      >
        <span class="modus-icons" aria-hidden="true">{{ menuOpen ? 'close' : 'menu' }}</span>
        <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
      </button>

      <div class="tm-navbar-middle">
        <slot name="middle"></slot>
      </div>
      
      <div class="tm-navbar-right">
        <slot name="right"></slot>
      </div>
    </div>
    
    <div 
      v-if="menuOpen" 
      :id="menuId" 
      class="tm-navbar-mobile-menu"
      role="menu"
      aria-labelledby="mobile-menu-button"
    >
      <slot name="mobile-menu">
        <!-- Default mobile menu content shows regular slots -->
        <div class="tm-navbar-mobile-content">
          <div class="tm-navbar-mobile-section">
            <slot name="left"></slot>
          </div>
          <div class="tm-navbar-mobile-section">
            <slot name="middle"></slot>
          </div>
          <div class="tm-navbar-mobile-section">
            <slot name="right"></slot>
          </div>
        </div>
      </slot>
    </div>
  </nav>
</template>

<style scoped>
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

/* Focus styles for better keyboard navigation */
.tm-navbar :deep(a:focus-visible),
.tm-navbar :deep(button:focus-visible) {
  outline: var(--color-tm-navbar-focus-outline-width) solid var(--color-tm-navbar-focus-outline-color);
  outline-offset: var(--color-tm-navbar-focus-outline-offset);
  border-radius: 4px;
}

/* High contrast mode support */
@media (forced-colors: active) {
  .tm-navbar :deep(a:focus-visible),
  .tm-navbar :deep(button:focus-visible) {
    outline: 2px solid CanvasText;
  }

  .tm-navbar-mobile-menu {
    border: 1px solid CanvasText;
  }
}

/* Mobile menu styles */
.tm-navbar-mobile-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tm-navbar-mobile-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Touch target sizes for mobile */
@media (pointer: coarse) {
  .tm-navbar :deep(a),
  .tm-navbar :deep(button) {
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
}
</style>
