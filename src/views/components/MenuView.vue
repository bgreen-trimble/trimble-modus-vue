<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from '@/components'

// Basic menu items
const items = [
  {
    label: 'Home',
  },
  {
    label: 'Edit',
  },
  { separator: true as true },
  {
    label: 'Settings',
    url: '#settings'
  },
  {
    label: 'Disabled Option',
    disabled: true
  }
]

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
  }
]

// Menu for user actions
const userItems = [{
    label: "User",
    items: [
  {
    label: 'Profile',
    icon: 'person',
    url: '#profile'
  },
  {
    label: 'Preferences',
    icon: 'settings',
    url: '#preferences'
  },
  { separator: true as true },
  {
    label: 'Sign Out',
    icon: 'sign_out',
    command: () => console.log('Sign out clicked')
  }
]
}]

// Reference for popup menu
const menuRef = ref()
const moreMenuRef = ref()
const contextMenuRef = ref()
const buttonRef = ref()

// Action menu items
const actionItems = [
  {
    label: 'View Details',
    icon: 'visibility',
    command: () => console.log('View details')
  },
  {
    label: 'Share',
    icon: 'share',
    command: () => console.log('Share')
  },
  {
    label: 'Duplicate',
    icon: 'content_copy',
    command: () => console.log('Duplicate')
  },
  { separator: true },
  {
    label: 'Delete',
    icon: 'delete',
    command: () => console.log('Delete clicked')
  }
]

// Context menu items
const contextMenuItems = [
  {
    label: 'Cut',
    icon: 'content_cut',
    command: () => console.log('Cut')
  },
  {
    label: 'Copy',
    icon: 'content_copy',
    command: () => console.log('Copy')
  },
  {
    label: 'Paste',
    icon: 'content_paste',
    command: () => console.log('Paste')
  },
  { separator: true },
  {
    label: 'Select All',
    icon: 'select_all',
    command: () => console.log('Select all')
  }
]

