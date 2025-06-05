<script setup lang="ts">
import { computed } from 'vue'
import { type MenuItem } from './menuitem'
import Menu from './Menu.vue'

const props = defineProps<{
  item: MenuItem
  index?: number
  menuId?: string
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

const hasSubmenu = computed(() => !!props.item.items)

const onClick = (event: Event) => {
  if (props.item.separator || disabled.value) {
    event.preventDefault()
    return
  }
  
  emit('click', event, props.item)
}

const itemId = computed(() => props.menuId ? `${props.menuId}-item-${props.index}` : undefined)
</script>

<template>
  <li v-if="item.separator" 
      class="tm-menu-separator" 
      role="separator" 
      aria-orientation="horizontal" />
  <li v-else-if="visible" 
      :class="[
        'tm-menu-item', 
        { 'tm-menu-item-disabled': disabled },
        item.class
      ]"
      :style="item.style"
      role="none">
    <a v-if="item.url" 
       :href="item.url" 
       :target="item.target"
       :class="['tm-menu-link', { 'tm-menu-link-disabled': disabled }]"
       @click="onClick"
       role="menuitem"
       :id="itemId"
       :aria-disabled="disabled"
       :aria-expanded="hasSubmenu ? 'false' : undefined"
       :aria-haspopup="hasSubmenu"
       :aria-labelledby="itemId"
       tabindex="-1">
      <span v-if="item.icon" class="tm-menu-icon" aria-hidden="true">
        <i class="modus-icons">{{ item.icon }}</i>
      </span>
      <span class="tm-menu-label">{{ label }}</span>
      <i v-if="hasSubmenu" 
         class="modus-icons tm-menu-submenu-icon" 
         aria-hidden="true">
         chevron_right
      </i>
    </a>
    <div v-else 
         :class="['tm-menu-link', { 'tm-menu-link-disabled': disabled }]"
         @click="onClick"
         role="menuitem"
         :id="itemId"
         :aria-disabled="disabled"
         :aria-expanded="hasSubmenu ? 'false' : undefined"
         :aria-haspopup="hasSubmenu"
         :aria-labelledby="itemId"
         tabindex="-1">
      <span v-if="item.icon" class="tm-menu-icon" aria-hidden="true">
        <i class="modus-icons">{{ item.icon }}</i>
      </span>
      <span class="tm-menu-label">{{ label }}</span>
      <i v-if="hasSubmenu" 
         class="modus-icons tm-menu-submenu-icon" 
         aria-hidden="true">
         chevron_right
      </i>
    </div>
    <Menu v-if="item.items" 
          :model="item.items" 
          :aria-labelledby="itemId"
          class="tm-submenu" />
  </li>
</template>

<style scoped>
.tm-menu-submenu-icon {
  margin-left: auto;
  font-size: 1.25em;
}

.tm-menu-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s;
}

.tm-menu-link-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* High contrast mode support */
@media (forced-colors: active) {
  .tm-menu-link-disabled {
    opacity: 1;
    color: GrayText;
  }
}

.tm-submenu {
  position: relative;
  margin-top: 0.25rem;
  margin-left: 1rem;
}
</style>
