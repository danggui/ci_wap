import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/styles/index.scss'
import 'lib-flexible/flexible.js'

import './icons' // icon
import './directives'

Vue.config.productionTip = false
Vue.use(MintUI)


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