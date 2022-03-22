import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'Home'
import Atmospheric from 'Atmospheric'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [
        ]     
        
    },
    {
        path: '/Atmospheric',
        name: 'Atmospheric',
        component: Atmospheric
    },
]



const router = new VueRouter({
    routes
})
// 

router.replace('/Home')

export default router