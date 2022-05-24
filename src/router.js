import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ItemPage from './pages/ItemPage.vue';
 

export default createRouter({
    history: createWebHashHistory(),
    
    routes: [
        {
        path: '/home',
        component: HomePage,
            alias: '/',
        name: 'home'
    },
    {
        path: '/post/ :id',
        component: ItemPage,
        name: 'post'
    } 
    ]
    
})



// import HomePage from './pages/HomePage.vue'
// import ItemPage from './pages/ItemPage.vue'
// import VueRouter from 'vue-router'


// const routes = [
//     {
//         path: '/home',
//         component: HomePage
//     },
//     {
//         path: '/itemPage',
//         component: ItemPage
//     }
// ]

// const router = new VueRouter({ routes })

// export default router



// export default {
//   '/': 'HomePage',
//   '/item': 'ItemPage'
// }
