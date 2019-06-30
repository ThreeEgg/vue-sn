import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import enjoy from "./enjoy"
import category from "./category"
import list from "./list"
import cart from "./cart"
import mine from "./mine"
export default new Router({
  mode: 'history',
  routes: [
    {path:"/",redirect:"enjoy"},
    enjoy,category,list,cart,mine,
    {path:"/notfound",component:()=>import("@/views/Notfound/Notfound")},
    {path:"*",redirect: "notfound"}
  ]
})
