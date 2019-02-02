import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import 'lib-flexible/flexible.js'

import '@/styles/index.scss'


import { DatetimePicker,Popup,Actionsheet,Lazyload ,Picker} from 'mint-ui';


Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker,);
Vue.component(Popup.name, Popup);
Vue.component(Actionsheet.name, Actionsheet);

Vue.use(Lazyload);

//全局svg
import './icons' // icon
//自定义指令
import './directives'
//全局函数
import format from './utils/format'
import storage from './utils/storage'
Vue.use(format);
Vue.use(storage);


Vue.config.productionTip = false

window.addEventListener('popstate', function(e) {
  router.togoback() 
}, false
)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})