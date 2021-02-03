import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index'
import store from '@store/index'
import '@styles/index.scss'
import plugins from '@/plugins/index.js'

createApp(App).use(router).use(store).use(plugins).mount('#app')
