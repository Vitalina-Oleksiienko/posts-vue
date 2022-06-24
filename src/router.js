import { createRouter, createWebHashHistory } from "vue-router";
//import ErrorPage from './pages/ErrorPage.vue';

const HomePage = () => import ('./pages/HomePage.vue');
const ItemPage = () => import ('./pages/ItemPage.vue');
const HomePageStore = () => import('./pages/HomePageStore.vue');
//const ErrorPage = () => import('./pages/ErrorPage.vue');

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
    },
    // {
    //     path: '/:pathMatch(.*)',
    //     component: ErrorPage,
    //     name: 'error-page',
    // }
    ],   
})



