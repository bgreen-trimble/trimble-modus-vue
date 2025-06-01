<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Button } from '@/components'

// Basic menu items
const items = [
  {
    label: 'Home',
    icon: 'home',
  },
  {
    label: 'Edit',
    icon: 'pencil',
  },
  { separator: true as true },
  {
    label: 'Settings',
    icon: 'settings',
    url: '#settings'
  },
  {
    label: 'Disabled Option',
    icon: 'block',
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
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="tm-h1 mb-4">Menu Component</h1>
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
      <p class="tm-body text-gray-600 dark:text-gray-400">
        Basic menu with icons, separator, URL link, and disabled item.
      </p>
    </section>

    <!-- Popup Menu -->
    <section class="space-y-4">
      <h2 class="tm-h2">Popup Menu</h2>
      <div>
        <Button @click="menuRef.toggle($event)" severity="primary">
          <template #icon>
            <span class="modus-icons">more_vertical</span>
          </template>
          Show Menu
        </Button>
        <Menu ref="menuRef" :model="commandItems" popup />
      </div>
      <p class="tm-body text-gray-600 dark:text-gray-400">
        Click the button to show a popup menu with custom commands.
      </p>
    </section>

    <!-- User Menu Example -->
    <section class="space-y-4">
      <h2 class="tm-h2">User Menu Example</h2>
      <div class="w-64">
        <Menu :model="userItems" />
      </div>
      <p class="tm-body text-gray-600 dark:text-gray-400">
        Example of a user menu with profile actions and sign out option.
      </p>
    </section>

    <!-- Icon Examples -->
    <section class="space-y-4">
      <h2 class="tm-h2">Menu with Icons</h2>
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
      <p class="tm-body text-gray-600 dark:text-gray-400">
        Examples of menus using Modus icons in different contexts. Icons help users quickly identify menu items and enhance the visual hierarchy.
      </p>
    </section>

  </div>
</template>
