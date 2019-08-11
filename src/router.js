import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/pages/home/Home')
        },
        {
            path: '/city',
            name: 'City',
            component: () =>
                import ('@/pages/city/City')
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () =>
                import ('@/pages/detail/Detail')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})