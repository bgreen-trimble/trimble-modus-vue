import { ref, watch, onMounted, onUnmounted, readonly } from 'vue'

// Global state for dark mode
const isDark = ref(false)
let initialized = false

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  const setDarkMode = (value: boolean) => {
    console.log('Setting dark mode to:', value)
    isDark.value = value
  }

  // Only set up watchers and initialization once
  if (!initialized) {
    initialized = true

    // Watch for changes and update the document class
    watch(isDark, (newValue) => {
      console.log('Dark mode changed:', newValue)
      if (newValue) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
    }, { immediate: true })

    // Initialize from localStorage on mount
    onMounted(() => {
      const stored = localStorage.getItem('darkMode')
      if (stored !== null) {
        isDark.value = stored === 'true'
      } else {
        // Default to system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isDark.value = systemPrefersDark
      }
    })

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        isDark.value = e.matches
      }
    }

    onMounted(() => {
      mediaQuery.addEventListener('change', handleChange)
    })

    // Cleanup listener on unmount
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleChange)
    })
  }

  return {
    isDark: readonly(isDark),
    toggleDarkMode,
    setDarkMode
  }
}
