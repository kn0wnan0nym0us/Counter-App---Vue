export default {
    state: {
      count: 0,
    },
    mutations: {
      INCREMENT(state) {
        state.count++;
      },
      DECREMENT(state) {
        state.count--;
      },
      RESET(state) {
        state.count = 0;
      },
      SET_VALUE(state, val) {
        state.count = val;
      },
    },
    actions: {
      increment({ commit }) {
        commit("INCREMENT");
      },
      decrement({ commit }) {
        commit("DECREMENT");
      },
      reset({ commit }) {
        commit("RESET");
      },
      setValue({ commit }, val) {
        commit("SET_VALUE", val);
      },
    },
  };
  