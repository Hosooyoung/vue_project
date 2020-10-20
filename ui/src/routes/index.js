import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Show from '@/components/MovieShowPage'
import login from '@/components/login'
import create from '@/components/CreateAccount'
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
            path: '/login',
            name: 'login',
            component: login
        }

    ]
})
router.afterEach(() => {
    var check_id = localStorage.getItem("id");
    if (check_id == null) {
        alert("login error!")
        router.push('/login')
    }
})