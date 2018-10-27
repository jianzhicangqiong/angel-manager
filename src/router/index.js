import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入组件
import Login from '../components/login'
import Home from '../components/home/home'

// 系统管理组件
import SystemManagerUser from '../components/system-manager/user'
import SystemManagerPermission from '../components/system-manager/permission'

export default new Router({
  routes: [
    {path:'/',name:'login',component:Login},
    {
      path:'/home',
      name:'home',
      component:Home,
      children: [
        {path:'/systemManager/user', component: SystemManagerUser},
        {path:'/systemManager/permission', component: SystemManagerPermission}
      ]}
  ]
})
