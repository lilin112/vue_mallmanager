/* eslint-disable indent */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: 'login'
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/Home',
            name: 'Home',
            component: Home
        }
        // {
        //   path: '/about',
        //   name: 'About',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        // }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

// eslint-disable-next-line eol-last
export default router