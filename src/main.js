// import { createApp, h } from 'vue'
// import router from './router'

// const SimpleRouterApp = {
//   data: () => ({
//     currentRoute: window.location.pathname
//   }),

//   computed: {
//     ViewComponent () {
//       const matchingPage = router[this.currentRoute] || '404'
//       return require(`./pages/${matchingPage}.vue`).default
//     }
//   },

//   render () {
//     return h(this.ViewComponent)
//   },

//   created () {
//     window.addEventListener('popstate', () => {
//       this.currentRoute = window.location.pathname
//     })
//   }
// }

// createApp(SimpleRouterApp).mount('#app')

import { createApp } from "vue";
import App from './App.vue';
import router from './router.js';

// const app = createApp(App);
// app.use.apply(routes);
// app.mount('#app');
createApp(App)
    .use(router)
    .mount('#app');