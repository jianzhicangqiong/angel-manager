// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 导入Element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入axios组件
import axios from 'axios'
Vue.prototype.$axios=axios

// 导入时间处理组件
import moment from 'moment'
Vue.prototype.moment=moment

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
