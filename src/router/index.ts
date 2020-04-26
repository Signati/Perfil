import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
    },
    {
        path: '/',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
    },
    {
        path: '/libraries',
        name: 'Libraries',
        component: () => import(/* webpackChunkName: "about" */ '../views/Libraries.vue')
    },
    {
        path: '/ideas',
        name: 'Ideas',
        component: () => import(/* webpackChunkName: "about" */ '../views/Ideas.vue')
    },
    {
        path: '/todo',
        name: 'To Do',
        component: () => import(/* webpackChunkName: "about" */ '../views/ToDo.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
