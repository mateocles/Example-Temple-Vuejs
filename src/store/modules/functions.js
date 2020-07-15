import Api from "../../common/Api/Api";

const state = {
  functions: {
    user: {},
  },
};

const getters = {
  user: (state) => {
    return state.functions.user;
  },
};

const actions = {
  login({ commit }, payload) {
    Api.post(payload, "Utilidades/Login", async (functions) => {
      const response = await functions;
      commit("login", response);
    },e => {
      console.log(e)
    });
  },
};
const mutations = {
  login(state, data) {
    console.log(data);
    state.functions.user = data.data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
