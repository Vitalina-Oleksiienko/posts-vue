import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import ('./pages/HomePage.vue');
const ItemPage = () => import ('./pages/ItemPage.vue');
const HomePageStore = () => import ('./pages/HomePageStore.vue');

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



