import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      tasks: [
        {
          id: 1,
          title: '1',
          text: 'Отменен',
          deadline: '15.08.2033',
          type: 'danger',
          description: 'Первое описание'
        },
        {
          id: 2,
          title: '2',
          text: 'Активен',
          deadline: '15.08.2023',
          type: 'primary',
          description: 'Второе описание'
        }
      ]
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
