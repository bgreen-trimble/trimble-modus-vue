import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

// Handle redirect from GitHub Pages 404.html
const redirectPath = localStorage.getItem('redirectPath')
if (redirectPath) {
  // Clear the localStorage item
  localStorage.removeItem('redirectPath')
  
  // Get the actual path and hash
  const path = redirectPath.includes('#') 
    ? redirectPath.split('#')[0] 
    : redirectPath
  
  const hash = redirectPath.includes('#') 
    ? '#' + redirectPath.split('#')[1]
    : ''
    
  // Navigate to the correct route using router.push after mounting
  window.history.replaceState(null, '', path + hash)
}

createApp(App)
  .use(router)
  .mount('#app')
