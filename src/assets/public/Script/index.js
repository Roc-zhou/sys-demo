import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'rz-ui'

import { $api, $http } from './axios'


Vue.use(iView);
Vue.config.productionTip = false


Object.assign(Vue.prototype, {
  $api,
  $http
})

export {
  Vue
}