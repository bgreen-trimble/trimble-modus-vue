<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick, watch } from 'vue'
import type { MenuItem } from './menuitem'
import MenuItemComponent from './MenuItem.vue'
import './menu.css'
import { Teleport } from 'vue'
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue'


interface MenuProps {
  model: MenuItem[]
  popup?: boolean
  appendTo?: string | HTMLElement | any  // Added 'any' to support Vue refs
  class?: string
  style?: any
}

const props = withDefaults(defineProps<MenuProps>(), {
  popup: false,
  appendTo: 'body'
})

// Add UUID for menu ID
const menuId = `tm-menu-${Math.random().toString(36).slice(2, 11)}`

// Compute the actual target for Teleport
const teleportTarget = computed(() => {
  // If appendTo is a ref object with a value property
  if (props.appendTo && typeof props.appendTo === 'object' && 'value' in props.appendTo) {
    return props.appendTo.value || 'body'
  }
  // Otherwise return the appendTo value directly
  return props.appendTo
})

const emit = defineEmits<{
  (e: 'show'): void
  (e: 'hide'): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()

const menuRef = ref<HTMLElement | null>(null)
const referenceRef = ref<HTMLElement | null>(null)
const visible = ref(false)
const focused = ref(false)

// Setup Floating UI
const {
  floatingStyles,
  middlewareData,
  placement,
  update
} = useFloating(referenceRef, menuRef, {
  placement: 'bottom-start',
  middleware: [
    offset(5), // 5px distance from the reference element
    flip({ padding: 5 }), // flip to the opposite side if needed
    shift({ padding: 5 }) // shift to keep in viewport
  ],
  whileElementsMounted: autoUpdate // automatically update position
})

// When menu becomes visible, store the reference element
const toggle = (event: Event) => {
  if (props.popup) {
    if (visible.value) {
      hide()
    } else {
      show(event)
    }
  }
}

const show = (event: Event) => {
  if (props.popup && menuRef.value) {
    event.stopPropagation()
    
    // Store the reference element (the trigger button/element)
    if (event.currentTarget) {
      referenceRef.value = event.currentTarget as HTMLElement
    }
    
    // Initially hide the menu visually but render it in the DOM
    if (menuRef.value) {
      menuRef.value.style.visibility = 'hidden'
    }
    
    // Show the menu
    visible.value = true
    
    // Wait for the menu to be rendered, then update position and make visible
    nextTick(async () => {
      // Force Floating UI to update the position
      if (update) await update()
      
      // Make the menu visible once it's properly positioned
      if (menuRef.value) {
        menuRef.value.style.visibility = 'visible'
      }
      
      emit('show')
    })
  }
}

/**
 * Hides the popup menu.
 * This gets triggered when:
 * 1. The user clicks outside the menu
 * 2. The user clicks a menu item
 * 3. The window is scrolled
 * 4. The hide method is called programmatically
 */
const hide = () => {
  if (props.popup) {
    visible.value = false
    emit('hide')
    referenceRef.value = null
  }
}

const onItemClick = (event: Event, item: MenuItem) => {
  if (item.command) {
    item.command({ 
      originalEvent: event, 
      item,
      focused: focused.value
    })
  }

  if (props.popup) {
    hide()
  }
}

const onDocumentClick = (event: MouseEvent) => {
  if (props.popup && menuRef.value && !menuRef.value.contains(event.target as Node)) {
    hide()
  }
}

/**
 * Close the popup menu when the window is scrolled.
 * This ensures the menu doesn't appear to "float away" from its trigger
 * element during scrolling, which can confuse users.
 * We use the capture phase (true) to ensure we catch the scroll event
 * as early as possible.
 */
const onWindowScroll = () => {
  if (props.popup && visible.value) {
    hide()
  }
}

// Keyboard navigation
const focusableItems = ref<HTMLElement[]>([])
const currentFocusIndex = ref(-1)

const onKeyDown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      focusPreviousItem()
      break
    case 'ArrowDown':
      event.preventDefault()
      focusNextItem()
      break
    case 'ArrowRight':
      event.preventDefault()
      // Open submenu if it exists
      const currentItem = focusableItems.value[currentFocusIndex.value]
      const submenu = currentItem?.querySelector('[role="menu"]') as HTMLElement | null
      if (submenu) {
        submenu.focus()
      }
      break
    case 'ArrowLeft':
      event.preventDefault()
      // Close current menu if it's a submenu
      if (props.popup) {
        hide()
        referenceRef.value?.focus()
      }
      break
    case 'Home':
      event.preventDefault()
      focusFirstItem()
      break
    case 'End':
      event.preventDefault()
      focusLastItem()
      break
    case 'Escape':
      event.preventDefault()
      if (props.popup) {
        hide()
        referenceRef.value?.focus()
      }
      break
  }
}

