import { createStore } from 'vuex'
import { localStoragePlugin } from '../plugins/localStoragePlugin'

const savedTasks = localStorage.getItem('tasks')

const initialState = {
  tasks: savedTasks
    ? JSON.parse(savedTasks)
    : []
}

export default createStore({
  state: initialState,
  getters: {
    tasks (state) {
      return state.tasks
    },
    activeAndInProgressCount (state) {
      return state.tasks.filter(task =>
        task.text === 'Активен' || task.text === 'Выполняется'
      ).length
    }
  },
  mutations: {
    startTask (state, payload) {
      state.tasks[payload].text = 'Выполняется'
      state.tasks[payload].type = 'warning'
    },
    finishTask (state, payload) {
      state.tasks[payload].text = 'Завершен'
      state.tasks[payload].type = 'primary'
    },
    cancelTask (state, payload) {
      state.tasks[payload].text = 'Отменен'
      state.tasks[payload].type = 'danger'
    },
    addNewTask (state, payload) {
      state.tasks.push(payload)
    },
    deleteTask (state, payload) {
      const taskToDelete = state.tasks.find(task => task.id === payload)
      state.tasks.splice(state.tasks.indexOf(taskToDelete), 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [localStoragePlugin]
})
