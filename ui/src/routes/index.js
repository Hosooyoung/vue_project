import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import login from '@/components/login'
import create from '@/components/CreateAccount'
Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/show',
            name: 'show',
            component: Show
        },
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/create',
            name: 'create',
            component: create
        }

    ]
})