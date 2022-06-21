import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import ItemPage from './pages/ItemPage.vue';
import HomePageStore from './pages/HomePageStore.vue'


export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    
    routes: [
    {
        path: '/home',
        component: HomePage,
        alias: '/',
        name: 'home',
    },
    {
        path: '/post/:id',
        component: ItemPage,
        name: 'post',
    },
    {
        path: '/store',
        component: HomePageStore,
        name:'store',
    }
    ],   
})



