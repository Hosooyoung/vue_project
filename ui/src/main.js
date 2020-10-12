/*import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import mysql from 'mysql'
import Net from 'net'
new Vue({
    render: h => h(App)
}).$mount('#app')
*/
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).mount('#app')