import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Show from '@/components/MovieShowPage'
import login from '@/components/login'
import board from '@/components/board'
import info from '@/components/info'
import create from '@/components/CreateAccount'
import todo from '@/components/Todo'
import infowrite from '@/components/infowrite'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
    var check_id = localStorage.getItem("id");
    if (check_id == null) {
        alert('Access Denied, Check login');
        return next('/login');
    }
    next();
};

export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'main',
            component: Main,
            beforeEnter: requireAuth()
        },
        {
            path: '/show',
            name: 'show',
            component: Show,
            beforeEnter: requireAuth()
        },

        {
            path: '/create',
            name: 'create',
            component: create
        },
        {
            path: '/todo',
            name: 'todo',
            component: todo,
            beforeEnter: requireAuth()
        },
        {
            path: '/info',
            name: 'info',
            component: info,
            beforeEnter: requireAuth()
        },
        {
            path: '/board',
            name: 'board',
            component: board,
            beforeEnter: requireAuth()
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/infowrite',
            name: 'infowrite',
            component: infowrite,
            beforeEnter: requireAuth()
        }

    ]
})