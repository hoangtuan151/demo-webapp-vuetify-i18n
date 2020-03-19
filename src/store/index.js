import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app_locale: 'en',
  },
  mutations: {
    SET_APP_LOCALE (state, payload) {
      state.app_locale = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
