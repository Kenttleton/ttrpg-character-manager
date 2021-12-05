// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App'
import router from './router'
import VueSplash from 'vue-splash'
import store from './store'

Vue.use(VueSplash)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
