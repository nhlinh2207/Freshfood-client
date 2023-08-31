import App from './App.vue'
import { createApp } from 'vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from '@/lang/i18n';

import mitt from 'mitt';


const emitter = mitt();
var app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(router)
app.use(i18n)
// app.use(store)

app.mount('#app')