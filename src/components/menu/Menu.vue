<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { MenuItem } from './menuitem'
import MenuItemComponent from './MenuItem.vue'
import './menu.css'


interface MenuProps {
  model: MenuItem[]
  popup?: boolean
  appendTo?: string | HTMLElement
  class?: string
  style?: any
}

const props = withDefaults(defineProps<MenuProps>(), {
  popup: false,
  appendTo: 'body'
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

  menu.style.position = 'fixed'
  menu.style.left = `${rect.left}px`
  menu.style.top = `${rect.bottom + 5}px`
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
</script>

<template>
  <div 
    ref="menuRef" 
    :class="['tm-menu', { 'tm-menu-popup': popup }, props.class]" 
    :style="props.style"
    v-show="!popup || visible"
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
