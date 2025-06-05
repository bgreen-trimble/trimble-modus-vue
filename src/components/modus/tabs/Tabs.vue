<script setup lang="ts">
import { computed, provide, ref, onMounted, watch, nextTick } from 'vue'
import type { TabItem } from './types'

/**
 * Tabs component that provides a navigational interface for switching between multiple views or content panels.
 * Each tab represents a section, and clicking on a tab displays its associated content while hiding others.
 * Useful for organizing related content in a compact and user-friendly manner.
 */

/**
 * Props for the Tabs component.
 *
 * @property {string} active - The identifier of the currently active tab.
 * @property {'small' | 'medium' | 'large'} [size] - Optional size of the tabs. Defaults to 'medium' if not specified.
 * @property {'default' | 'bordered' | 'borderless'} [variant] - Optional visual style variant for the tabs.
 * @property {boolean} [vertical] - If true, displays tabs vertically instead of horizontally.
 */
export interface TabsProps {
  active: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'bordered' | 'borderless'
  vertical?: boolean
}

const props = withDefaults(defineProps<TabsProps>(), {
  size: 'medium',
  variant: 'default',
  vertical: false
})

const emit = defineEmits<{
  'update:active': [value: string]
}>()

const tabs = ref<TabItem[]>([])
const activeTabElement = ref<HTMLElement>()

// Register tab with parent
const registerTab = (tab: TabItem) => {
  tabs.value.push(tab)
}

// Unregister tab with parent
const unregisterTab = (tabId: string) => {
  const index = tabs.value.findIndex(t => t.id === tabId)
  if (index !== -1) {
    tabs.value.splice(index, 1)

    // If the removed tab was active, select a new tab
    if (activeRef.value === tabId && tabs.value.length > 0) {
      // Try to select the next available tab, or the last tab if we removed the last item
      const newIndex = Math.min(index, tabs.value.length - 1)
      const newActiveTab = tabs.value[newIndex]

      // Only select if we found a non-disabled tab
      if (newActiveTab && !newActiveTab.disabled) {
        activeRef.value = newActiveTab.id
        emit('update:active', newActiveTab.id)
      } else {
        // If the immediate tab is disabled, find the first non-disabled tab
        const firstAvailableTab = tabs.value.find(tab => !tab.disabled)
        if (firstAvailableTab) {
          activeRef.value = firstAvailableTab.id
          emit('update:active', firstAvailableTab.id)
        }
      }
    }
  }
}

// Provide methods to child components
provide('registerTab', registerTab)
provide('unregisterTab', unregisterTab)

// Create a ref for activeId that can be updated
const activeRef = ref<string>(props.active)
provide('active', activeRef)

// Update activeIdRef when props.activeId changes
watch(() => props.active, (newValue) => {
  if (newValue !== activeRef.value) {
    activeRef.value = newValue
  }
}, { immediate: true })

// When a tab is clicked, update activeIdRef and emit the event
const handleTabClick = (tabId: string) => {
  activeRef.value = tabId
  emit('update:active', tabId)
}

// Calculate indicator position
const indicatorStyle = computed(() => {
  if (!activeTabElement.value) return {}

  const elem = activeTabElement.value
  const rect = elem.getBoundingClientRect()
  const parentRect = elem.parentElement?.getBoundingClientRect()

  if (!parentRect) return {}

  if (props.vertical) {
    return {
      top: `${rect.top - parentRect.top}px`,
      height: `${rect.height}px`
    }
  }

  return {
    left: `${rect.left - parentRect.left}px`,
    width: `${rect.width}px`
  }
})

// Update active tab element reference when activeId changes
const updateActiveTabElement = () => {
  nextTick(() => {
    activeTabElement.value = document.getElementById(`tab-${props.active}`) as HTMLElement
  })
}

onMounted(() => {
  // Use nextTick to ensure DOM is rendered before calculating positions
  nextTick(() => {
    updateActiveTabElement()
  })
})

// Watch for changes in activeId to update indicator position
watch(() => props.active, () => {
  updateActiveTabElement()
})

const handleKeyNavigation = (event: KeyboardEvent) => {
  const currentIndex = tabs.value.findIndex(tab => tab.id === activeRef.value)
  let nextIndex = currentIndex

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      do {
        nextIndex = (nextIndex + 1) % tabs.value.length
      } while (tabs.value[nextIndex].disabled && nextIndex !== currentIndex)
      break

    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      do {
        nextIndex = nextIndex - 1 < 0 ? tabs.value.length - 1 : nextIndex - 1
      } while (tabs.value[nextIndex].disabled && nextIndex !== currentIndex)
      break

    case 'Home':
      event.preventDefault()
      nextIndex = tabs.value.findIndex(tab => !tab.disabled)
      break

    case 'End':
      event.preventDefault()
      nextIndex = tabs.value.length - 1
      while (nextIndex >= 0 && tabs.value[nextIndex].disabled) {
        nextIndex--
      }
      break

    default:
      return
  }

  if (nextIndex !== currentIndex && !tabs.value[nextIndex].disabled) {
    activeRef.value = tabs.value[nextIndex].id
    emit('update:active', tabs.value[nextIndex].id)
    document.getElementById(`tab-${tabs.value[nextIndex].id}`)?.focus()
  }
}
</script>

<template>
  <div :class="[
    'tm-tabs',
    `tm-tabs-${size}`,
    {
      'tm-tabs-vertical': vertical,
      'tm-tabs-bordered': variant === 'bordered',
      'tm-tabs-no-border': variant === 'borderless'
    }
  ]" role="tablist" :aria-orientation="vertical ? 'vertical' : 'horizontal'">
    <div :class="[
      'tm-tabs-nav',
      { 'tm-tabs-nav-vertical': vertical }
    ]">
      <button v-for="tab in tabs" :key="tab.id" class="tm-tab-button" :class="{
        'tm-tab-active': props.active === tab.id,
        'tm-tab-disabled': tab.disabled
      }" role="tab" :id="`tab-${tab.id}`" :aria-selected="props.active === tab.id" :aria-controls="`tab-${tab.id}`"
        :disabled="tab.disabled" :tabindex="props.active === tab.id ? 0 : -1"
        @click="!tab.disabled && handleTabClick(tab.id)" @keydown="handleKeyNavigation">
        <slot name="tab" :tab="tab" :active="props.active === tab.id">
          <span v-if="tab.icon" class="tm-tab-icon">
            <i class="modus-icons" :aria-hidden="tab.label ? 'true' : 'false'">{{ tab.icon }}</i>
          </span>
          <span v-if="tab.label" class="tm-tab-label">{{ tab.label }}</span>
          <!-- Add aria-label for icon-only tabs -->
          <span v-if="!tab.label && tab.icon" class="sr-only">{{ tab.id }}</span>
        </slot>
      </button>
      <div v-if="variant !== 'borderless'" class="tm-tabs-active-indicator" :style="indicatorStyle"></div>
    </div>
    <div class="tm-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