// Context menu handler
const onContextMenu = (event: MouseEvent) => {
  event.preventDefault()
  contextMenuRef.value.toggle(event)
}
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="tm-h1 mb-4">Menu Component Showcase</h1>
      <p class="tm-body mb-8">
        The Menu component provides a flexible way to display a list of commands or navigation options.
        It supports icons, separators, disabled items, and can be used as a popup menu.
      </p>
    </div>

    <!-- Basic Menu -->
    <section class="space-y-4">
      <h2 class="tm-h2">Basic Menu</h2>
      <div class="w-64">
        <Menu :model="items" />
      </div>
      <p class="tm-body">
        Basic menu with icons, separator, URL link, and disabled item.
      </p>
    </section>

    <!-- User Menu Example -->
    <section class="space-y-4">
      <h2 class="tm-h2">User Menu Example</h2>
      <p class="tm-body">
        Example of a user menu with profile actions and sign out option.
      </p>
      <div class="w-64">
        <Menu :model="userItems" />
      </div>
    </section>
    <section class="space-y-4">
      <h2 class="tm-h2">User Menu Example</h2>
      <p class="tm-body">
        Example of a user menu with profile actions and sign out option.
      </p>
      <div class="w-64">
        <Menu :model="userItems" />
      </div>
    </section>

    <!-- Icon Examples -->
    <section class="space-y-4">
      <h2 class="tm-h2">Menu with Icons</h2>
       <p class="tm-body">
        Examples of menus using Modus icons in different contexts. Icons help users quickly identify menu items and enhance the visual hierarchy.
      </p>
     <div class="flex gap-8">
        <!-- File Operations Menu -->
        <div class="w-64">
          <h3 class="tm-h3 mb-2">File Operations</h3>
          <Menu :model="[
            {
              label: 'New File',
              icon: 'add',
              command: () => console.log('New file')
            },
            {
              label: 'Open File',
              icon: 'folder_open',
              command: () => console.log('Open file')
            },
            { separator: true },
            {
              label: 'Save',
              icon: 'save_as',
              command: () => console.log('Save')
            },
            {
              label: 'Download',
              icon: 'download',
              command: () => console.log('Download')
            },
            {
              label: 'Print',
              icon: 'printer',
              disabled: true
            }
          ]" />
        </div>

        <!-- Communication Menu -->
        <div class="w-64">
          <h3 class="tm-h3 mb-2">Communication</h3>
          <Menu :model="[
            {
              label: 'Send Message',
              icon: 'chat',
              command: () => console.log('Send message')
            },
            {
              label: 'Video Call',
              icon: 'video',
              command: () => console.log('Video call')
            },
            {
              label: 'Share Screen',
              icon: 'screen_sharing',
              command: () => console.log('Share screen')
            },
            { separator: true },
            {
              label: 'Notifications',
              icon: 'notifications',
              url: '#notifications'
            },
            {
              label: 'Do Not Disturb',
              icon: 'notifications_off',
              command: () => console.log('DND')
            }
          ]" />
        </div>

        <!-- Settings Menu -->
        <div class="w-64">
          <h3 class="tm-h3 mb-2">Settings</h3>
          <Menu :model="[
            {
              label: 'Account',
              icon: 'person',
              url: '#account'
            },
            {
              label: 'Security',
              icon: 'security',
              url: '#security'
            },
            {
              label: 'Preferences',
              icon: 'settings',
              url: '#preferences'
            },
            { separator: true },
            {
              label: 'Help',
              icon: 'help',
              url: '#help'
            },
            {
              label: 'About',
              icon: 'info',
              command: () => console.log('About')
            }
          ]" />
        </div>
      </div>
    </section>

    <!-- Popup Menu Examples -->
    <section class="space-y-4">
      <h2 class="tm-h2">Popup Menu Examples</h2>
      <p class="tm-body mb-4">
        Popup menus appear when triggered by a user action such as clicking a button or right-clicking on an element.
        They provide contextual actions or commands related to the element that triggered them.
      </p>

      <div class="space-y-8">
        <!-- Basic Popup Menu -->
        <div class="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="tm-h3">Basic Popup Menu</h3>
          <p class="tm-body">
            A simple popup menu triggered by a button click.
          </p>
          <div class="flex items-center gap-8">
            <div>
              <Button 
                ref="buttonRef"
                @click="menuRef.toggle($event)" 
                severity="primary"
              >
                <template #icon>
                  <span class="modus-icons">menu</span>
                </template>
                Open Menu
              </Button>
              <Menu ref="menuRef" :model="commandItems" popup :appendTo="buttonRef" />
            </div>
            <div class="flex-1 text-sm">
              <p><strong>Implementation:</strong></p>
              <p class="mt-2"><code>&lt;Button ref="buttonRef" @click="menuRef.toggle($event)"&gt;Open Menu&lt;/Button&gt;</code></p>
              <p class="mt-2"><code>&lt;Menu ref="menuRef" :model="items" popup :appendTo="buttonRef" /&gt;</code></p>
            </div>
          </div>
        </div>

        <!-- Action Menu (More Options) -->
        <div class="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="tm-h3">Action Menu</h3>
          <p class="tm-body">
            A "more options" menu commonly used for item actions.
          </p>
          <div class="flex items-center gap-8">
            <div>
              <Button 
                ref="moreMenuRef"
                @click="moreMenuRef.toggle($event)" 
                variant="text"
                severity="secondary"
              >
                <template #icon>
                  <span class="modus-icons">more_vertical</span>
                </template>
              </Button>
              <Menu ref="moreMenuRef" :model="actionItems" popup />
            </div>
            <div class="flex-1 text-sm">
              <p><strong>Implementation:</strong></p>
              <p class="mt-2"><code>&lt;Button ref="moreMenuRef" @click="moreMenuRef.toggle($event)" variant="text"&gt;
  &lt;template #icon&gt;
    &lt;span class="modus-icons"&gt;more_vertical&lt;/span&gt;
  &lt;/template&gt;
&lt;/Button&gt;</code></p>
              <p class="mt-2"><code>&lt;Menu ref="moreMenuRef" :model="actionItems" popup /&gt;</code></p>
            </div>
          </div>
        </div>

        <!-- Context Menu -->
        <div class="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="tm-h3">Context Menu</h3>
          <p class="tm-body">
            A menu triggered by right-clicking on an element.
          </p>
          <div class="flex items-center gap-8">
            <div 
              class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center h-24 flex items-center justify-center cursor-context-menu min-w-[200px]"
              @contextmenu="onContextMenu"
            >
              Right-click here
              <Menu ref="contextMenuRef" :model="contextMenuItems" popup />
            </div>
            <div class="flex-1 text-sm">
              <p><strong>Implementation:</strong></p>
              <p class="mt-2"><code>&lt;div @contextmenu="onContextMenu"&gt;
  Right-click here
  &lt;Menu ref="contextMenuRef" :model="contextMenuItems" popup /&gt;
&lt;/div&gt;</code></p>
              <p class="mt-2"><code>const onContextMenu = (event: MouseEvent) => {
  event.preventDefault()
  contextMenuRef.value.toggle(event)
}</code></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
