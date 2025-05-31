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

const darkMode = computed({
    get: () => isDark.value,
    set: (value: boolean) => setDarkMode(value)
})

// Mobile nav state
const isNavOpen = ref(false)


const toggleDarkMode = () => {
    console.log('Toggling dark mode')
    darkMode.value = !darkMode.value
}

</script>

<template>
    <div class="min-h-screen min-w-screen bg-tm-white text-tm-trimble-gray dark:bg-tm-gray-10 dark:text-tm-gray-light">
        <nav class="p-4 fixed w-64 h-full">
            <div class="mb-8 flex items-center justify-between">
                <h2 class="text-tm-trimble-blue  dark:text-tm-gray-light">
                    Modus Vue
                </h2>
            </div>
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <button @click="toggleDarkMode"
                        class="w-full px-4 py-2 text-left rounded-lg">
                        <span>Dark Mode </span><span class="font-tm-bold">{{ isDark ? "On" : "Off" }}</span>
                    </button>
                </div>

                <RouterLink v-for="route in routes" :key="route.path" :to="route.path"
                    class="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 "
                    :class="{ 'bg-gray-200 dark:bg-gray-700': $route.path === route.path }">
                    {{route.path.substring(1).split('-').filter(word => word.toUpperCase() !== "VIEW").map(word => word.charAt(0).toUpperCase() +
                        word.slice(1)).join(' ')}}
                </RouterLink>
            </div>
        </nav>
        <main class="ml-64 p-8 ">
            <RouterView />
        </main>
    </div>
</template>

<style>
/* Global styles are imported from style.css */
</style>
