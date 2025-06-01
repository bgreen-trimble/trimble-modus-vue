<script setup lang="ts">
import { ref } from 'vue'
import { Navbar, Button } from '@/components'

// Define types for navbar variants
type NavbarVariant = 'light' | 'trimble'

// Add active state tracking for demos
const activeLight = ref('home')
const activeTrimble = ref('dashboard')

// Function to toggle active item
const setActive = (navbar: NavbarVariant, item: string): void => {
  switch (navbar) {
    case 'light':
      activeLight.value = item
      break
    case 'trimble':
      activeTrimble.value = item
      break
  }
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 mb-2">Navbar Component Showcase</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Demonstrating the Trimble Modus Navbar component with light and Trimble variants.
        </p>
      </div>
    </div>

    <!-- Light Navbar Examples -->
    <div class="space-y-6">
      <h2 class="tm-h2">Light Navbar</h2>
      <div class="space-y-8">
        <!-- Small Light Navbar -->
        <div class="space-y-2">
          <h3 class="tm-h3">Small Size</h3>
          <div class="border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Navbar variant="light" size="small">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo.svg" alt="Trimble Logo" class="h-6 mr-2" />
                  App
                </div>
              </template>
              <template #right>
                <Button variant="text" severity="primary" size="small">
                  <template #icon>
                    <span class="modus-icons">notifications</span>
                  </template>
                </Button>
                <Button variant="text" severity="primary" size="small">
                  <template #icon>
                    <span class="modus-icons">search</span>
                  </template>
                </Button>
                <Button size="small" variant="outlined" severity="primary">Sign In</Button>
              </template>
            </Navbar>
          </div>
        </div>

        <!-- Medium Light Navbar -->
        <div class="space-y-2">
          <h3 class="tm-h3">Medium Size (Default)</h3>
          <div class="border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Navbar variant="light">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo.svg" alt="Trimble Logo" class="h-7 mr-2" />
                  Portal
                </div>
              </template>
              <template #right>
                <Button variant="text" severity="primary">
                  <template #icon>
                    <span class="modus-icons">notifications</span>
                  </template>
                </Button>
                <Button variant="text" severity="primary">
                  <template #icon>
                    <span class="modus-icons">settings</span>
                  </template>
                </Button>
                <Button variant="text" severity="primary">Help</Button>
                <Button variant="filled" severity="primary">Get Started</Button>
              </template>
            </Navbar>
          </div>
        </div>
      </div>
    </div>

    <!-- Trimble Navbar Examples -->
    <div class="space-y-6">
      <h2 class="tm-h2">Trimble Navbar</h2>
      <div class="space-y-8">
        <!-- Medium Trimble Navbar -->
        <div class="space-y-2">
          <h3 class="tm-h3">Default Size</h3>
          <div class="border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Navbar variant="trimble">
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-7 mr-2" />
                  Dashboard
                </div>
              </template>
              <template #right>
                <Button variant="text" severity="secondary">
                  <template #icon>
                    <span class="modus-icons">search</span>
                  </template>
                </Button>
                <Button variant="text" severity="secondary">
                  <template #icon>
                    <span class="modus-icons">help</span>
                  </template>
                </Button>
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

        <!-- Large Trimble Navbar -->
        <div class="space-y-2">
          <h3 class="tm-h3">Large Size with Elevation</h3>
          <div class="border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Navbar variant="trimble" size="large" elevated>
              <template #left>
                <div class="tm-navbar-logo">
                  <img src="https://modus.trimble.com/img/trimble-logo-rev.svg" alt="Trimble Logo" class="h-8 mr-3" />
                  Enterprise
                </div>
              </template>
              <template #right>
                <Button variant="text" severity="secondary" size="large">
                  <template #icon>
                    <span class="modus-icons">search</span>
                  </template>
                </Button>
                <Button variant="text" severity="secondary" size="large">
                  <template #icon>
                    <span class="modus-icons">language</span>
                  </template>
                </Button>
                <Button variant="filled" severity="secondary" size="large">Contact Sales</Button>
              </template>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
