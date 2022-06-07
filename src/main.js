

import { createApp } from "vue";
import App from './App.vue';
import router from './router.js';

// const app = createApp(App);
// app.use.apply(routes);
// app.mount('#app');
createApp(App)
    .use(router)
    .mount('#app');