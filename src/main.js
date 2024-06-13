import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import localStoragePlugin from './plugins/localStoragePlugin'
import './theme.css'

createApp(App)
  .use(store)
  .use(router)
  .use(localStoragePlugin)
  .mount('#app')
