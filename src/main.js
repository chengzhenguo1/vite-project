import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index'
import store from '@store/index'
import '@styles/index.scss'

createApp(App).use(router).use(store).mount('#app')
