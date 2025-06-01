<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from '@/components'

// Menu with custom commands
const commandItems = [
  {
    label: 'Save',
    icon: 'save_as',
    command: () => alert('Save clicked')
  },
  {
    label: 'Delete',
    icon: 'delete',
    command: () => confirm('Are you sure you want to delete?')
  },
  { separator: true },
  {
    label: 'Edit',
    icon: 'edit',
    command: () => console.log('Edit clicked')
  },
  {
    label: 'Download',
    icon: 'download',
    command: () => console.log('Download clicked')
  }
]

// Create refs for the menu and button
const basicMenuRef = ref()
const buttonRef = ref()
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="tm-h1 mb-2">Popup Menu Example</h1>
      <p class="tm-body mb-8">
        Demonstration of a basic popup menu in the Trimble Modus design system.
        Popup menus are useful for displaying contextual actions or commands.
      </p>
    </div>

    <!-- Basic Popup Menu -->
    <section class="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h2 class="tm-h2">Basic Popup Menu</h2>
      <p class="tm-body mb-4">
        Click the button below to show a popup menu with a list of commands.
      </p>
      <div>
        <Button 
          ref="buttonRef"
          @click="basicMenuRef.toggle($event)" 
          severity="primary"
          icon="more_vertical"
        >
          Show Menu
        </Button>
        <Menu ref="basicMenuRef" :model="commandItems" popup :appendTo="buttonRef" />
      </div>
      <div class="mt-4 text-sm">
        <p><strong>Implementation:</strong> Use the <code>popup</code> prop and a ref to control when the menu appears.</p>
        <p class="mt-2"><code>&lt;Button ref="buttonRef" @click="menuRef.toggle($event)"&gt;Show Menu&lt;/Button&gt;</code></p>
        <p class="mt-2"><code>&lt;Menu ref="menuRef" :model="items" popup :appendTo="buttonRef" /&gt;</code></p>
      </div>
    </section>
  </div>
</template>
