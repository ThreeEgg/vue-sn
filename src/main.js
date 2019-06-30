import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./stylesheet/main.scss"
import "./modules/rem"
import "swiper/dist/css/swiper.min.css"
import axios from "axios"
Vue.prototype.$http = axios;

import { InfiniteScroll,Header,Button } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
