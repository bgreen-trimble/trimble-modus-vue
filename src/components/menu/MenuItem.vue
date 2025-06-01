<script setup lang="ts">
import { computed } from 'vue'
import { type MenuItem } from './menuitem'
import Menu from './Menu.vue'

const props = defineProps<{
  item: MenuItem
}>()

const emit = defineEmits<{
  (e: 'click', event: Event, item: MenuItem): void
}>()

const visible = computed(() => {
  if (typeof props.item.visible === 'function') {
    return props.item.visible()
  }
  return props.item.visible !== false
})

const disabled = computed(() => {
  if (typeof props.item.disabled === 'function') {
    return props.item.disabled()
  }
  return props.item.disabled === true
})

const label = computed(() => {
  if (typeof props.item.label === 'function') {
    return props.item.label()
  }
  return props.item.label || ''
})

const onClick = (event: Event) => {
  if (props.item.separator || disabled.value) {
    event.preventDefault()
    return
  }
  
  emit('click', event, props.item)
}
</script>

<template>
  <li v-if="item.separator" class="tm-menu-separator" />
  <li v-else-if="visible" 
      :class="[
        'tm-menu-item', 
        { 'tm-menu-item-disabled': disabled },
        item.class
      ]"
      :style="item.style"
      role="menuitem">
    <a v-if="item.url" 
       :href="item.url" 
       :target="item.target"
       :class="['tm-menu-link', { 'tm-menu-link-disabled': disabled }]"
       @click="onClick">
      <span v-if="item.icon" class="tm-menu-icon">
        <i class="modus-icons">{{ item.icon }}</i>
      </span>
      <span class="tm-menu-label">{{ label }}</span>
    </a>
    <div v-else 
         :class="['tm-menu-link', { 'tm-menu-link-disabled': disabled }]"
         @click="onClick">
      <span v-if="item.icon" class="tm-menu-icon">
        <i class="modus-icons">{{ item.icon }}</i>
      </span>
      <span class="tm-menu-label">{{ label }}</span>
    </div>
    <Menu v-if="item.items" :model="item.items" />
  </li>
</template>
