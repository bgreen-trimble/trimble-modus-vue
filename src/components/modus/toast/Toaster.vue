<!-- filepath: /Users/bgreen/projects/trimble/trimble-modus-vue/src/components/toast/Toaster.vue -->
<template>
  <Teleport to="body">
    <template v-for="pos in positionKeys" :key="pos">
      <div 
        class="modus-toaster" 
        :class="pos"
        v-if="toastsByPosition[pos]?.length"
      >
        <Toast
          v-for="toast in toastsByPosition[pos]"
          :key="toast.id"
          :id="toast.id"
          :title="toast.title"
          :message="toast.message"
          :severity="toast.severity"
          :icon="toast.icon"
          :dismissible="toast.dismissible"
          :position="pos"
          @dismiss="removeToast"
        />
      </div>
    </template>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import Toast from './Toast.vue'
import { computed } from 'vue'
import type { ToastPosition } from '@/composables/useToast'

const { toasts, removeToast } = useToast()

// Group toasts by position
const toastsByPosition = computed(() => {
  const grouped: Record<ToastPosition, typeof toasts.value> = {
    'center': [],
    'top-left': [],
    'top-center': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-center': [],
    'bottom-right': []
  }
  
  toasts.value.forEach(toast => {
    const position = toast.position || 'top-right'
    // Need to use array spread to avoid readonly array issues
    grouped[position] = [...grouped[position], toast]
  })
  
  return grouped
})

const positionKeys = computed(() => {
  return Object.keys(toastsByPosition.value).filter(
    pos => toastsByPosition.value[pos as ToastPosition]?.length > 0
  ) as ToastPosition[]
})
</script>
