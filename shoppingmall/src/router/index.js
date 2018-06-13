import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/page/Home.vue"
import List from "../components/page/List.vue"
import Car from "../components/page/Car.vue"
import Personal from "../components/page/Personal.vue"
import Order from "../components/page/Order.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/list",component:List},
    {path:"/car",component:Car},
    {path:"/personal",component:Personal},
    {path:"/order/:type",component:Order,name:"order"}     // 注意这种路由的写法
  ]
})

