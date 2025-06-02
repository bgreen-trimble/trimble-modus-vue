import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
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
  }
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

// Add a catch-all route to handle 404s - this is important for GitHub Pages
routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  redirect: to => {
    console.log('Catch-all route caught:', to.path);
    return { path: '/' };
  }
})

const router = createRouter({
  // Use the right base path depending on environment
  history: createWebHistory(import.meta.env.BASE_URL || '/trimble-modus-vue/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
