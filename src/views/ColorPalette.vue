<template>
  <div class="p-4 bg-white dark:bg-gray-900 text-gray-dark dark:text-white">
    <h2 class="text-2xl font-bold mb-4">Trimble Modus Color Palette</h2>
    
    <h3 class="text-xl font-bold mb-3">Primary Colors</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Primary Colors -->
      <div class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div class="h-24 bg-primary"></div>
        <div class="p-4">
          <h3 class="font-medium">Primary (Trimble Blue)</h3>
          <p class="text-sm text-secondary dark:text-gray-300">#0063a3</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div class="h-24 bg-primary-dark"></div>
        <div class="p-4">
          <h3 class="font-medium">Primary Dark</h3>
          <p class="text-sm text-secondary dark:text-gray-300">#004f83</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div class="h-24 bg-primary-light"></div>
        <div class="p-4">
          <h3 class="font-medium">Primary Light</h3>
          <p class="text-sm text-secondary dark:text-gray-300">#217cbb</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div class="h-24 bg-primary-pale"></div>
        <div class="p-4">
          <h3 class="font-medium">Primary Pale</h3>
          <p class="text-sm text-secondary dark:text-gray-300">#dcedf9</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Semantic Colors</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Semantic Colors -->
      <div class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800">
        <div class="h-24 bg-success"></div>
        <div class="p-4">
          <h3 class="font-medium">Success</h3>
          <p class="text-sm text-secondary dark:text-gray-300">#006638</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-info"></div>
        <div class="p-4">
          <h3 class="font-medium">Info</h3>
          <p class="text-sm text-secondary">#019aeb</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-warning"></div>
        <div class="p-4">
          <h3 class="font-medium">Warning</h3>
          <p class="text-sm text-secondary">#e49325</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-danger"></div>
        <div class="p-4">
          <h3 class="font-medium">Danger</h3>
          <p class="text-sm text-secondary">#da212c</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Highlight & Special Colors</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Special Colors -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-yellow"></div>
        <div class="p-4">
          <h3 class="font-medium">Trimble Yellow</h3>
          <p class="text-sm text-secondary">#fbad26</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #019aeb;"></div>
        <div class="p-4">
          <h3 class="font-medium">Highlight Blue</h3>
          <p class="text-sm text-secondary">#019aeb</p>
          <p class="text-xs text-secondary mt-1">(Dark Mode Primary)</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Neutral Progression</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Gray Scale -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-dark"></div>
        <div class="p-4 bg-dark">
          <h3 class="font-medium text-white">Trimble Gray</h3>
          <p class="text-sm text-gray-light">#252a2e</p>
        </div>
      </div>

      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-gray-10"></div>
        <div class="p-4 bg-gray-10">
          <h3 class="font-medium text-white">Gray 10</h3>
          <p class="text-sm text-gray-light">#171c1e</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-gray-9"></div>
        <div class="p-4 bg-gray-9">
          <h3 class="font-medium text-white">Gray 9</h3>
          <p class="text-sm text-gray-light">#353a40</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-gray-6"></div>
        <div class="p-4">
          <h3 class="font-medium">Gray 6</h3>
          <p class="text-sm text-secondary">#6a6e79</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-gray-3"></div>
        <div class="p-4">
          <h3 class="font-medium">Gray 3</h3>
          <p class="text-sm text-secondary">#a3a6b1</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24 bg-gray-1"></div>
        <div class="p-4">
          <h3 class="font-medium">Gray 1</h3>
          <p class="text-sm text-secondary">#cbcdd6</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md border border-gray-200">
        <div class="h-24 bg-gray-light"></div>
        <div class="p-4">
          <h3 class="font-medium">Gray Light</h3>
          <p class="text-sm text-secondary">#f1f1f6</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md border border-gray-200">
        <div class="h-24 bg-white"></div>
        <div class="p-4">
          <h3 class="font-medium">White</h3>
          <p class="text-sm text-secondary">#ffffff</p>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold mb-3">Blue Progression</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Blue Progression -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #0e416c;"></div>
        <div class="p-4">
          <h3 class="font-medium">Blue Dark</h3>
          <p class="text-sm text-secondary">#0e416c</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #0063a3;"></div>
        <div class="p-4">
          <h3 class="font-medium">Trimble Blue</h3>
          <p class="text-sm text-secondary">#0063a3</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #217cbb;"></div>
        <div class="p-4">
          <h3 class="font-medium">Blue Light</h3>
          <p class="text-sm text-secondary">#217cbb</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #dcedf9;"></div>
        <div class="p-4">
          <h3 class="font-medium">Blue Pale</h3>
          <p class="text-sm text-secondary">#dcedf9</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Green Progression</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Green Progression -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #006638;"></div>
        <div class="p-4">
          <h3 class="font-medium">Green Dark</h3>
          <p class="text-sm text-secondary">#006638</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #1e8a44;"></div>
        <div class="p-4">
          <h3 class="font-medium">Green</h3>
          <p class="text-sm text-secondary">#1e8a44</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #4ea646;"></div>
        <div class="p-4">
          <h3 class="font-medium">Green Light</h3>
          <p class="text-sm text-secondary">#4ea646</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #e0eccf;"></div>
        <div class="p-4">
          <h3 class="font-medium">Green Pale</h3>
          <p class="text-sm text-secondary">#e0eccf</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Red Progression</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Red Progression -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #ab1f26;"></div>
        <div class="p-4">
          <h3 class="font-medium">Red Dark</h3>
          <p class="text-sm text-secondary">#ab1f26</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #da212c;"></div>
        <div class="p-4">
          <h3 class="font-medium">Red</h3>
          <p class="text-sm text-secondary">#da212c</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #e86363;"></div>
        <div class="p-4">
          <h3 class="font-medium">Red Light</h3>
          <p class="text-sm text-secondary">#e86363</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #fbd4d7;"></div>
        <div class="p-4">
          <h3 class="font-medium">Red Pale</h3>
          <p class="text-sm text-secondary">#fbd4d7</p>
        </div>
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3">Yellow Progression</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Yellow Progression -->
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #e49325;"></div>
        <div class="p-4">
          <h3 class="font-medium">Yellow Dark</h3>
          <p class="text-sm text-secondary">#e49325</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #fbad26;"></div>
        <div class="p-4">
          <h3 class="font-medium">Trimble Yellow</h3>
          <p class="text-sm text-secondary">#fbad26</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #fec157;"></div>
        <div class="p-4">
          <h3 class="font-medium">Yellow Light</h3>
          <p class="text-sm text-secondary">#fec157</p>
        </div>
      </div>
      
      <div class="rounded-lg overflow-hidden shadow-md">
        <div class="h-24" style="background-color: #fff5e4;"></div>
        <div class="p-4">
          <h3 class="font-medium">Yellow Pale</h3>
          <p class="text-sm text-secondary">#fff5e4</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script needed
</script>
