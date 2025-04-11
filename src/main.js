import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import "vue3-toastify/dist/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "normalize.css";
import "vue3-treeview/dist/style.css";

import i18n from "@/i18n";
import {FontAwesomeIcon} from "@/fontawesome";


const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(i18n);
appInstance.component('font-awesome-icon', FontAwesomeIcon);
appInstance.mount('#app');


// createApp(App).use().use().use().mount()
