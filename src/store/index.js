import { createStore } from 'vuex'


const store = createStore({
  state: {
    counter: 0
  },
  mutations: {
    addCounter () {
      this.state.counter++
    }
  }
})

export default store