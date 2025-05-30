<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'

// Get all route names for navigation
const router = useRouter()
const routes = router.getRoutes()
    .filter(route => route.path !== '/') // Exclude root path
    .sort((a, b) => a.path.localeCompare(b.path))

const { isDark, setDarkMode } = useDarkMode()

const darkModeModel = computed({
    get: () => isDark.value,
    set: (value: boolean) => setDarkMode(value)
})

// Mobile nav state
const isNavOpen = ref(false)

// Toggle navigation
const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
}

const toggleDarkMode = () => {
    console.log('Toggling dark mode')
    darkModeModel.value = !darkModeModel.value
}

</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
        <nav class="bg-gray-100 dark:bg-gray-800 p-4 fixed w-64 h-full">
            <div class="mb-8 flex items-center justify-between">
                <RouterLink to="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">
                    Modus Vue
                </RouterLink>
            </div>

            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                <button @click="toggleDarkMode" class="w-full px-4 py-2 text-left rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                    Toggle Dark Mode
                </button>
                </div>

                <RouterLink v-for="route in routes" :key="route.path" :to="route.path"
                    class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    :class="{ 'bg-gray-200 dark:bg-gray-700': $route.path === route.path }">
                    {{route.path.substring(1).split('-').map(word => word.charAt(0).toUpperCase() +
                        word.slice(1)).join(' ') }}
                </RouterLink>
            </div>
        </nav>
        <main class="ml-64 p-8">
            <RouterView />
        </main>
    </div>
</template>

<style>
/* Global styles are imported from style.css */
</style>
