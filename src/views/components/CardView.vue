<script setup lang="ts">
import { ref } from 'vue'
import { Card, Button } from '@/components'

// Ref for demonstrating interactive behavior
const showNotification = ref(false)

// Function to toggle notification
const toggleNotification = () => {
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 3000)
}
</script>

<template>
  <main class="space-y-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="tm-h1 mb-2">Card</h1>
        <p class="tm-text-body">
          Demonstrating the Trimble Modus Card component with various sizes, and styles.
        </p>
      </div>
    </div>

    <!-- Card Sizes -->
    <section class="space-y-4">
      <h2 class="tm-h2">Card Sizes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Small Card -->
        <Card title="Small Card" size="small">
          <p class="mb-2">This card uses the small size setting with compact spacing.</p>
          <Button size="small">Action</Button>
        </Card>

        <!-- Medium Card (Default) -->
        <Card title="Medium Card" size="medium">
          <p class="mb-4">This is the default medium size card with standard spacing.</p>
          <Button>Action</Button>
        </Card>

        <!-- Large Card -->
        <Card title="Large Card" size="large">
          <p class="mb-4">This card uses the large size setting with more generous spacing.</p>
          <Button size="large">Action</Button>
        </Card>
      </div>
    </section>

    <!-- Shadow Options -->
    <section class="space-y-4">
      <h2 class="tm-h2">Shadow Options</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- No Shadow -->
        <Card title="No Shadow" shadow="none">
          <p>This card has no shadow applied, using only a border.</p>
        </Card>

        <!-- Small Shadow -->
        <Card title="Small Shadow" shadow="level-1">
          <p>This card has a subtle, small shadow effect.</p>
        </Card>

        <!-- Medium Shadow (Default) -->
        <Card title="Medium Shadow" shadow="level-2">
          <p>This is the default medium shadow effect.</p>
        </Card>

        <!-- Large Shadow -->
        <Card title="Large Shadow" shadow="level-3">
          <p>This card has a pronounced, large shadow effect.</p>
        </Card>
      </div>
    </section>

    <!-- Full Width Cards -->
    <section class="space-y-4">
      <h2 class="tm-h2">Full Width Cards</h2>
      <div class="grid grid-cols-1">
        <!-- Full Width Card -->
        <Card title="Full Width Card" fullWidth interactive>
          <p class="mb-4">This card spans the full width of its container instead of using the default max-width.</p>
          <div class="flex justify-between">
            <Button variant="outlined">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </Card>
      </div>
    </section>

    <!-- Card with Header and Footer Slots -->
    <section class="space-y-4">
      <h2 class="tm-h2">Card with Custom Header and Footer</h2>
      <Card class="max-w-2xl">
        <template #header>
          <div class="flex justify-between items-center w-full">
            <h3 class="tm-card-title">Custom Header</h3>
            <Button variant="text" size="small">×</Button>
          </div>
        </template>

        <p class="mb-4">
          This card demonstrates the use of custom header and footer slots for more complex layouts.
          You can place any content in these areas to create flexible card designs.
        </p>
        
        <template #footer>
          <div class="flex justify-end space-x-2">
            <Button variant="outlined" severity="secondary">Cancel</Button>
            <Button>Save</Button>
          </div>
        </template>
      </Card>
    </section>

    <!-- Notification when clicking interactive card -->
    <div v-if="showNotification" class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-md shadow-lg transition-all">
      Card clicked! This is a demonstration of interactive functionality.
    </div>
  </main>
</template>
