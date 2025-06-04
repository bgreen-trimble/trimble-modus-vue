<template>
  <div
    :id="`panel-${id}`"
    role="tabpanel"
    :aria-labelledby="`tab-${id}`"
    :hidden="!isActive"
    tabindex="0"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, computed } from 'vue'
import type { TabItem } from './types'

const props = defineProps<{
  id: string
  label: string
  disabled?: boolean
  activeId: string  // Changed from modelValue
}>()

const isActive = computed(() => props.activeId === props.id)

const registerTab = inject<(tab: TabItem) => void>('registerTab')
const unregisterTab = inject<(id: string) => void>('unregisterTab')

onMounted(() => {
  if (registerTab) {
    registerTab({
      id: props.id,
      label: props.label,
      disabled: props.disabled || false
    })
  }
})

onBeforeUnmount(() => {
  if (unregisterTab) {
    unregisterTab(props.id)
  }
})
</script>

<style scoped>
div[role="tabpanel"] {
  outline: none;
}

div[role="tabpanel"]:focus-visible {
  box-shadow: inset 0 0 0 2px var(--color-tm-tab-focus-ring);
}
</style>
