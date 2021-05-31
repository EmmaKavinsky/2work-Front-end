import Vue from 'vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import i18n from "./i18n";


import App from './App.vue'
import store from './store'


Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(router)
Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
})
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
