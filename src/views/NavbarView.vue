<script setup lang="ts">
import { ref } from 'vue'
import { Navbar, Button } from '@/components'

// Define types for navbar variants
type NavbarVariant = 'primary' | 'secondary' | 'tertiary'

// Add active state tracking for demos
const activePrimary = ref('home')
const activeSecondary = ref('overview')
const activeTertiary = ref('products')

// Function to toggle active item
const setActive = (navbar: NavbarVariant, item: string): void => {
  switch (navbar) {
    case 'primary':
      activePrimary.value = item
      break
    case 'secondary':
      activeSecondary.value = item
      break
    case 'tertiary':
      activeTertiary.value = item
      break
  }
}
</script>

<template>
  <div class="space-y-12">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 mb-2">Navbar Component Showcase</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Demonstrating the Trimble Modus Navbar component with various styles, sizes, and variants.
        </p>
      </div>
    </div>

    <!-- Primary Navbar Examples -->
    <div class="space-y-8">
      <h2 class="tm-h2">Primary Navbar (Blue)</h2>
      <div class="space-y-12">
        <!-- Small Primary Navbar -->
        <div class="space-y-2">
          <h3 class="tm-h3">Small Size</h3>
          <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
            <Navbar variant="primary" size="small">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-6 mr-2" />
                  App
                </div>
              </template>
              <template #middle>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'home' }" @click="setActive('primary', 'home')">Home</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'products' }" @click="setActive('primary', 'products')">Products</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'services' }" @click="setActive('primary', 'services')">Services</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'about' }" @click="setActive('primary', 'about')">About</a>
              </template>
              <template #right>
                <Button size="small" variant="outlined" severity="secondary">Sign In</Button>
              </template>
            </Navbar>
          </div>
        </div>

        <!-- Medium Primary Navbar (Default) -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Medium Size (Default)</h3>
          <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
            <Navbar variant="primary">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                  Dashboard
                </div>
              </template>
              <template #middle>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'dashboard' }" @click="setActive('primary', 'dashboard')">Dashboard</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'projects' }" @click="setActive('primary', 'projects')">Projects</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'analytics' }" @click="setActive('primary', 'analytics')">Analytics</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'reports' }" @click="setActive('primary', 'reports')">Reports</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'settings' }" @click="setActive('primary', 'settings')">Settings</a>
              </template>
              <template #right>
                <Button variant="outlined" severity="secondary">Log In</Button>
                <Button variant="text" severity="secondary">
                  <template #icon>
                    <span class="modus-icons">person</span>
                  </template>
                </Button>
              </template>
            </Navbar>
          </div>
        </div>

        <!-- Large Primary Navbar -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Large Size with Elevation</h3>
          <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
            <Navbar variant="primary" size="large" elevated>
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-8 mr-3" />
                  Enterprise
                </div>
              </template>
              <template #middle>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'home' }" @click="setActive('primary', 'home')">Home</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'solutions' }" @click="setActive('primary', 'solutions')">Solutions</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'industries' }" @click="setActive('primary', 'industries')">Industries</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'partners' }" @click="setActive('primary', 'partners')">Partners</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'resources' }" @click="setActive('primary', 'resources')">Resources</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'contact' }" @click="setActive('primary', 'contact')">Contact</a>
              </template>
              <template #right>
                <Button variant="filled" severity="secondary">Contact Sales</Button>
              </template>
            </Navbar>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary Navbar Examples -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Secondary Navbar (Dark Gray)</h2>
      <div class="space-y-6">
        <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
          <Navbar variant="secondary">
            <template #left>
              <div class="tm-navbar-logo">
                <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                Admin
              </div>
            </template>
            <template #middle>
              <a href="#" :class="{ 'text-blue-600': activeSecondary === 'overview' }" @click="setActive('secondary', 'overview')">Overview</a>
              <a href="#" :class="{ 'text-blue-600': activeSecondary === 'users' }" @click="setActive('secondary', 'users')">Users</a>
              <a href="#" :class="{ 'text-blue-600': activeSecondary === 'permissions' }" @click="setActive('secondary', 'permissions')">Permissions</a>
              <a href="#" :class="{ 'text-blue-600': activeSecondary === 'integrations' }" @click="setActive('secondary', 'integrations')">Integrations</a>
            </template>
            <template #right>
              <Button variant="text" severity="secondary">Help</Button>
              <Button variant="outlined" severity="primary">Log Out</Button>
            </template>
          </Navbar>
        </div>
      </div>
    </div>

    <!-- Tertiary Navbar Examples -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Tertiary Navbar (White/Light)</h2>
      <div class="space-y-6">
        <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
          <Navbar variant="tertiary" elevated rounded>
            <template #left>
              <div class="tm-navbar-logo">
                <img src="https://modus.trimble.com/img/trimble-logo.svg" alt="Trimble Logo" class="h-7 mr-2" />
                Portal
              </div>
            </template>
            <template #middle>
              <a href="#" :class="{ 'text-blue-600': activeTertiary === 'products' }" @click="setActive('tertiary', 'products')">Products</a>
              <a href="#" :class="{ 'text-blue-600': activeTertiary === 'solutions' }" @click="setActive('tertiary', 'solutions')">Solutions</a>
              <a href="#" :class="{ 'text-blue-600': activeTertiary === 'support' }" @click="setActive('tertiary', 'support')">Support</a>
              <a href="#" :class="{ 'text-blue-600': activeTertiary === 'training' }" @click="setActive('tertiary', 'training')">Training</a>
              <a href="#" :class="{ 'text-blue-600': activeTertiary === 'community' }" @click="setActive('tertiary', 'community')">Community</a>
            </template>
            <template #right>
              <Button variant="text" severity="primary">
                <template #icon>
                  <span class="modus-icons">search</span>
                </template>
              </Button>
              <Button variant="filled" severity="primary">Sign Up</Button>
            </template>
          </Navbar>
        </div>
      </div>
    </div>

    <!-- Rounded Navbar Example -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Rounded Navbar</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Rounded navbars have softer edges, perfect for embedded navigation within content areas.
      </p>
      <div class="space-y-6">
        <!-- Primary Rounded Navbar -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Primary Rounded Navbar</h3>
          <div class="border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
            <Navbar variant="primary" rounded elevated>
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                  Rounded Nav
                </div>
              </template>
              <template #middle>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'home' }" @click="setActive('primary', 'home')">Home</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'features' }" @click="setActive('primary', 'features')">Features</a>
                <a href="#" :class="{ 'text-blue-600': activePrimary === 'docs' }" @click="setActive('primary', 'docs')">Docs</a>
              </template>
              <template #right>
                <Button variant="outlined" severity="secondary" size="small">Login</Button>
              </template>
            </Navbar>
          </div>
        </div>

        <!-- Secondary Rounded Navbar -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Secondary Rounded Navbar</h3>
          <div class="border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
            <Navbar variant="secondary" rounded elevated>
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                  Admin
                </div>
              </template>
              <template #middle>
                <a href="#" :class="{ 'text-blue-600': activeSecondary === 'dashboard' }" @click="setActive('secondary', 'dashboard')">Dashboard</a>
                <a href="#" :class="{ 'text-blue-600': activeSecondary === 'settings' }" @click="setActive('secondary', 'settings')">Settings</a>
                <a href="#" :class="{ 'text-blue-600': activeSecondary === 'profile' }" @click="setActive('secondary', 'profile')">Profile</a>
              </template>
              <template #right>
                <Button variant="text" severity="secondary" size="small">
                  <template #icon>
                    <span class="modus-icons">help</span>
                  </template>
                </Button>
              </template>
            </Navbar>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
          <h3 class="text-body font-semibold mb-2">Implementation Note</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            To create a rounded navbar, add the <code>rounded</code> prop:<br>
            <code>&lt;Navbar variant="primary" rounded&gt;</code>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
