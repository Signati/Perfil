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
        path: '/projects/kiinbeh',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/kiinbeh.vue')
    },
    {
        path: '/projects/puntodeventa',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/puntodeventa.vue')
    },
    {
        path: '/projects/signaticore',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/signaticore.vue')
    },
    {
        path: '/projects/signatiapp',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/signatiapp.vue')
    },
    {
        path: '/projects/lavanderia',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/lavanderia.vue')
    },
    {
        path: '/projects/ondinas',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/ondinas.vue')
    },
    {
        path: '/projects/facturatelweb',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/facturatelweb.vue')
    },
    {
        path: '/projects/entradas',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/entradas.vue')
    },
    {
        path: '/projects/deploy',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../views/projects-views/deploy.vue')
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
