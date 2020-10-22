import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Show from '@/components/MovieShowPage'
import login from '@/components/login'
import board from '@/components/board'
import info from '@/components/info'
import create from '@/components/CreateAccount'
import todo from '@/components/Todo'
Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/main',
            name: 'main',
            component: Main
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
        },
        {
            path: '/todo',
            name: 'todo',
            component: todo
        },
        {
            path: '/info',
            name: 'info',
            component: info
        },
        {
            path: '/board',
            name: 'board',
            component: board
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }

    ]
})
router.afterEach(() => {
    var check_id = localStorage.getItem("id");
    if (check_id == null) {
        //alert("login error!")
        router.push('/login')
    }
})