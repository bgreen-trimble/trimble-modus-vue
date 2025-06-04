<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@/components'

// Switch states for demonstration
const basicSwitch = ref(false)
const enabledSwitch = ref(true)
const disabledSwitch = ref(false)
const disabledCheckedSwitch = ref(true)

// Settings panel switches
const wifiEnabled = ref(true)
const bluetoothEnabled = ref(false)
const notificationsEnabled = ref(true)
const darkModeEnabled = ref(false)

// Size demonstration switches
const smallSwitch1 = ref(false)
const smallSwitch2 = ref(true)
const smallDisabled = ref(false)

// Medium switches (default)
const mediumSwitch1 = ref(false)
const mediumSwitch2 = ref(true)
const mediumDisabled = ref(false)

// Large switches
const largeSwitch1 = ref(false)
const largeSwitch2 = ref(true)
const largeDisabled = ref(false)
</script>

<template>
  <main class="space-y-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 mb-2">Switch</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Demonstrating the Trimble Modus Switch component with various states, sizes, and dark mode support.
        </p>
      </div>
    </div>

    <div class="space-y-6">
      <!-- Basic Switches -->
      <div class="space-y-4">
        <h2 class="tm-h2">Basic Switches</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="tm-h3 mb-3">Default Switch</h3>
            <div class="mb-3">
              <Switch
                v-model="basicSwitch"
                label="Basic toggle"
              />
            </div>
            <p class="text-xs text-gray-500">State: {{ basicSwitch ? 'On' : 'Off' }}</p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Checked Switch</h3>
            <div class="mb-3">
              <Switch
                v-model="enabledSwitch"
                label="Pre-enabled toggle"
              />
            </div>
            <p class="text-xs text-gray-500">State: {{ enabledSwitch ? 'On' : 'Off' }}</p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Disabled Switch</h3>
            <div class="mb-3">
              <Switch
                v-model="disabledSwitch"
                label="Disabled toggle"
                disabled
              />
            </div>
            <p class="text-xs text-gray-500">State: Disabled (Off)</p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Disabled Checked</h3>
            <div class="mb-3">
              <Switch
                v-model="disabledCheckedSwitch"
                label="Disabled checked"
                disabled
              />
            </div>
            <p class="text-xs text-gray-500">State: Disabled (On)</p>
          </div>
        </div>
      </div>

      <!-- Settings Panel Example -->
      <div class="space-y-6">
        <h2 class="text-lg font-semibold">Settings Panel Example</h2>

        <!-- Full-width Settings Dashboard -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <!-- Settings Controls Panel -->
            <div class="lg:col-span-1">
              <div class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm">
                <h3 class="text-title font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Device Settings
                </h3>
                <div class="space-y-6">
                  <div class="space-y-1">
                    <Switch
                      v-model="wifiEnabled"
                      label="Wi-Fi Connection"
                    />
                    <p class="text-caption text-gray-500 dark:text-gray-400 ml-1">Enable wireless network connectivity</p>
                  </div>
                  <div class="space-y-1">
                    <Switch
                      v-model="bluetoothEnabled"
                      label="Bluetooth"
                    />
                    <p class="text-caption text-gray-500 dark:text-gray-400 ml-1">Connect to nearby devices</p>
                  </div>
                  <div class="space-y-1">
                    <Switch
                      v-model="notificationsEnabled"
                      label="Push Notifications"
                    />
                    <p class="text-caption text-gray-500 dark:text-gray-400 ml-1">Receive app alerts and updates</p>
                  </div>
                  <div class="space-y-1">
                    <Switch
                      v-model="darkModeEnabled"
                      label="Dark Mode Theme"
                    />
                    <p class="text-caption text-gray-500 dark:text-gray-400 ml-1">Use dark color scheme</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Size Comparison -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Size Comparison</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Small Size -->
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Small Size</h3>
            <div class="flex flex-col items-center space-y-4">
              <Switch
                v-model="smallSwitch1"
                label="Small default"
                size="small"
              />
              <Switch
                v-model="smallSwitch2"
                label="Small checked"
                size="small"
              />
              <Switch
                v-model="smallDisabled"
                label="Small disabled"
                size="small"
                disabled
              />
            </div>
            <div class="mt-4 text-xs text-gray-500">
              <p>Dimensions: 12px × 26px</p>
              <p>Thumb: 8px</p>
            </div>
          </div>

          <!-- Medium Size -->
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Medium Size (Default)</h3>
            <div class="flex flex-col items-center space-y-4">
              <Switch
                v-model="mediumSwitch1"
                label="Medium default"
                size="medium"
              />
              <Switch
                v-model="mediumSwitch2"
                label="Medium checked"
                size="medium"
              />
              <Switch
                v-model="mediumDisabled"
                label="Medium disabled"
                size="medium"
                disabled
              />
            </div>
            <div class="mt-4 text-xs text-gray-500">
              <p>Dimensions: 16px × 36px</p>
              <p>Thumb: 12px</p>
            </div>
          </div>

          <!-- Large Size -->
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center">
            <h3 class="text-body font-semibold mb-3">Large Size (Extrapolated)</h3>
            <div class="flex flex-col items-center space-y-4">
              <Switch
                v-model="largeSwitch1"
                label="Large default"
                size="large"
              />
              <Switch
                v-model="largeSwitch2"
                label="Large checked"
                size="large"
              />
              <Switch
                v-model="largeDisabled"
                label="Large disabled"
                size="large"
                disabled
              />
            </div>
            <div class="mt-4 text-xs text-gray-500">
              <p>Dimensions: 20px × 46px</p>
              <p>Thumb: 16px</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Switch without labels -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Switches without Labels</h2>
        <div class="flex gap-4 items-center">
          <div class="flex items-center gap-2">
            <span class="text-sm">Toggle 1:</span>
            <Switch v-model="basicSwitch" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm">Toggle 2:</span>
            <Switch v-model="enabledSwitch" size="small" />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm">Disabled:</span>
            <Switch v-model="disabledSwitch" disabled />
          </div>
        </div>
      </div>

      <!-- Dark Mode Testing -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Dark Mode Testing</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Toggle dark mode using the button in the header to see how all switch variants adapt
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col items-center space-y-4">
            <h3 class="text-lg font-semibold">Medium Switches</h3>
            <div class="flex flex-col items-center space-y-4">
              <Switch v-model="basicSwitch" label="Unchecked switch" />
              <Switch v-model="enabledSwitch" label="Checked switch" />
              <Switch v-model="disabledSwitch" label="Disabled unchecked" disabled />
              <Switch v-model="disabledCheckedSwitch" label="Disabled checked" disabled />
            </div>
          </div>
          <div class="flex flex-col items-center space-y-4">
            <h3 class="text-lg font-semibold">Small Switches</h3>
            <div class="flex flex-col items-center space-y-4">
              <Switch v-model="smallSwitch1" label="Small unchecked" size="small" />
              <Switch v-model="smallSwitch2" label="Small checked" size="small" />
              <Switch v-model="smallDisabled" label="Small disabled" size="small" disabled />
            </div>
          </div>
        </div>
      </div>

      <!-- Accessibility Information -->
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Accessibility Features</h2>
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <h3 class="text-body font-semibold mb-2">Keyboard Navigation</h3>
          <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• <kbd class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded">Tab</kbd> - Navigate to switch</li>
            <li>• <kbd class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded">Space</kbd> or <kbd class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded">Enter</kbd> - Toggle switch</li>
            <li>• Focus indicators are visible for keyboard users</li>
            <li>• Screen readers will announce the switch state and label</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
