<script setup lang="ts">
import { Button } from '@/components'
</script>

<template>
  <main class="space-y-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 tm-font-bold mb-2">Button Component Showcase</h1>
        <p class="">
          Demonstrating the Trimble Modus Button component with various styles, severities, and dark mode support.
        </p>
      </div>
    </div>

    <div class="space-y-6">
      <!-- Filled buttons (default variant) -->
      <div class="space-y-2">
        <h2 class="tm-h2">Filled Buttons</h2>
        <div class="flex gap-2 flex-wrap">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Warning" severity="warning" />
          <Button label="Danger" severity="danger" />
        </div>
      </div>

      <!-- Outlined buttons -->
      <div class="space-y-2">
        <h2 class="tm-h2">Outlined Buttons</h2>
        <div class="flex gap-2 flex-wrap">
          <Button label="Primary Outlined" variant="outlined" />
          <Button label="Secondary Outlined" variant="outlined" severity="secondary" />
          <Button label="Success Outlined" variant="outlined" severity="success" />
          <Button label="Warning Outlined" variant="outlined" severity="warning" />
          <Button label="Danger Outlined" variant="outlined" severity="danger" />
        </div>
      </div>

      <!-- Text buttons -->
      <div class="space-y-2">
        <h2 class="tm-h2">Text Buttons</h2>
        <div class="flex gap-2 flex-wrap">
          <Button label="Primary Text" variant="text" />
          <Button label="Secondary Text" variant="text" severity="secondary" />
          <Button label="Success Text" variant="text" severity="success" />
          <Button label="Warning Text" variant="text" severity="warning" />
          <Button label="Danger Text" variant="text" severity="danger" />
        </div>
      </div>

      <!-- Buttons with icons -->
      <div class="space-y-2">
        <h2 class="tm-h2">Buttons with Icons</h2>
        <div class="flex gap-2 flex-wrap">
          <Button label="Add Item" icon="add" />
          <Button label="Open" icon="folder_open" severity="secondary" variant="outlined" />
          <Button label="Delete" icon="delete" severity="danger" variant="text" />
        </div>
      </div>

      <!-- Icon only buttons -->
      <div class="space-y-2">
        <h2 class="tm-h2">Icon Only Buttons</h2>
        <div class="flex gap-2 flex-wrap">
          <Button icon="add" />
          <Button icon="folder_open" severity="secondary" />
          <Button icon="delete" severity="danger" variant="outlined" />
          <Button icon="settings" variant="text" />
        </div>
      </div>

      <!-- Different sizes -->
      <div class="space-y-2">
        <h2 class="tm-h2">Button Sizes</h2>
        <div class="flex gap-2 flex-wrap items-center">
          <Button label="Small" size="small" />
          <Button label="Medium" size="medium" />
          <Button label="Large" size="large" />
        </div>
      </div>

      <!-- Disabled states -->
      <div class="space-y-2">
        <h2 class="tm-h2">Disabled States</h2>
        <div class="flex gap-2 flex-wrap">
          <Button label="Disabled Primary" disabled />
          <Button label="Disabled Outlined" variant="outlined" disabled />
          <Button label="Disabled Text" variant="text" disabled />
          <Button icon="add" disabled />
        </div>
      </div>

      <!-- Dark Mode Test Section -->
      <div class="space-y-2">
        <h2 class="tm-h2">Dark Mode Testing</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Toggle dark mode using the button in the header to see how all button variants adapt
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <h3>Filled Buttons</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" />
              <Button label="Secondary" severity="secondary" />
              <Button label="Success" severity="success" />
              <Button label="Warning" severity="warning" />
              <Button label="Danger" severity="danger" />
            </div>
          </div>
          <div class="space-y-2">
            <h3>Outlined Buttons</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" variant="outlined" />
              <Button label="Secondary" variant="outlined" severity="secondary" />
              <Button label="Success" variant="outlined" severity="success" />
              <Button label="Warning" variant="outlined" severity="warning" />
              <Button label="Danger" variant="outlined" severity="danger" />
            </div>
          </div>
          <div class="space-y-2">
            <h3>Text Buttons</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" variant="text" />
              <Button label="Secondary" variant="text" severity="secondary" />
              <Button label="Success" variant="text" severity="success" />
              <Button label="Warning" variant="text" severity="warning" />
              <Button label="Danger" variant="text" severity="danger" />
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Disabled States for Dark Mode -->
      <div class="space-y-2">
        <h2 class="tm-h2">Disabled States (All Variants)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <h3>Filled Disabled</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" disabled />
              <Button label="Secondary" severity="secondary" disabled />
              <Button label="Success" severity="success" disabled />
            </div>
          </div>
          <div class="space-y-2">
            <h3>Outlined Disabled</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" variant="outlined" disabled />
              <Button label="Secondary" variant="outlined" severity="secondary" disabled />
              <Button label="Success" variant="outlined" severity="success" disabled />
            </div>
          </div>
          <div class="space-y-2">
            <h3>Text Disabled</h3>
            <div class="flex flex-col gap-2">
              <Button label="Primary" variant="text" disabled />
              <Button label="Secondary" variant="text" severity="secondary" disabled />
              <Button label="Success" variant="text" severity="success" disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
