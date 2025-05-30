<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-8">Responsive Design</h2>
    
    <div class="mb-8 bg-light p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Breakpoints</h3>
      
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse">
          <thead>
            <tr class="border-b border-secondary/20">
              <th class="py-2 px-4 text-left">Breakpoint</th>
              <th class="py-2 px-4 text-left">Size</th>
              <th class="py-2 px-4 text-left">Tailwind Class</th>
              <th class="py-2 px-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(breakpoint, index) in breakpoints" :key="`breakpoint-${index}`" class="border-b border-secondary/10">
              <td class="py-2 px-4 font-semibold">{{ breakpoint.name }}</td>
              <td class="py-2 px-4">{{ breakpoint.size }}</td>
              <td class="py-2 px-4"><code>{{ breakpoint.class }}</code></td>
              <td class="py-2 px-4">{{ breakpoint.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Responsive Layout Example -->
    <div class="mb-8 bg-light p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Responsive Layout Example</h3>
      <p class="mb-4 text-base">Resize your browser window to see how this layout adapts to different screen sizes.</p>
      
      <div class="bg-white p-4 rounded-lg shadow mb-4">
        <h4 class="text-lg font-semibold mb-2">Current Breakpoint:</h4>
        <div class="grid grid-cols-4 gap-2 text-center">
          <div class="bg-primary text-white p-2 rounded sm:hidden">xs</div>
          <div class="bg-primary/80 text-white p-2 rounded hidden sm:block md:hidden">sm</div>
          <div class="bg-primary/60 text-white p-2 rounded hidden md:block lg:hidden">md</div>
          <div class="bg-primary/40 text-white p-2 rounded hidden lg:block xl:hidden">lg</div>
          <div class="bg-primary/20 text-dark p-2 rounded hidden xl:block">xl</div>
        </div>
      </div>
      
      <!-- Card Grid Example -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="i in 4" :key="`card-${i}`" class="bg-white p-4 rounded-lg shadow-sm">
          <h5 class="font-semibold mb-2">Card {{ i }}</h5>
          <p class="text-sm">This grid layout changes based on screen size.</p>
        </div>
      </div>
    </div>
    
    <!-- Mobile-First Approach -->
    <div class="mb-8 bg-light p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Mobile-First Approach</h3>
      <p class="mb-4 text-base">Trimble Modus follows a mobile-first design approach. Start with the mobile layout and then enhance for larger screens.</p>
      
      <!-- Mobile First Example -->
      <div class="bg-white rounded-lg shadow">
        <!-- Mobile-optimized header (stacked) -->
        <div class="p-4 border-b border-secondary/10">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4 class="text-lg font-semibold mb-2 sm:mb-0">Product Information</h4>
            <div class="flex space-x-2">
              <button class="bg-primary text-white px-3 py-1 rounded text-sm">Edit</button>
              <button class="border border-secondary text-secondary px-3 py-1 rounded text-sm">Delete</button>
            </div>
          </div>
        </div>
        
        <!-- Content area (stacked on mobile, side-by-side on larger screens) -->
        <div class="p-4 flex flex-col md:flex-row md:space-x-4">
          <!-- Product image (full width on mobile, fixed width on larger screens) -->
          <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <div class="bg-light h-48 rounded flex items-center justify-center">
              <p class="text-secondary">Product Image</p>
            </div>
          </div>
          
          <!-- Product details -->
          <div class="flex-1">
            <h5 class="font-semibold mb-2">Trimble Modus Widget</h5>
            <p class="text-base mb-4">This example shows how content can be reorganized based on screen size. On mobile, elements stack vertically for better readability. On larger screens, they display side-by-side for better space utilization.</p>
            
            <!-- Specs (1 column on mobile, 2 columns on tablet+) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <div class="p-2 bg-light rounded">
                <span class="text-xs text-secondary">Dimensions:</span>
                <p class="text-sm">10" x 5" x 2"</p>
              </div>
              <div class="p-2 bg-light rounded">
                <span class="text-xs text-secondary">Weight:</span>
                <p class="text-sm">1.5 lbs</p>
              </div>
              <div class="p-2 bg-light rounded">
                <span class="text-xs text-secondary">Color:</span>
                <p class="text-sm">Blue</p>
              </div>
              <div class="p-2 bg-light rounded">
                <span class="text-xs text-secondary">Material:</span>
                <p class="text-sm">Aluminum</p>
              </div>
            </div>
            
            <!-- Footer actions (full width buttons on mobile, inline on larger screens) -->
            <div class="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <button class="bg-primary text-white px-4 py-2 rounded w-full sm:w-auto">Add to Cart</button>
              <button class="border border-secondary text-secondary px-4 py-2 rounded w-full sm:w-auto">Save for Later</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const breakpoints = ref([
  {
    name: 'xs',
    size: '< 640px',
    class: '(default)',
    description: 'Mobile phones and small devices'
  },
  {
    name: 'sm',
    size: '≥ 640px',
    class: 'sm:',
    description: 'Small tablets and large mobile phones'
  },
  {
    name: 'md',
    size: '≥ 768px',
    class: 'md:',
    description: 'Tablets and small laptops'
  },
  {
    name: 'lg',
    size: '≥ 1024px',
    class: 'lg:',
    description: 'Laptops and desktops'
  },
  {
    name: 'xl',
    size: '≥ 1280px',
    class: 'xl:',
    description: 'Large desktops and monitors'
  },
  {
    name: '2xl',
    size: '≥ 1536px',
    class: '2xl:',
    description: 'Extra large displays'
  }
])
</script>
