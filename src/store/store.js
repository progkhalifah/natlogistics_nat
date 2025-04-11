import { createStore } from 'vuex'
import router from "@/router/router";

export default createStore({
  state: {
    showSidenav: true,
    isEn: JSON.parse(localStorage.getItem('isEn')) ? true : false,
  },
  getters: {
    currentLanguage: (state) => (state.isEn ? 'en' : 'ar'),
  },
  mutations: {
    toggleLanguage(state) {
      state.isEn = !state.isEn; // Toggle language state
      localStorage.setItem('isEn', JSON.stringify(state.isEn)); // Persist state
    },
    redirectTo(state, payload) {
      router.push({ name: payload });
    },
  },
  actions: {
    changeLanguage({ commit }) {
      commit('toggleLanguage')
    },
    redirectTo({ commit }, payload) {
      commit("redirectTo", payload.val);
    },
  },
  modules: {
  }
})
