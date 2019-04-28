// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router/router'
import Header from './components/Header/Header.vue'
import store from './store/index'
import Star from './components/Star/Star.vue'
import './validate/index'
import './mock/mock-server'

Vue.component('Header', Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)  //mt-button


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
