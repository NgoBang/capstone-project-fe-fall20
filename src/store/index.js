import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scheduleModalOpen: false,
    loginRegisterModalOpen: false,
  },
  mutations: {
    toggleScheduleModal: (state, newState = false) => {
      state.scheduleModalOpen = newState;
    },
    toggleLoginRegisterModal: (state, newState = false) => {
      state.loginRegisterModalOpen = newState;
    },
  },
  actions: {},
  modules: {},
});