// Update focusableItems to handle submenus better
const updateFocusableItems = () => {
  if (!menuRef.value) return
  focusableItems.value = Array.from(
    menuRef.value.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"]):not([aria-hidden="true"])')
  ) as HTMLElement[]
}

const focusItem = (index: number) => {
  if (index >= 0 && index < focusableItems.value.length) {
    currentFocusIndex.value = index
    focusableItems.value[index].focus()
  }
}

const focusFirstItem = () => {
  updateFocusableItems()
  focusItem(0)
}

const focusLastItem = () => {
  updateFocusableItems()
  focusItem(focusableItems.value.length - 1)
}

const focusNextItem = () => {
  updateFocusableItems()
  const nextIndex = currentFocusIndex.value + 1
  focusItem(nextIndex >= focusableItems.value.length ? 0 : nextIndex)
}

const focusPreviousItem = () => {
  updateFocusableItems()
  const prevIndex = currentFocusIndex.value - 1
  focusItem(prevIndex < 0 ? focusableItems.value.length - 1 : prevIndex)
}

watch(visible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      updateFocusableItems()
      if (focusableItems.value.length > 0) {
        focusItem(0)
      }
    })
  } else {
    currentFocusIndex.value = -1
  }
})

onMounted(() => {
  if (props.popup) {
    document.addEventListener('click', onDocumentClick)
    window.addEventListener('scroll', onWindowScroll, true)
  }
})

onBeforeUnmount(() => {
  if (props.popup) {
    document.removeEventListener('click', onDocumentClick)
    window.removeEventListener('scroll', onWindowScroll, true)
  }
})

// Expose methods for external use via ref
defineExpose({
  toggle,
  show,
  hide,
  focusFirstItem,
  focusLastItem,
  focusNextItem,
  focusPreviousItem
})
</script>

<template>
  <template v-if="popup">
    <Teleport :to="teleportTarget">
      <div 
        ref="menuRef" 
        :id="menuId"
        :class="['tm-menu', { 'tm-menu-popup': popup }, props.class]" 
        :style="[floatingStyles, props.style]"
        v-show="visible"
        @focus="emit('focus')"
        @blur="emit('blur')"
        @keydown="onKeyDown"
        tabindex="-1"
        role="menu"
        aria-orientation="vertical"
        aria-label="Menu"
      >
        <ul class="tm-menu-list" role="presentation">
          <MenuItemComponent 
            v-for="(item, i) in model" 
            :key="item.key || i" 
            :item="item"
            :index="i"
            :menuId="menuId"
            @click="onItemClick"
          />
        </ul>
      </div>
    </Teleport>
  </template>
  <template v-else>
    <div 
      ref="menuRef" 
      :id="menuId"
      :class="['tm-menu', props.class]" 
      :style="props.style"
      @focus="emit('focus')"
      @blur="emit('blur')"
      @keydown="onKeyDown"
      tabindex="-1"
      role="menu"
      aria-orientation="vertical"
      aria-label="Menu"
    >
      <ul class="tm-menu-list" role="presentation">
        <MenuItemComponent 
          v-for="(item, i) in model" 
          :key="item.key || i" 
          :item="item"
          :index="i"
          :menuId="menuId"
          @click="onItemClick"
        />
      </ul>
    </div>
  </template>
</template>

<style scoped>
.tm-menu {
  max-height: 75vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}

/* Focus indicator for keyboard navigation */
.tm-menu-list :deep([role="menuitem"]:focus-visible) {
  outline: 2px solid var(--color-tm-blue-500);
  outline-offset: -2px;
  border-radius: 4px;
}

/* High contrast focus styles */
@media (forced-colors: active) {
  .tm-menu-list :deep([role="menuitem"]:focus-visible) {
    outline: 2px solid CanvasText;
  }
}
</style>
