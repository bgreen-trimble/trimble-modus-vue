import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

// Handle redirect from GitHub Pages 404.html
const redirectPath = localStorage.getItem('redirectPath')
if (redirectPath) {
  console.log('Found redirect path:', redirectPath);
  
  // Clear the localStorage item
  localStorage.removeItem('redirectPath')
  
  // Get the actual path and hash
  const path = redirectPath.includes('#') 
    ? redirectPath.split('#')[0] 
    : redirectPath
  
  const hash = redirectPath.includes('#') 
    ? '#' + redirectPath.split('#')[1]
    : ''
    
  // Set the URL but don't navigate yet
  window.history.replaceState(null, '', path + hash)
}

// Create the app instance
const app = createApp(App).use(router)

// Mount the app
app.mount('#app')

// If we had a redirect, let the router handle it after mount
if (redirectPath) {
  // Use a short timeout to ensure the router is ready
  setTimeout(() => {
    const currentPath = window.location.pathname + window.location.search + window.location.hash
    console.log('Navigating to:', currentPath)
    router.replace(currentPath)
  }, 100)
}
