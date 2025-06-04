<script setup lang="ts">
import { computed, provide, ref, onMounted, watch, nextTick } from 'vue'
import type { TabItem } from './types'

export interface TabsProps {
  activeId: string 
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
  'update:activeId': [value: string]
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
  }
}

// Provide methods to child components
provide('registerTab', registerTab)
provide('unregisterTab', unregisterTab)

// Create a ref for activeId that can be updated
const activeIdRef = ref<string>(props.activeId)
provide('activeId', activeIdRef)

// Update activeIdRef when props.activeId changes
watch(() => props.activeId, (newValue) => {
  if (newValue !== activeIdRef.value) {
    activeIdRef.value = newValue
  }
}, { immediate: true })

// When a tab is clicked, update activeIdRef and emit the event
const handleTabClick = (tabId: string) => {
  activeIdRef.value = tabId
  emit('update:activeId', tabId)
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
    activeTabElement.value = document.getElementById(`tab-${props.activeId}`) as HTMLElement
  })
}

onMounted(() => {
  // Use nextTick to ensure DOM is rendered before calculating positions
  nextTick(() => {
    updateActiveTabElement()
  })
})

// Watch for changes in activeId to update indicator position
watch(() => props.activeId, () => {
  updateActiveTabElement()
})

const handleKeyNavigation = (event: KeyboardEvent) => {
  const currentIndex = tabs.value.findIndex(tab => tab.id === activeIdRef.value)
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
    activeIdRef.value = tabs.value[nextIndex].id
    emit('update:activeId', tabs.value[nextIndex].id)
    document.getElementById(`tab-${tabs.value[nextIndex].id}`)?.focus()
  }
}
</script>

<template>
  <div 
    :class="[
      'tm-tabs',
      `tm-tabs-${size}`,
      {
        'tm-tabs-vertical': vertical,
        'tm-tabs-bordered': variant === 'bordered',
        'tm-tabs-no-border': variant === 'borderless'
      }
    ]"
    role="tablist"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
  >
    <div 
      :class="[
        'tm-tabs-nav',
        { 'tm-tabs-nav-vertical': vertical }
      ]"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tm-tab-button"
        :class="{
          'tm-tab-active': props.activeId === tab.id,
          'tm-tab-disabled': tab.disabled
        }"
        role="tab"
        :id="`tab-${tab.id}`"
        :aria-selected="props.activeId === tab.id"
        :aria-controls="`tab-${tab.id}`"
        :disabled="tab.disabled"
        :tabindex="props.activeId === tab.id ? 0 : -1"
        @click="!tab.disabled && handleTabClick(tab.id)"
        @keydown="handleKeyNavigation"
      >
        <slot
          name="tab"
          :tab="tab"
          :active="props.activeId === tab.id"
        >
          <span v-if="tab.icon" class="tm-tab-icon">
            <i class="modus-icons" :aria-hidden="tab.label ? 'true' : 'false'">{{ tab.icon }}</i>
          </span>
          <span v-if="tab.label" class="tm-tab-label">{{ tab.label }}</span>
          <!-- Add aria-label for icon-only tabs -->
          <span v-if="!tab.label && tab.icon" class="sr-only">{{ tab.id }}</span>
        </slot>
      </button>
      <div 
        v-if="variant !== 'borderless'"
        class="tm-tabs-active-indicator"
        :style="indicatorStyle"
      ></div>
    </div>
    <div class="tm-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

