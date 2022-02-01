import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import bookInspect from '../views/bookInspect.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },

    {
        path: '/book/:id',
        name: 'Book',
        component: bookInspect
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '',
    routes
  })
  
  export default router
