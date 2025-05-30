<script setup lang="ts">
import { ref } from 'vue';

const isDarkMode = ref(document.documentElement.classList.contains('dark'));

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

// Initialize theme from system preference if no saved preference
if (!localStorage.getItem('theme')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  isDarkMode.value = prefersDark;
  document.documentElement.classList.toggle('dark', prefersDark);
}

// Listen for system color scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    isDarkMode.value = e.matches;
    document.documentElement.classList.toggle('dark', e.matches);
  }
});
</script>

<template>
  <button 
    @click="toggleDarkMode" 
    class="dark-mode-toggle"
    :class="{ 'is-dark': isDarkMode }"
    aria-label="Toggle dark mode"
  >
    <svg v-if="!isDarkMode" class="moon-icon" viewBox="0 0 24 24">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
    <svg v-else class="sun-icon" viewBox="0 0 24 24">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
  </button>
</template>

<style>
.dark-mode-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 50%;
  background: var(--tm-color-gray-light);
  color: var(--tm-color-text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dark-mode-toggle:hover {
  background: var(--tm-color-gray-0);
}

.dark-mode-toggle.is-dark {
  background: var(--tm-color-gray-9);
  color: var(--tm-color-yellow);
}

.dark-mode-toggle.is-dark:hover {
  background: var(--tm-color-gray-8);
}

.dark-mode-toggle svg {
  width: 20px;
  height: 20px;
}

/* Remove fill from all paths to ensure proper icon display */
.dark-mode-toggle svg path {
  fill: none;
}
</style>
