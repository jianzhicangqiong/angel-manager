import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入组件
import Login from '../components/login'
import Home from '../components/home/home'
import SystemManagerUser from '../components/system-manager/user'

export default new Router({
  routes: [
    {path:'/',name:'login',component:Login},
    {
      path:'/home',
      name:'home',
      component:Home,
      children: [
        {path:'/systemManager/user', component: SystemManagerUser}
      ]}
  ]
})
