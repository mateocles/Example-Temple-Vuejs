import Vue from 'vue'
import Vuex from 'vuex'
import globalTypes from '@/types/global'
import Functions from '@/store/modules/functions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    processing: false
  },
  getters: {
    [globalTypes.getters]: state => state.processing
  },
  mutations: {
    [globalTypes.mutations.startProcessing] (stage) {
      stage.processing = true
    },
    [globalTypes.mutations.stopProcessing] (stage) {
      stage.processing = false
    }
  },
  actions: {},
  modules: {
    namespaced: true,
    Functions,
  }
})
