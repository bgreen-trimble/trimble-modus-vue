import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

// Create a simple event bus for communicating with components
type EventCallback = (data?: any) => void;

const eventBus = {
  events: new Map<string, EventCallback[]>(),
  on(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(callback);
  },
  emit(event: string, data?: any) {
    if (this.events.has(event)) {
      this.events.get(event)?.forEach(callback => callback(data));
    }
  }
};

// Create the app instance
const app = createApp(App)

// Add the event bus to global properties
app.config.globalProperties.$eventBus = eventBus;

// Add the router
app.use(router)

// Check for GitHub Pages redirect
const redirectPath = localStorage.getItem('redirectPath');
let shouldNavigate = false;

// Log for debugging
console.log('Checking for redirect path in localStorage:', redirectPath);

if (redirectPath) {
  console.log('Found redirect path in localStorage:', redirectPath);
  
  // Tell our components we're redirecting (they can listen for this event)
  eventBus.emit('startLoading');
  
  // Clear localStorage to prevent redirect loops
  localStorage.removeItem('redirectPath');
  
  // Parse the path and hash from the redirect
  const path = redirectPath.includes('#') 
    ? redirectPath.split('#')[0] 
    : redirectPath;
  
  const hash = redirectPath.includes('#') 
    ? '#' + redirectPath.split('#')[1]
    : '';

  console.log('Parsed redirect - path:', path, 'hash:', hash);
    
  // Set the URL but don't navigate yet
  window.history.replaceState(null, '', path + hash);
  
  // Flag that we should navigate after mount
  shouldNavigate = true;
}

// Mount the app
app.mount('#app');

// Handle navigation after mount if needed
if (shouldNavigate && redirectPath) {
  console.log('------------------------------------');
  console.log('🔄 GITHUB PAGES REDIRECT PROCESS');
  console.log('------------------------------------');
  console.log('1. Processing redirect after app mount');
  console.log('2. Saved redirect path:', redirectPath);
  console.log('3. Current URL:', window.location.href);
  
  // Remove the redirecting class if it was added by fix-gh-pages-paths.js
  document.body.classList.remove('is-redirecting');
  
  // Short timeout to ensure router is ready
  setTimeout(() => {
    // Navigate to the saved path
    console.log('4. Starting router navigation to:', redirectPath);
    router.push(redirectPath)
      .then(() => {
        console.log('5. ✅ Navigation successful!');
        // Let components know loading is complete
        setTimeout(() => {
          console.log('6. Turning off loading state');
          eventBus.emit('stopLoading');
        }, 100); // Small delay to ensure route is fully loaded
      })
      .catch(err => {
        console.error('5. ❌ Router navigation failed:', err);
        console.log('6. Falling back to home route');
        router.push('/');
        // Let components know loading failed but should stop
        eventBus.emit('stopLoading');
      });
  }, 300);
}
