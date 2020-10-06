import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/main', component: Main },
        { path: '/', component: Login }
    ]
})
export default router