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
        path: '/products/:id',
        name: 'CoffeeProductsDetails',

        component: () => import('../views/CoffeeProductsDetails.vue')
    },

    {
        path: '/create',
        name: 'create',

        component: () => import('../views/CreateForm.vue')
    }


]

const router = new VueRouter({
  routes
})

export default router
