import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

// Create the app instance first
const app = createApp(App).use(router)

// Now handle redirect from GitHub Pages 404.html
const redirectPath = localStorage.getItem('redirectPath')
console.log('Checking for redirect path in localStorage:', redirectPath);
if (redirectPath) {
  console.log('Found redirect path in localStorage:', redirectPath);
  
  // Clear the localStorage item to prevent redirect loops
  localStorage.removeItem('redirectPath')
  
  // Get the actual path and hash
  const path = redirectPath.includes('#') 
    ? redirectPath.split('#')[0] 
    : redirectPath
  
  const hash = redirectPath.includes('#') 
    ? '#' + redirectPath.split('#')[1]
    : ''

  console.log('Parsed redirect - path:', path, 'hash:', hash);
    
  // Set the URL but don't navigate yet
  window.history.replaceState(null, '', path + hash)
}

// Mount the app
app.mount('#app')

// If we had a redirect, let the router handle it after mount
if (redirectPath) {
  console.log('Processing redirect after mount...');
  
  // Use a short timeout to ensure the router is ready
  setTimeout(() => {
    // The redirectPath should already be in the correct format for the router
    console.log('Router navigation to:', redirectPath);
    router.push(redirectPath).catch(err => {
      console.error('Router navigation failed:', err);
      console.log('Falling back to home route');
      router.push('/');
    });
  }, 300);
}
