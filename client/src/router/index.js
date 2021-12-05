import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App'
    },
    {
      path: '/profile',
      name: 'Profile'
    },
    {
      path: '/character/:id',
      name: 'Character'
    },
    {
      path: '/character',
      name: 'Create Character'
    }
  ]
})
