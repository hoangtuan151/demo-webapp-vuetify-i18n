import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist/dist/umd'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'app-store',
  storage: window.localStorage,
  reducer: state => ({
    app_locale: state.app_locale
  })
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
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
