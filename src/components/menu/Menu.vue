<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import type { MenuItem } from './menuitem'
import MenuItemComponent from './MenuItem.vue'
import './menu.css'
import { Teleport } from 'vue'


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
const visible = ref(false)
const focused = ref(false)

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
    visible.value = true
    position(event)
    emit('show')
  }
}

const hide = () => {
  if (props.popup) {
    visible.value = false
    emit('hide')
  }
}

const position = (event: Event) => {
  if (!menuRef.value || !(event instanceof MouseEvent)) return

  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const menu = menuRef.value
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Check if we're appending to the button or an element 
  const appendingToButton = 
    (props.appendTo && typeof props.appendTo === 'object' && ('value' in props.appendTo || props.appendTo instanceof HTMLElement)) ||
    (typeof teleportTarget.value === 'object' && teleportTarget.value instanceof HTMLElement)

  // First, set initial position
  if (appendingToButton) {
    // When teleported to a button/element, position relative to it
    menu.style.position = 'absolute'
    menu.style.left = '0px'  // Position at the left edge of the button
    menu.style.top = `${target.offsetHeight + 5}px`  // Position below the button
  } else if (teleportTarget.value === 'body') {
    // When teleported to body, use fixed positioning with viewport coordinates
    menu.style.position = 'fixed'
    menu.style.left = `${rect.left}px`
    menu.style.top = `${rect.bottom + 5}px`
  } else {
    // When teleported elsewhere, use absolute positioning relative to that container
    menu.style.position = 'absolute'
    menu.style.left = `${rect.left + scrollLeft}px`
    menu.style.top = `${rect.bottom + scrollTop + 5}px`
  }

  // Ensure menu is visible within viewport - use a short timeout to let the menu render first
  setTimeout(() => {
    const menuRect = menu.getBoundingClientRect()
    
    // Check if menu is fully visible in the viewport
    const isOutsideRight = menuRect.right > viewportWidth
    const isOutsideBottom = menuRect.bottom > viewportHeight
    const isOutsideLeft = menuRect.left < 0
    const isOutsideTop = menuRect.top < 0

    // Handle horizontal overflow
    if (isOutsideRight) {
      if (appendingToButton) {
        // If appended to button, align to right edge
        menu.style.left = 'auto'
        menu.style.right = '0px'
      } else {
        // Adjust to fit within right edge of viewport
        menu.style.left = `${viewportWidth - menuRect.width - 5}px`
      }
    } else if (isOutsideLeft) {
      // Adjust to fit within left edge of viewport
      menu.style.left = '5px'
    }

    // Handle vertical overflow
    if (isOutsideBottom) {
      if (appendingToButton) {
        // If appended to button, show above button if there's enough space
        if (rect.top > menuRect.height) {
          menu.style.top = 'auto'
          menu.style.bottom = `${target.offsetHeight + 5}px`
        } else {
          // If not enough space above, position at top of viewport with small margin
          menu.style.top = '5px'
          menu.style.maxHeight = `${viewportHeight - 10}px`
          menu.style.overflowY = 'auto'
        }
      } else {
        // Check if there's enough space above the trigger element
        if (rect.top > menuRect.height) {
          // Position above the trigger element
          menu.style.top = `${rect.top - menuRect.height - 5}px`
        } else {
          // If not enough space above, position at top of viewport with small margin
          menu.style.top = '5px'
          menu.style.maxHeight = `${viewportHeight - 10}px`
          menu.style.overflowY = 'auto'
        }
      }
    } else if (isOutsideTop) {
      // Adjust to fit within top edge of viewport
      menu.style.top = '5px'
    }
  }, 0)
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

onMounted(() => {
  if (props.popup) {
    document.addEventListener('click', onDocumentClick)
  }
})

onBeforeUnmount(() => {
  if (props.popup) {
    document.removeEventListener('click', onDocumentClick)
  }
})

// Expose methods for external use via ref
defineExpose({
  toggle,
  show,
  hide
})
</script>

<template>
  <template v-if="popup">
    <Teleport :to="teleportTarget">
      <div 
        ref="menuRef" 
        :class="['tm-menu', { 'tm-menu-popup': popup }, props.class]" 
        :style="props.style"
        v-show="visible"
        @focus="emit('focus')"
        @blur="emit('blur')"
        tabindex="0"
      >
        <ul class="tm-menu-list" role="menu">
          <MenuItemComponent 
            v-for="(item, i) in model" 
            :key="item.key || i" 
            :item="item"
            @click="onItemClick"
          />
        </ul>
      </div>
    </Teleport>
  </template>
  <template v-else>
    <div 
      ref="menuRef" 
      :class="['tm-menu', props.class]" 
      :style="props.style"
      @focus="emit('focus')"
      @blur="emit('blur')"
      tabindex="0"
    >
      <ul class="tm-menu-list" role="menu">
        <MenuItemComponent 
          v-for="(item, i) in model" 
          :key="item.key || i" 
          :item="item"
          @click="onItemClick"
        />
      </ul>
    </div>
  </template>
</template>
