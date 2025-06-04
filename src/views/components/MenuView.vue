<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
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
const userItems = [
  {
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
  }
]

// File operations menu items
const fileItems = [
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
]

// Communication menu items
const communicationItems = [
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
]

// Settings menu items
const settingsItems = [
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
]

// Popup menu references and handlers
const buttonRef = ref<HTMLElement | null>(null)
const menuRef = ref<any>(null)
const moreMenuRef = ref<any>(null)

// Handler for menu toggle
const openMenu = (event: Event) => {
  if (menuRef.value?.toggle) {
    menuRef.value.toggle(event)
  }
}

const openMoreMenu = (event: Event) => {
  if (moreMenuRef.value?.toggle) {
    moreMenuRef.value.toggle(event)
  }
}

// Action menu items for popup
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
const contextMenuRef = ref<any>(null)

const onContextMenu = (event: MouseEvent) => {
  event.preventDefault()
  if (contextMenuRef.value?.toggle) {
    contextMenuRef.value.toggle(event)
  }
}

// Cleanup function
onBeforeUnmount(() => {
  if (menuRef.value?.hide) menuRef.value.hide()
  if (moreMenuRef.value?.hide) moreMenuRef.value.hide()
  if (contextMenuRef.value?.hide) contextMenuRef.value.hide()
})
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="tm-h1 mb-4">Menu</h1>
      <p class="tm-body mb-8">
        The Menu component provides a flexible way to display a list of commands or navigation options.
        It supports icons, separators, disabled items, and nested menu structures.
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
          <Menu :model="fileItems" />
        </div>

        <!-- Communication Menu -->
        <div class="w-64">
          <h3 class="tm-h3 mb-2">Communication</h3>
          <Menu :model="communicationItems" />
        </div>

        <!-- Settings Menu -->
        <div class="w-64">
          <h3 class="tm-h3 mb-2">Settings</h3>
          <Menu :model="settingsItems" />
        </div>
      </div>
    </section>

    <!-- Popup Menu Examples -->
    <section class="space-y-4">
      <h2 class="tm-h2">Popup Menu Examples</h2>
      <p class="tm-body mb-4">
        Popup menus appear when triggered by a user action such as clicking a button.
        They provide contextual actions related to the element that triggered them.
      </p>

      <div class="space-y-8">
        <!-- Basic Popup Menu -->
        <div class="space-y-4 p-6 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
          <h3 class="tm-h3">Button Triggered Menu</h3>
          <p class="tm-body mb-4">
            A popup menu that appears when clicking a button.
          </p>
          <div class="flex items-start gap-8">
            <div>
              <Button 
                ref="buttonRef"
                @click="openMenu" 
                severity="primary"
              >
                <template #icon>
                  <span class="modus-icons">menu</span>
                </template>
                Open Menu
              </Button>
              <Menu 
                ref="menuRef" 
                :model="commandItems" 
                popup 
              />
            </div>
            <div class="flex-1">
              <p class="mb-2 tm-body-sm">
                Popup menus are useful for contextual actions or options that don't need to be always visible.
              </p>
            </div>
          </div>
        </div>

        <!-- More Options Popup Menu -->
        <div class="space-y-4 p-6 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg">
          <h3 class="tm-h3">"More" Options Menu</h3>
          <p class="tm-body mb-4">
            A common pattern for showing additional actions for an item.
          </p>
          <div class="flex items-start gap-8">
            <div>
              <Button 
                ref="moreMenuRef"
                @click="openMoreMenu" 
                variant="text"
                severity="secondary"
              >
                <template #icon>
                  <span class="modus-icons">more_vertical</span>
                </template>
              </Button>
              <Menu 
                ref="moreMenuRef" 
                :model="actionItems" 
                popup 
              />
            </div>
            <div class="flex-1">
              <p class="mb-2 tm-body-sm">
                This pattern is commonly used in card interfaces, tables, or list items to provide additional actions without cluttering the UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Menu Example -->
    <section class="space-y-4">
      <h2 class="tm-h2">Context Menu Example</h2>
      <p class="tm-body mb-4">
        Context menus provide actions related to the current context, such as editing or managing items.
        They are typically triggered by a right-click or long press.
      </p>
      <div class="w-64">
        <div 
          class="p-4 border border-tm-gray-2 dark:border-tm-gray-8 rounded-lg"
          @contextmenu="onContextMenu"
        >
          <p class="tm-body mb-2">Right-click inside this box to see the context menu.</p>
          <Menu 
            ref="contextMenuRef" 
            :model="contextMenuItems" 
            popup 
          />
        </div>
      </div>
    </section>
  </div>
</template>
