import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Todos from '@/views/Todos'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Todos',
            component: Todos
        },

        // {
        //     path: '/Todos',
        //     component: () => import('/views/Todos.vue')
        // },
    ]
});