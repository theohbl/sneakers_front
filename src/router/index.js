import Vue from 'vue'
import VueRouter from 'vue-router'
import CoffeeHome from '../views/CoffeeHome.vue'

Vue.use(VueRouter)

const routes = [
   {
        path: '/',
        name: 'Home',
        component: CoffeeHome
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CoffeeAbout.vue')
    },

    {
        path: '/store',
        name: 'Store',

        component: () => import('../views/CoffeeStore.vue')
    },
    {
        path: '/products',
        name: 'products',

        component: () => import('../views/CoffeeProducts.vue')
    },
    
    {
        path: '/products/:productId',
        name: 'productsDetails',

        component: () => import('../views/CoffeeProductsDetails.vue')
    }


]

const router = new VueRouter({
  routes
})

export default router
