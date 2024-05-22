<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" v-if="!showIdNotFoundMessage()">
    <h2>{{tasks[id - 1].title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="tasks[id - 1].type" :text="tasks[id - 1].text"/></p>
    <p><strong>Дэдлайн</strong>: {{tasks[id - 1].deadline}}</p>
    <p><strong>Описание</strong>: {{tasks[id - 1].description}}</p>
    <div>
      <button class="btn" @click="startTask">Взять в работу</button>
      <button class="btn primary" @click="finishTask">Завершить</button>
      <button class="btn danger" @click="cancelTask">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-if="showIdNotFoundMessage()">
    Задачи с id = <strong>{{ showRoute }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  props: ['id'],
  setup (props) {
    const id = toRefs(props)
    const store = useStore()
    const route = useRoute()
    const task = store.getters.tasks[id.id.value - 1]
    const tasks = store.getters.tasks

    const startTask = () => {
      task.text = 'Выполняется'
      task.type = 'warning'
    }

    const finishTask = () => {
      task.text = 'Завершен'
      task.type = 'primary'
    }

    const cancelTask = () => {
      task.text = 'Отменен'
      task.type = 'danger'
    }

    const showIdNotFoundMessage = () => {
      if (tasks.some((elem) => elem.id === +route.params.id)) {
        return false
      } else return true
    }

    const showRoute = computed(() => route.params.id)

    return {
      taskId: id.id.value,
      startTask,
      finishTask,
      cancelTask,
      tasks,
      showIdNotFoundMessage,
      showRoute
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>

</style>
