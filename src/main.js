import { createApp } from "vue";
import App from './App.vue';
import router from './router.js';
import store from '@/store';
import intersection from "v-intersection";

createApp(App)
    .use(router)
    .use(store)
    .use(intersection)
    .mount('#app');