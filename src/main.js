import App from './App.vue'
import { createApp } from 'vue';
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from '@/lang/i18n';
import 'vue3-toastify/dist/index.css';
import mitt from 'mitt';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store';
import { commonMixin } from '@/mixins/commonMixins';
import VueApexCharts from "vue3-apexcharts";

const emitter = mitt();
var app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.mixin(commonMixin)
app.use(router)
app.use(i18n)
app.use(VueSweetalert2)
app.use(store)
app.use(VueApexCharts);

app.mount('#app')