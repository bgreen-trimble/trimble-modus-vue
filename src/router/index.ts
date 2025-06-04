import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Dynamic import of all Vue files in the views directory and its subdirectories
const views = {
  ...import.meta.glob('../views/foundations/*.vue'),
  ...import.meta.glob('../views/components/*.vue')
}

// Convert component file paths to route configurations
const routes: RouteRecordRaw[] = [
  // Explicitly define the home route
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
]

// Add other routes from views
Object.entries(views).forEach(([path, component]) => {
  // Extract the component name from the path (e.g., '../views/foundations/ColorPalette.vue' -> 'ColorPalette')
  const name = path.match(/\.\.\/views\/(?:foundations|components)\/(.*)\.vue$/)?.[1] ?? ''

  // Convert the component name to a URL-friendly path
  const routePath = '/' + name
    .replace(/([A-Z])/g, '-$1')  // Add hyphens before capital letters
    .toLowerCase()                // Convert to lowercase
    .replace(/^-/, '')           // Remove leading hyphen if present

  // Determine the category based on the path
  const category = path.includes('/foundations/') ? 'foundations' : 'components'

  routes.push({
    path: routePath,
    name: name.toLowerCase(),
    component,
    meta: {
      category // Add category metadata for potential use in navigation/layout
    }
  })
})

const router = createRouter({
  // Use the right base path depending on environment
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Add global navigation guards to help with debugging
router.beforeEach((to, from) => {
  console.log(`Router beforeEach: ${from.fullPath} → ${to.fullPath}`);
  return true;
})

router.afterEach((to, from) => {
  console.log(`Router afterEach: Navigation complete to ${to.fullPath}`);
})

export default router
