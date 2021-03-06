import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
// import 'ant-design-vue/dist/antd.css'// 不配置自定义主题引入该css

// import 'ant-design-vue/dist/antd.less' //通过配置文件自定义组件 注意：与vue.config.js中css模块需同时修改
import router from './router/router'
import api from './http'
import store from './store'
import mock from "@/mock/index"
import 'babel-polyfill'//兼容ie，360兼容模式
import echarts from 'echarts'

// import VueQuillEditor from 'vue-quill-editor'  //可在组件里单独引入
// Vue.use(VueQuillEditor)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
