import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import tables from './views/tables.vue'
import index from './views/index.vue'
import stock from './views/wen/stocking.vue'
import allot from './views/wen/allot.vue'
import pricea from './views/wen/priceadjustment.vue'
import payee from './views/wen/payee.vue'
import stockaccount from './views/wen/stockaccount'
import dull from './views/wen/dull'
Vue.use(Router)

export default new Router({
  routes: [
    {  
      path: '/',
      name: 'tables',
      component: index,   
      children: [{
        path: '/',
        name: 'ss',
        components: {
          default: index,
          a: tables,
          b: Home,
          stock:stock,
          allot:allot,
          pricea:pricea,
          payee:payee,
          stockaccount:stockaccount,
          dull:dull
        }
      }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }]
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
