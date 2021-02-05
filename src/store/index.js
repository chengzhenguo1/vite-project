import { createStore } from 'vuex'
import user from './modules/user.js'

const store = createStore({
  state: {
    isCollapse: false
  },
  mutations: {
    /* 侧边栏按钮 */
    changeSideBar () {
      this.state.isCollapse = !this.state.isCollapse
    }
  },
  modules: {
    user
  }
})

export default store