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
          'tm-tab-active': activeId === tab.id,
          'tm-tab-disabled': tab.disabled
        }"
        role="tab"
        :id="`tab-${tab.id}`"
        :aria-selected="activeId === tab.id"
        :aria-controls="`tab-${tab.id}`"
        :disabled="tab.disabled"
        :tabindex="activeId === tab.id ? 0 : -1"
        @click="!tab.disabled && $emit('update:activeId', tab.id)"
        @keydown="handleKeyNavigation"
      >
        <slot
          name="tab"
          :tab="tab"
          :active="activeId === tab.id"
        >
          {{ tab.label }}
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

<script setup lang="ts">
import { computed, provide, ref, onMounted, watch, nextTick } from 'vue'
import type { TabItem } from './types'

export interface TabsProps {
  activeId: string  // Changed from modelValue
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
  'update:activeId': [value: string]  // Changed from update:modelValue
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

// Update active tab element reference when modelValue changes
const updateActiveTabElement = () => {
  activeTabElement.value = document.getElementById(`tab-${props.activeId}`) as HTMLElement
}

onMounted(() => {
  updateActiveTabElement()
})

// Watch for changes in modelValue to update indicator position
watch(() => props.activeId, () => {
  nextTick(() => {
    updateActiveTabElement()
  })
})

const handleKeyNavigation = (event: KeyboardEvent) => {
  const currentIndex = tabs.value.findIndex(tab => tab.id === props.activeId)
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
    emit('update:activeId', tabs.value[nextIndex].id)
    document.getElementById(`tab-${tabs.value[nextIndex].id}`)?.focus()
  }
}
</script>

<style scoped>
@import './tabs.css';

.tm-tabs {
  display: flex;
  flex-direction: column;
}

.tm-tabs-vertical {
  flex-direction: row;
}

.tm-tabs-nav {
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--color-tm-tab-border);
}

.tm-tabs-nav-vertical {
  flex-direction: column;
  border-bottom: none;
  border-right: 1px solid var(--color-tm-tab-border);
}

.tm-tab-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tm-tab-padding-y) var(--tm-tab-padding-x);
  border: none;
  background: none;
  color: var(--color-tm-tab-text);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.tm-tab-button:hover:not(.tm-tab-disabled) {
  color: var(--color-tm-tab-text-hover);
  background-color: var(--color-tm-tab-hover-bg);
}

.tm-tab-active {
  color: var(--color-tm-tab-text-active) !important;
}

.tm-tab-disabled {
  color: var(--color-tm-tab-text-disabled);
  cursor: not-allowed;
}

.tm-tabs-active-indicator {
  position: absolute;
  background-color: var(--color-tm-tab-active-border);
  transition: all 0.3s ease;
}

.tm-tabs-nav:not(.tm-tabs-nav-vertical) .tm-tabs-active-indicator {
  bottom: -1px;
  height: 2px;
}

.tm-tabs-nav-vertical .tm-tabs-active-indicator {
  right: -1px;
  width: 2px;
}

/* Size variants */
.tm-tabs-small .tm-tab-button {
  height: var(--tm-tab-height-small);
  font-size: 0.875rem;
}

.tm-tabs-medium .tm-tab-button {
  height: var(--tm-tab-height-medium);
  font-size: 1rem;
}

.tm-tabs-large .tm-tab-button {
  height: var(--tm-tab-height-large);
  font-size: 1.125rem;
}

/* Bordered variant */
.tm-tabs-bordered .tm-tab-button {
  margin-bottom: -1px;
  border: 1px solid transparent;
}

.tm-tabs-bordered .tm-tab-active {
  border-color: var(--color-tm-tab-border);
  border-bottom-color: transparent;
  background-color: var(--color-tm-white);
}

.tm-tabs-bordered.tm-tabs-vertical .tm-tab-button {
  margin-bottom: 0;
  margin-right: -1px;
}

.tm-tabs-bordered.tm-tabs-vertical .tm-tab-active {
  border-color: var(--color-tm-tab-border);
  border-right-color: transparent;
}

.tm-tabs-content {
  padding: 1rem;
  flex: 1;
}

/* Focus styles */
.tm-tab-button:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--color-tm-tab-focus-ring);
}
</style>
