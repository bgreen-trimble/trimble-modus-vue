<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-8">Trimble Modus Design Elements</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Spacing Showcase -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Spacing Scale</h3>
        
        <div class="space-y-6">
          <div v-for="size in [1, 2, 4, 6, 8, 12, 16, 24]" :key="`space-${size}`" class="flex items-center">
            <div :class="`h-8 bg-primary rounded`" :style="`width: ${size * 0.25}rem`"></div>
            <div class="ml-4">
              <p class="text-base font-semibold">--space-{{ size }}</p>
              <p class="text-xs text-secondary">{{ size * 4 }}px / {{ size * 0.25 }}rem</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Border Radius Showcase -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Border Radius</h3>
        
        <div class="space-y-6">
          <div v-for="(radius, index) in borderRadii" :key="`radius-${index}`" class="flex items-center">
            <div class="w-16 h-16 bg-primary" :style="`border-radius: ${radius.value}`"></div>
            <div class="ml-4">
              <p class="text-base font-semibold">{{ radius.name }}</p>
              <p class="text-xs text-secondary">{{ radius.value }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Shadows Showcase -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Shadows</h3>
        
        <div class="space-y-8">
          <div v-for="(shadow, index) in shadows" :key="`shadow-${index}`" class="flex flex-col">
            <div class="w-full h-20 bg-white rounded-lg" :style="`box-shadow: ${shadow.value}`"></div>
            <div class="mt-2">
              <p class="text-base font-semibold">{{ shadow.name }}</p>
              <p class="text-xs text-secondary">{{ shadow.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Practical Examples -->
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Card Examples -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Card Examples</h3>
        
        <div class="space-y-6">
          <!-- Card with different spacings -->
          <div class="bg-white rounded-lg shadow p-4">
            <h4 class="text-lg font-semibold mb-2">Default Card</h4>
            <p class="text-base mb-4">Uses standard spacing and shadow.</p>
            <div class="flex space-x-2">
              <button class="bg-primary text-white px-4 py-2 rounded">Action</button>
              <button class="border border-secondary text-secondary px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
          
          <!-- Card with larger spacing -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h4 class="text-lg font-semibold mb-4">Spacious Card</h4>
            <p class="text-base mb-6">Uses larger spacing values for a more comfortable layout.</p>
            <div class="flex space-x-4">
              <button class="bg-primary text-white px-6 py-3 rounded-md">Action</button>
              <button class="border border-secondary text-secondary px-6 py-3 rounded-md">Cancel</button>
            </div>
          </div>
          
          <!-- Card with compact spacing -->
          <div class="bg-white rounded shadow-sm p-3">
            <h4 class="text-base font-semibold mb-1">Compact Card</h4>
            <p class="text-xs mb-2">Uses smaller spacing for denser UI.</p>
            <div class="flex space-x-1">
              <button class="bg-primary text-white px-2 py-1 rounded text-xs">Action</button>
              <button class="border border-secondary text-secondary px-2 py-1 rounded text-xs">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Interactive Elements -->
      <div class="bg-light p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Interactive Elements</h3>
        
        <div class="space-y-8">
          <!-- Buttons with different radii -->
          <div class="space-y-2">
            <h4 class="text-base font-semibold">Button Radius Variants</h4>
            <div class="flex flex-wrap gap-2">
              <button class="bg-primary text-white px-4 py-2 rounded-none">Square</button>
              <button class="bg-primary text-white px-4 py-2 rounded">Rounded</button>
              <button class="bg-primary text-white px-4 py-2 rounded-lg">Rounded Lg</button>
              <button class="bg-primary text-white px-4 py-2 rounded-full">Pill</button>
            </div>
          </div>
          
          <!-- Input with focus shadow -->
          <div class="space-y-2">
            <h4 class="text-base font-semibold">Input Focus State</h4>
            <input 
              type="text" 
              placeholder="Click to see focus state" 
              class="w-full p-2 border border-secondary rounded focus:outline-none"
              style="box-shadow: var(--shadow-none); transition: box-shadow 0.2s ease-in-out"
              @focus="$event.target.style.boxShadow = 'var(--shadow-focus)'"
              @blur="$event.target.style.boxShadow = 'var(--shadow-none)'"
            />
          </div>
          
          <!-- Card with hover effect -->
          <div class="space-y-2">
            <h4 class="text-base font-semibold">Card with Hover Effect</h4>
            <div 
              class="p-4 bg-white rounded-lg transition-shadow duration-300 cursor-pointer"
              style="box-shadow: var(--shadow)"
              @mouseenter="$event.target.style.boxShadow = 'var(--shadow-lg)'"
              @mouseleave="$event.target.style.boxShadow = 'var(--shadow)'"
            >
              <p class="text-base">Hover over this card to see shadow change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const borderRadii = ref([
  { name: '--radius-none', value: '0' },
  { name: '--radius-sm', value: '0.125rem' },
  { name: '--radius', value: '0.25rem' },
  { name: '--radius-md', value: '0.375rem' },
  { name: '--radius-lg', value: '0.5rem' },
  { name: '--radius-xl', value: '0.75rem' },
  { name: '--radius-full', value: '9999px' }
])

const shadows = ref([
  { 
    name: '--shadow-sm', 
    value: 'var(--shadow-sm)',
    description: 'Small shadow for subtle depth'
  },
  { 
    name: '--shadow', 
    value: 'var(--shadow)',
    description: 'Default shadow for cards and containers'
  },
  { 
    name: '--shadow-md', 
    value: 'var(--shadow-md)',
    description: 'Medium shadow for raised elements'
  },
  { 
    name: '--shadow-lg', 
    value: 'var(--shadow-lg)',
    description: 'Large shadow for prominent elements'
  },
  { 
    name: '--shadow-focus', 
    value: 'var(--shadow-focus)',
    description: 'Focus state for interactive elements'
  }
])
</script>
