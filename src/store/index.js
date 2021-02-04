import { createStore } from 'vuex'


const store = createStore({
  state: {
    isCollapse: false
  },
  mutations: {
    /* 侧边栏按钮 */
    changeSideBar () {
      this.state.isCollapse = !this.state.isCollapse
    }
  }
})

export default store