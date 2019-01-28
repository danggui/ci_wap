import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import family from './modules/family'
import member from './modules/member'
import material from './modules/material'
import upload from './modules/upload'
import claim from './modules/claim'
//import color from './modules/color'
import createLogger from 'vuex/dist/logger'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
const debug = true

export default new Vuex.Store({
  state: {
    isHome:true
  },
  mutations:{
    IS_HOME: (state, isTrue) => {
      state.isHome=isTrue
     },
     
  },
 
  modules: {
    home,
    family,
    member,
    material,
    upload,
    claim
  },
  plugins: [
    createPersistedState({
    storage: window.sessionStorage
  }),
  
   createLogger()
  
],
 // plugins: debug ? [createLogger()] : []   // 开启vuex的debug模式
})