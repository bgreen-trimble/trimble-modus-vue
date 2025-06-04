import { createApp } from 'vue'
import './styles/index.css'

import App from './App.vue'
import router from './router'
import directives from './directive'

const app = createApp(App)

app.use(router)
app.use(directives)
app.mount('#app')
