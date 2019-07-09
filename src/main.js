import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import App from './App.vue'
import router from './router'
import api from './http'
import store from './store'

import mock from "@/mock/index"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(api)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')