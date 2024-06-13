// plugins/localStoragePlugin.js
export const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  })
}
