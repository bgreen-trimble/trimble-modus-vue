import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

// Create the app instance
const app = createApp(App)

// Add the router
app.use(router)

// Check for GitHub Pages redirect
const redirectPath = localStorage.getItem('redirectPath');

// Log for debugging
console.log('Checking for redirect path in localStorage:', redirectPath);

if (redirectPath) {
  console.log('Found redirect path in localStorage:', redirectPath);
  
  // Clear localStorage to prevent redirect loops
  localStorage.removeItem('redirectPath');
  
  // Mount the app first
  app.mount('#app');
  
  // Then navigate to the saved path
  console.log('Navigating to:', redirectPath);
  
  // Short timeout to ensure the app is mounted
  setTimeout(() => {
    router.push(redirectPath).catch(err => {
      console.error('Navigation failed:', err);
      router.push('/');
    });
  }, 100);
} else {
  // No redirect needed, just mount the app
  app.mount('#app');
}
