<script setup lang="ts">
import { ref } from 'vue'
import { Navbar, Button } from '@/components'
</script>

<template>
  <div class="space-y-12">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="text-3xl font-bold mb-2">Navbar Component Showcase</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Demonstrating the Trimble Modus Navbar component with various styles, sizes, and variants.
        </p>
      </div>
    </div>

    <!-- Primary Navbar Examples -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Primary Navbar (Blue)</h2>
      <div class="space-y-12">
        <!-- Small Primary Navbar -->
        <div class="space-y-2">
          <h3 class="text-lg font-medium">Small Size</h3>
          <div class="border border-gray-200 dark:border-gray-700  overflow-hidden">
            <Navbar variant="primary" size="small">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-6 mr-2" />
                  Trimble App
                </div>
              </template>
              <template #middle>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">About</a>
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
                  Trimble Dashboard
                </div>
              </template>
              <template #middle>
                <a href="#">Dashboard</a>
                <a href="#">Projects</a>
                <a href="#">Analytics</a>
                <a href="#">Reports</a>
                <a href="#">Settings</a>
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
                  Trimble Enterprise
                </div>
              </template>
              <template #middle>
                <a href="#">Home</a>
                <a href="#">Solutions</a>
                <a href="#">Industries</a>
                <a href="#">Partners</a>
                <a href="#">Resources</a>
                <a href="#">Contact</a>
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
                Trimble Admin
              </div>
            </template>
            <template #middle>
              <a href="#">Overview</a>
              <a href="#">Users</a>
              <a href="#">Permissions</a>
              <a href="#">Integrations</a>
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
                Trimble Portal
              </div>
            </template>
            <template #middle>
              <a href="#">Products</a>
              <a href="#">Solutions</a>
              <a href="#">Support</a>
              <a href="#">Training</a>
              <a href="#">Community</a>
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

    <!-- Fixed Position Navbar Example -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Fixed Position Navbar</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Fixed navbars remain at the top of the viewport while scrolling.
      </p>
      <div class="flex items-center gap-4">
        <Button @click="$router.push('/')">
          See Fixed Navbar Demo (In App Header)
        </Button>
      </div>
      <div class="p-4 border border-gray-200 dark:border-gray-700  bg-blue-50 dark:bg-blue-900/20">
        <h3 class="text-body font-semibold mb-2">Implementation Note</h3>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          To create a fixed navbar, use <code>fixed</code> prop:<br>
          <code>&lt;Navbar variant="primary" fixed&gt;</code>
        </p>
      </div>
    </div>
    
    <!-- Rounded Navbar Example -->
    <div class="space-y-8">
      <h2 class="text-xl font-semibold">Rounded Navbar</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Rounded navbars have rounded corners for a softer appearance, useful for embedded navbars.
      </p>
      <div class="space-y-6">
        <div class="border border-gray-200 dark:border-gray-700  p-4">
          <Navbar variant="primary" rounded>
            <template #left>
              <div class="tm-navbar-logo">
                <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                Rounded Nav
              </div>
            </template>
            <template #middle>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </template>
            <template #right>
              <Button variant="outlined" severity="secondary" size="small">Login</Button>
            </template>
          </Navbar>
        </div>
        <div class="p-4 border border-gray-200 dark:border-gray-700  bg-blue-50 dark:bg-blue-900/20">
          <h3 class="text-body font-semibold mb-2">Implementation Note</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            To create a rounded navbar, use the <code>rounded</code> prop:<br>
            <code>&lt;Navbar variant="primary" rounded&gt;</code>
          </p>
        </div>
      </div>
    </div>

    <!-- Accessibility Information -->
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Accessibility Features</h2>
      <div class="p-4 border border-gray-200 dark:border-gray-700  bg-blue-50 dark:bg-blue-900/20">
        <h3 class="text-body font-semibold mb-2">Keyboard Navigation</h3>
        <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• <kbd class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded">Tab</kbd> - Navigate through navbar links and buttons</li>
          <li>• <kbd class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded">Enter/Space</kbd> - Activate the focused link or button</li>
          <li>• Focus indicators are visible for keyboard users</li>
          <li>• ARIA roles and labels are properly implemented</li>
        </ul>
      </div>
    </div>
  </div>
</template>
