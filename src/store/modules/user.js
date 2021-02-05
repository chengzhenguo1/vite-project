export default {
  namespaced: true,
  state: {
    token: 'my token'
  },
  mutations: {
    resetToken (state) {
      state.token = ''
    }
  },
  actions: {
    // 清除token
    resetToken ({ commit }) {
      // 请求退出接口
      commit('resetToken')
    }
  }
};