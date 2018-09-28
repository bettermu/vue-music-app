import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

//调试工具
const debug = process.env.NODE_ENV!=='production'

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  state,
  strict:debug
})
