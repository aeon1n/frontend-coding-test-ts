import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from '@/router/index.ts'

const app = createApp(App)

initializeRouter(app)

app.mount('#app')
