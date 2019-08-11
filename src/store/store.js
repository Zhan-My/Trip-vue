import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store ({
  state,
  mutations,
  /* --- 相当于computed计算属性的功能，可以根据state来重新赋予新的值 --- */ 
  getters: {
    doubleCity (state) {
      return state.city + '-' + state.city
    }
  }
})
