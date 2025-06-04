<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter, type RouteRecordRaw } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode'
import { Navbar, Button, Menu } from '@/components'
import type { MenuItem } from '@/components/menu/menuitem'

// Get all route names for navigation
const router = useRouter()
const routes = router.getRoutes()
    .filter(route => route.path !== '/') // Exclude root path
    .sort((a, b) => a.path.localeCompare(b.path))

// Log route changes for debugging GitHub Pages redirects
router.beforeEach((to, from) => {
    console.log(`Route change: ${from.path} → ${to.path}`)
    return true
})

// Check for GitHub Pages redirect on mount
onMounted(() => {
    const redirectPath = localStorage.getItem('redirectPath')
    if (redirectPath) {
        console.log('App mounted with redirect path:', redirectPath)
    }
})

// Create menu items for navigation
const foundationsMenu = computed((): MenuItem[] =>
    routes
        .filter((route) => route.meta?.category === 'foundations' && !route.meta?.hidden)
        .map((route) => {
            const resolved = router.resolve(route.path)
            return {
                label: getMenuName(route.path),
                url: resolved.href
            }
        })
)

const componentsMenu = computed((): MenuItem[] =>
    routes
        .filter((route) => (route.meta?.category === 'components' || route.meta?.category === 'directives') && !route.meta?.hidden)
        .map((route) => {
            const resolved = router.resolve(route.path)
            return {
                label: getMenuName(route.path),
                url: resolved.href
            }
        })
)

const { isDark, setDarkMode } = useDarkMode()

const darkMode = computed({
    get: () => isDark.value,
    set: (value: boolean) => setDarkMode(value)
})

const isNavOpen = ref(true)
const settingsMenuRef = ref()

// Function to toggle sidebar visibility
const toggleSidebar = () => {
    isNavOpen.value = !isNavOpen.value
}

// Create settings menu items
const settingsMenuItems = computed((): MenuItem[] => [
    {
        label: isDark.value ? 'Light Mode' : 'Dark Mode',
        icon: isDark.value ? 'sun' : 'moon',
        command: () => toggleDarkMode()
    }
])

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
    <div class="min-h-screen flex flex-col bg-tm-white text-tm-trimble-gray dark:bg-tm-gray-10 dark:text-tm-gray-light">
        <!-- Top Navbar -->
        <header>
            <Navbar variant="light">
                <template #left>
                    <Button variant="text" severity="secondary" icon="menu" @click="toggleSidebar"
                        aria-label="Toggle navigation menu" :aria-expanded="isNavOpen" aria-controls="main-nav">
                    </Button>
                    <button type="button"
                        class="flex items-center gap-2 text-tm-trimble-gray border-0 bg-transparent cursor-pointer dark:text-tm-gray-light focus:outline-none "
                        @click.prevent="router.push('/')" aria-label="Go to home page">
                        <i class="modus-icons" aria-hidden="true">trimble_logo</i>
                        <span class="text-2xl">Trimble Modus Vue</span>
                    </button>
                </template>
                <template #right>
                    <Button variant="text" severity="secondary" icon="settings" @click="settingsMenuRef.toggle($event)"
                        aria-label="Toggle settings menu" :aria-expanded="!!settingsMenuRef?.visible"
                        aria-haspopup="true">
                    </Button>
                    <Menu ref="settingsMenuRef" :model="settingsMenuItems" popup />
                </template>
            </Navbar>
        </header>

        <!-- Main layout - Sidebar and Content -->
        <div class="flex flex-1 overflow-hidden">
            <!-- Sidebar with improved transition -->
            <aside
                class="border-r border-tm-gray-2 dark:border-tm-gray-10 overflow-hidden transition-all duration-300 ease-in-out"
                :class="isNavOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'" role="complementary"
                aria-label="Main navigation">
                <!-- Navigation area with no opacity transition to prevent flicker -->
                <nav id="main-nav" class="p-4 space-y-6 w-48" aria-label="Main menu">
                    <!-- Navigation groups -->
                    <div class="space-y-6">
                        <!-- Foundations section -->
                        <div>
                            <h3 id="foundations-heading" class="tm-h3 uppercase mb-2">Foundations</h3>
                            <Menu :model="foundationsMenu" class="tm-nav-menu" aria-labelledby="foundations-heading"
                                role="menu" />
                        </div>

                        <!-- Components section -->
                        <div>
                            <h3 id="components-heading" class="tm-h3 uppercase mb-2">Components</h3>
                            <Menu :model="componentsMenu" class="tm-nav-menu" aria-labelledby="components-heading"
                                role="menu" />
                        </div>
                    </div>
                </nav>
            </aside>

            <!-- Main content area with transition -->
            <main class="flex-1 p-6 overflow-auto transition-all duration-300 ease-in-out focus:outline-none"
                tabindex="-1" role="main" aria-label="Main content">
                <RouterView />
            </main>
        </div>

    </div>
</template>

<style>
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
    background-color: rgb(243, 244, 246);
    /* bg-gray-100 */
}

.dark .tm-nav-menu :deep(.tm-menu-link:hover) {
    background-color: rgb(55, 65, 81);
    /* dark:bg-gray-700 */
}

.tm-nav-menu :deep(.router-link-active) {
    background-color: rgb(243, 244, 246);
    /* bg-gray-100 */
}

.dark .tm-nav-menu :deep(.router-link-active) {
    background-color: rgb(55, 65, 81);
    /* dark:bg-gray-700 */
}

/* Ensure the app takes full viewport height */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Sidebar transitions */
aside {
    transform-origin: left;
    will-change: width, opacity;
}

aside.w-0 {
    transform: translateX(-10px);
}

aside.w-48 {
    transform: translateX(0);
}
</style>
