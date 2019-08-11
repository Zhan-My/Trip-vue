import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/store'
import fastClick from 'fastclick'
import adjust from 'styles/autoAjust'
import Cube from 'cube-ui'
import axios from 'axios'

import './registerServiceWorker'
import 'styles/normalize.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'amfe-flexible'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(adjust)
Vue.use(Cube)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
