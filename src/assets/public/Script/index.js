import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'rz-ui'

import { $api, $http } from './axios'


Vue.use(iView);
Vue.config.productionTip = false


Object.assign(Vue.prototype, {
  $api,
  $http,
  $goto(obj, attr, boolean = true) { // 应用内/外跳转
    const {
      $data,
      $router,
    } = this;
    if (obj) boolean ? $router[attr || 'push'](obj) : window[attr || 'open'](obj)
    return $router
  },
})

export {
  Vue
}