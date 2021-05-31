import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'


const vuexPersist = new VuexPersist({
  key: process.env.VUE_APP_TITLE,
  storage: localStorage
})

// Modules
import auth from './auth'
import annonce from './annonce'
import demande from './demande'
import users from './users'

Vue.use(Vuex)

let modules = {
  auth,
  annonce,
  demande,
  users
}


export default new Vuex.Store({
  modules: modules,
  strict: false,
  plugins: [vuexPersist.plugin]
})
