<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
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
    // First set visibility to hidden but render the menu
    // so we can measure its dimensions before positioning
    if (menuRef.value) {
      menuRef.value.style.visibility = 'hidden'
    }
    visible.value = true
    
    // Use nextTick to ensure the menu is in the DOM
    // before we try to position it
    nextTick(() => {
      position(event)
      // Make the menu visible once it's properly positioned
      if (menuRef.value) {
        menuRef.value.style.visibility = 'visible'
      }
      emit('show')
    })
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

  // Now that the menu is in the DOM (but hidden), we can get its real dimensions
  const menuRect = menu.getBoundingClientRect()
  const menuWidth = menuRect.width
  const menuHeight = menuRect.height

  // Determine ideal position
  let position = 'bottom'
  
  // Check available space in each direction
  const spaceBottom = viewportHeight - rect.bottom
  const spaceTop = rect.top
  const spaceRight = viewportWidth - rect.right
  const spaceLeft = rect.left

  // Determine the best position (top, right, bottom, left)
  if (spaceBottom < menuHeight && spaceTop > menuHeight) {
    position = 'top'
  } else if (spaceBottom < menuHeight && spaceTop < menuHeight) {
    // Not enough space above or below, choose the one with more space
    position = spaceTop > spaceBottom ? 'top' : 'bottom'
  }

  // Set initial position based on calculated ideal position
  if (appendingToButton) {
    // When teleported to a button/element, position relative to it
    menu.style.position = 'absolute'
    
    // Horizontal positioning
    if (menuWidth > target.offsetWidth && spaceRight < menuWidth && spaceLeft > spaceRight) {
      // Menu is wider than button and more space on left than right
      menu.style.right = '0px'
      menu.style.left = 'auto'
    } else {
      // Default left alignment or more space on right
      menu.style.left = '0px'
      menu.style.right = 'auto'
    }
    
    // Vertical positioning
    if (position === 'top') {
      menu.style.bottom = `${target.offsetHeight + 5}px`
      menu.style.top = 'auto'
    } else {
      menu.style.top = `${target.offsetHeight + 5}px`
      menu.style.bottom = 'auto'
    }
  } else if (teleportTarget.value === 'body') {
    // When teleported to body, use fixed positioning with viewport coordinates
    menu.style.position = 'fixed'
    
    // Horizontal positioning
    if (rect.left + menuWidth > viewportWidth) {
      // Not enough space to the right, position to the left
      menu.style.left = `${Math.max(0, viewportWidth - menuWidth - 5)}px`
    } else {
      menu.style.left = `${rect.left}px`
    }
    
    // Vertical positioning
    if (position === 'top') {
      menu.style.top = `${rect.top - menuHeight - 5}px`
    } else {
      menu.style.top = `${rect.bottom + 5}px`
    }
  } else {
    // When teleported elsewhere, use absolute positioning relative to that container
    menu.style.position = 'absolute'
    
    // Horizontal positioning
    if (rect.left + scrollLeft + menuWidth > viewportWidth) {
      // Not enough space to the right
      menu.style.left = `${Math.max(0, viewportWidth - menuWidth - 5)}px`
    } else {
      menu.style.left = `${rect.left + scrollLeft}px`
    }
    
    // Vertical positioning
    if (position === 'top') {
      menu.style.top = `${rect.top + scrollTop - menuHeight - 5}px`
    } else {
      menu.style.top = `${rect.bottom + scrollTop + 5}px`
    }
  }

  // Handle overflow cases
  // If menu would be outside viewport, adjust its position or size
  const updatedMenuRect = menu.getBoundingClientRect()
  
  // Check if menu is fully visible in the viewport
  const isOutsideRight = updatedMenuRect.right > viewportWidth
  const isOutsideBottom = updatedMenuRect.bottom > viewportHeight
  const isOutsideLeft = updatedMenuRect.left < 0
  const isOutsideTop = updatedMenuRect.top < 0

  // Handle any remaining overflow issues
  if (isOutsideRight) {
    if (appendingToButton) {
      menu.style.left = 'auto'
      menu.style.right = '0px'
    } else {
      menu.style.left = `${viewportWidth - menuRect.width - 5}px`
    }
  } else if (isOutsideLeft) {
    menu.style.left = '5px'
  }

  if (isOutsideBottom) {
    // If not enough space below, either position above or constrain height
    if (position === 'bottom' && rect.top > menuHeight) {
      // If originally positioned below but there's room above, flip to above
      if (appendingToButton) {
        menu.style.top = 'auto'
        menu.style.bottom = `${target.offsetHeight + 5}px`
      } else {
        menu.style.top = `${rect.top - menuHeight - 5}px`
      }
    } else {
      // Otherwise, constrain height and add scrolling
      menu.style.maxHeight = `${viewportHeight - updatedMenuRect.top - 10}px`
      menu.style.overflowY = 'auto'
    }
  } else if (isOutsideTop) {
    // If menu is above viewport, position it at top of viewport
    menu.style.top = '5px'
    if (updatedMenuRect.height > viewportHeight - 10) {
      menu.style.maxHeight = `${viewportHeight - 10}px`
      menu.style.overflowY = 'auto'
    }
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
