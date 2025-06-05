<template>
  <div
    :id="`panel-${id}`"
    role="tabpanel"
    :aria-labelledby="`tab-${id}`"
    :hidden="!isActive"
    :class="{ 'tm-tab-visible': isActive, 'tm-tab-hidden': !isActive }"
    tabindex="0"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, computed, ref, watch } from 'vue'
import type { TabItem } from './types'

const props = defineProps<{
  id: string
  label: string
  icon?: string
  disabled?: boolean
}>()

const active = inject('active', ref(''))

const isActive = computed(() => {
  // Handle both ref and direct string value
  return typeof active === 'object' ? active.value === props.id : active === props.id
})

const registerTab = inject<(tab: TabItem) => void>('registerTab')
const unregisterTab = inject<(id: string) => void>('unregisterTab')

onMounted(() => {
  if (registerTab) {
    registerTab({
      id: props.id,
      label: props.label,
      icon: props.icon,
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

.tm-tab-icon {
  display: inline-flex;
  margin-right: 0.5rem;
  align-items: center;
}

.tm-tabs-vertical .tm-tab-button .tm-tab-icon {
  margin-right: 0.5rem;
  margin-bottom: 0;
}
</style>
