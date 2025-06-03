<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/components/toast/Toast.vue -->
<template>
  <div 
    class="modus-toast" 
    :class="[
      severity, 
      position || 'top-right', 
      { 
        'fade-out': isFadingOut, 
        'has-icon': !!icon 
      }
    ]"
  >
    <div class="modus-toast-header">
      <div class="modus-toast-title-wrapper">
        <i v-if="icon" class="modus-icons modus-toast-icon">{{ icon }}</i>
        <div class="modus-toast-title">{{ title }}</div>
      </div>
      <Button 
        v-if="dismissible" 
        class="modus-toast-close-btn" 
        icon="close" 
        variant="text" 
        severity="secondary" 
        size="small" 
        @click="dismiss" 
        aria-label="Close"
      />
    </div>
    <div class="modus-toast-message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { ToastSeverity, ToastPosition } from '../../composables/useToast'
import Button from '../button/Button.vue'

export interface ToastProps {
  id: string
  title: string
  message: string
  severity: ToastSeverity
  icon?: string
  position?: ToastPosition
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
