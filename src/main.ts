import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import roteador from './roteador'
import { key, store } from './store'

createApp(App)
.use(roteador)
.use(store, key)
.mount('#app')
