import Vue from 'vue'
import Router from 'vue-router'
import components from '../components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: components,
})
