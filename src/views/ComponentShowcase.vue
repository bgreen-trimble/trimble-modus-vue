<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/buttion/Button.vue';
import Card from '@/components/Card.vue';

const loading = ref(false);

const startLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-8">Trimble Modus Components</h2>
    
    <!-- Button Showcase -->
    <Card class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Buttons</h3>
      
      <div class="space-y-6">
        <!-- Button Variants and Severities -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Button Variants & Severities</h4>
          
          <!-- Filled Buttons -->
          <h5 class="text-sm font-semibold mb-2">Filled Buttons</h5>
          <div class="flex flex-wrap gap-2 mb-4">
            <Button variant="filled" severity="primary">Primary</Button>
            <Button variant="filled" severity="secondary">Secondary</Button>
            <Button variant="filled" severity="success">Success</Button>
            <Button variant="filled" severity="warning">Warning</Button>
            <Button variant="filled" severity="danger">Danger</Button>
          </div>

          <!-- Outlined Buttons -->
          <h5 class="text-sm font-semibold mb-2">Outlined Buttons</h5>
          <div class="flex flex-wrap gap-2 mb-4">
            <Button variant="outlined" severity="primary">Primary</Button>
            <Button variant="outlined" severity="secondary">Secondary</Button>
            <Button variant="outlined" severity="success">Success</Button>
            <Button variant="outlined" severity="warning">Warning</Button>
            <Button variant="outlined" severity="danger">Danger</Button>
          </div>

          <!-- Text Buttons -->
          <h5 class="text-sm font-semibold mb-2">Text Buttons</h5>
          <div class="flex flex-wrap gap-2">
            <Button variant="text" severity="primary">Primary</Button>
            <Button variant="text" severity="secondary">Secondary</Button>
            <Button variant="text" severity="success">Success</Button>
            <Button variant="text" severity="warning">Warning</Button>
            <Button variant="text" severity="danger">Danger</Button>
          </div>
        </div>
        
        <!-- Button Sizes -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Button Sizes</h4>
          <div class="flex flex-wrap items-center gap-2">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>
        
        <!-- Button States -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Button States</h4>
          <div class="flex flex-wrap gap-2">
            <Button disabled>Disabled</Button>
            <Button @click="startLoading">
              {{ loading ? 'Loading...' : 'Click to Load' }}
            </Button>
          </div>
        </div>
        
        <!-- Button with Icons -->
        <div>
          <h4 class="text-lg font-semibold mb-2">Buttons with Icons</h4>
          <div class="flex flex-wrap gap-2">
            <Button icon="add">With Icon</Button>
            <Button icon="settings"></Button>
            <Button icon="delete" severity="danger">Delete</Button>
            <Button icon="check" severity="success">Confirm</Button>
          </div>
        </div>
      </div>
    </Card>
    
    <!-- Card Showcase -->
    <h3 class="text-xl font-semibold mb-4">Cards</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <!-- Default Card -->
      <Card>
        <h4 class="text-lg font-semibold mb-2">Default Card</h4>
        <p class="mb-4">This is a default card with medium padding and shadow.</p>
        <Button variant="filled" severity="primary">Action</Button>
      </Card>
      
      <!-- Primary Card -->
      <Card variant="primary">
        <h4 class="text-lg font-semibold mb-2">Primary Card</h4>
        <p class="mb-4">This is a primary card with the brand color background.</p>
        <Button variant="outlined" severity="primary" class="bg-white/10 border-white text-white">Action</Button>
      </Card>
      
      <!-- Outlined Card -->
      <Card variant="outlined">
        <h4 class="text-lg font-semibold mb-2">Outlined Card</h4>
        <p class="mb-4">This is an outlined card with a border instead of shadow.</p>
        <Button variant="filled" severity="primary">Action</Button>
      </Card>
      
      <!-- Small Padding Card -->
      <Card padding="sm">
        <h4 class="text-lg font-semibold mb-2">Small Padding</h4>
        <p class="mb-2">This card has smaller padding for compact layouts.</p>
        <Button size="small">Action</Button>
      </Card>
      
      <!-- Large Padding Card -->
      <Card padding="lg">
        <h4 class="text-lg font-semibold mb-2">Large Padding</h4>
        <p class="mb-4">This card has larger padding for more spacious layouts.</p>
        <Button>Action</Button>
      </Card>
      
      <!-- Interactive Card -->
      <Card interactive>
        <h4 class="text-lg font-semibold mb-2">Interactive Card</h4>
        <p>This card has hover effects to indicate it's clickable.</p>
        <div class="mt-4 text-xs text-secondary">Hover over me</div>
      </Card>
      
      <!-- Different Shadow Levels -->
      <Card shadow="none" variant="outlined">
        <h4 class="text-lg font-semibold mb-2">No Shadow</h4>
        <p>This card has no shadow, only an outline.</p>
      </Card>
      
      <Card shadow="sm">
        <h4 class="text-lg font-semibold mb-2">Small Shadow</h4>
        <p>This card has a small, subtle shadow.</p>
      </Card>
      
      <Card shadow="lg">
        <h4 class="text-lg font-semibold mb-2">Large Shadow</h4>
        <p>This card has a large shadow for emphasis.</p>
      </Card>
    </div>
    
    <!-- Responsive Component Example -->
    <Card class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Responsive Components</h3>
      
      <div class="flex flex-col md:flex-row md:space-x-4">
        <div class="w-full md:w-1/3 mb-4 md:mb-0">
          <Card interactive class="h-full">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder" class="w-full h-32 object-cover mb-2">
            <h4 class="text-lg font-semibold mb-2">Card Title</h4>
            <p class="text-sm mb-4">This card adjusts its layout based on screen size.</p>
            <Button variant="filled" fullWidth>Full Width Button</Button>
          </Card>
        </div>
        
        <div class="w-full md:w-2/3">
          <Card class="h-full">
            <h4 class="text-lg font-semibold mb-2">Responsive Form</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-semibold mb-1">First Name</label>
                <input type="text" class="w-full p-2 border border-border rounded">
              </div>
              <div>
                <label class="block text-sm font-semibold mb-1">Last Name</label>
                <input type="text" class="w-full p-2 border border-border rounded">
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-semibold mb-1">Email</label>
                <input type="email" class="w-full p-2 border border-border rounded">
              </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:justify-end sm:space-x-2 space-y-2 sm:space-y-0">
              <Button variant="outlined" severity="secondary">Cancel</Button>
              <Button variant="filled" severity="primary">Submit</Button>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  </div>
</template>
