<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRouter, type RouteRecordRaw } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
import { Navbar, Button, Menu } from '@/components'
import type { MenuItem } from '@/components/menu/menuitem'

// Get all route names for navigation
const router = useRouter()
const routes = router.getRoutes()
    .filter(route => route.path !== '/') // Exclude root path
    .sort((a, b) => a.path.localeCompare(b.path))

const foundationsMenu = computed((): MenuItem[] => 
    routes
        .filter((route) => route.meta?.category === 'foundations')
        .map((route) => ({
            label: getMenuName(route.path),
            url: route.path
        }))
)

const componentsMenu = computed((): MenuItem[] => 
    routes
        .filter((route) => route.meta?.category === 'components')
        .map((route) => ({
            label: getMenuName(route.path),
            url: route.path
        }))
)

const { isDark, setDarkMode } = useDarkMode()

const darkMode = computed({
    get: () => isDark.value,
    set: (value: boolean) => setDarkMode(value)
})

const isNavOpen = ref(false)

const toggleDarkMode = () => {
    console.log('Toggling dark mode')
    darkMode.value = !darkMode.value
}

const getMenuName = (path: string) => path.substring(1).split('-')
    .filter(word => word.toUpperCase() !== "VIEW")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
</script>

<template>
    <div class="min-h-screen flex bg-tm-white text-tm-trimble-gray dark:bg-tm-gray-10 dark:text-tm-gray-light">
        <!-- Sidebar -->
        <aside class="w-64 h-screen flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
            <!-- Logo area -->
            <Navbar variant="light">
                <template #left>
                    <Button variant="text" severity="secondary">
                        <template #icon>
                            <span class="modus-icons">menu</span>
                        </template>
                    </Button>
                </template>
                <template #right>
                    <Button variant="text" severity="secondary">
                        <template #icon>
                            <span class="modus-icons">notifications</span>
                        </template>
                    </Button>
                </template>
            </Navbar>

            <!-- Navigation area -->
            <nav class="p-4 space-y-6">
                <!-- Navigation groups -->
                <div class="space-y-6">
                    <!-- Foundations section -->
                    <div>
                        <h3 class="tm-h3 uppercase mb-2">Foundations</h3>
                        <Menu :model="foundationsMenu" class="tm-nav-menu" />
                    </div>

                    <!-- Components section -->
                    <div>
                        <h3 class="tm-h3 uppercase mb-2">Components</h3>
                        <Menu :model="componentsMenu" class="tm-nav-menu" />
                    </div>
                </div>

                <!-- Dark mode toggle -->
                <div class="absolute bottom-0 left-0 w-full bg-inherit">
                    <button @click="toggleDarkMode"
                        class="w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <span>Dark Mode </span>
                        <span class="font-tm-bold">{{ isDark ? "On" : "Off" }}</span>
                    </button>
                </div>
            </nav>
        </aside>

        <!-- Main content -->
        <div class="flex-1 flex flex-col h-screen">
            <!-- Title bar -->
            <header>
                <Navbar variant="light">
                    <template #left>
                        <Button variant="text" severity="secondary">
                            <template #icon>
                                <span class="modus-icons">menu</span>
                            </template>
                        </Button>
                        <Button variant="text" severity="secondary">
                            <template #icon>
                                <span class="modus-icons">trimble_logo</span>
                            </template>
                        </Button>
                            <span class="text-2xl">Modus Vue</span>
                    </template>
                    <template #right>
                        <Button variant="text" severity="secondary">
                            <template #icon>
                                <span class="modus-icons">settings</span>
                            </template>
                        </Button>
                    </template>
                </Navbar>
            </header>

            <!-- Main content area -->
            <main class="flex-1 p-6 overflow-auto">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style>
/* Add styles for navigation menu */
.tm-nav-menu {
    /* Remove shadow from sidebar navigation menus */
    --shadow-tm-menu: none;
}

.tm-nav-menu :deep(.tm-menu-link) {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0;
}

.tm-nav-menu :deep(.tm-menu-link:hover) {
    background-color: rgb(243, 244, 246); /* bg-gray-100 */
}

.dark .tm-nav-menu :deep(.tm-menu-link:hover) {
    background-color: rgb(55, 65, 81); /* dark:bg-gray-700 */
}

.tm-nav-menu :deep(.router-link-active) {
    background-color: rgb(243, 244, 246); /* bg-gray-100 */
}

.dark .tm-nav-menu :deep(.router-link-active) {
    background-color: rgb(55, 65, 81); /* dark:bg-gray-700 */
}
</style>
