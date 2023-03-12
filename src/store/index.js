import { createStore } from "vuex";

const counter = {
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, payload) {
      state.count = payload;
    },
  },
  actions: {},
};

export default createStore({
  modules: {
    counter,
  },
});
