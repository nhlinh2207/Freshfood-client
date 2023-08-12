import App from './App.vue'
import { createApp } from 'vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/index.css'
import './assets/css/responsive.css'
import './assets/css/base.css'
import './assets/css/chatbox.css'

var app = createApp(App)

app.use(router)
// app.use(store)

app.mount('#app')