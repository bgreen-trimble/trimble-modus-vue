<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/components/toast/Toast.vue -->
<template>
  <div class="modus-toast" :class="[severity, { 'fade-out': isFadingOut, 'has-icon': !!icon }]">
    <div class="modus-toast-header">
      <div class="modus-toast-title-wrapper">
        <i v-if="icon" class="modus-icons modus-toast-icon">{{ icon }}</i>
        <div class="modus-toast-title">{{ title }}</div>
      </div>
      <button v-if="dismissible" class="modus-toast-close" @click="dismiss" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="modus-toast-message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { ToastSeverity } from '../../composables/useToast'

export interface ToastProps {
  id: string
  title: string
  message: string
  severity: ToastSeverity
  icon?: string
  dismissible?: boolean
}

const props = defineProps<ToastProps>()
const emit = defineEmits<{
  (e: 'dismiss', id: string): void
}>()

const isFadingOut = ref(false)

const dismiss = () => {
  isFadingOut.value = true
  // Wait for the animation to finish before emitting the dismiss event
  setTimeout(() => {
    emit('dismiss', props.id)
  }, 300) // Match animation duration
}
</script>
