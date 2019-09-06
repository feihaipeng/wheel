import Vue from 'vue'
import Router from 'vue-router'
import home from './views/mainIndex'
import login from './views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          name: 'home',
          component: home
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})
