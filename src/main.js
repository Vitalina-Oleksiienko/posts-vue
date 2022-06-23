import { createApp } from "vue";
import App from './App.vue';
import router from './router.js';
import store from '@/store';
import intersection from "v-intersection";

// const app = createApp(App);
// app.use.apply(routes);
// app.mount('#app');
createApp(App)
    .use(router)
    .use(store)
    .use(intersection)
    .mount('#app');