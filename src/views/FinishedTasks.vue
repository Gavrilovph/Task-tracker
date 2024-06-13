<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-if="$store.getters.tasks[0]">
    <div class="card" v-for="task in showActiveTasks" :key="task.id">
      <h2 class="card-title">
        <!-- Название задачи --> {{ task.title }}
        <AppStatus :type="task.type" :text="task.text" />
      </h2>
      <p>
        <strong>
          <small>
            {{task.deadline}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="viewTask(task.id)">Посмотреть</button>
      <button class="btn warning" @click="deleteTask(task.id)">Удалить</button>
    </div>
  </template>
  <h3 class="text-white center" v-else>Задач пока нет</h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
    const router = useRouter()
    const store = useStore()

    const viewTask = (id) => {
      router.push({ name: 'TaskDetail', params: { id: id } })
    }

    const deleteTask = (id) => {
      store.commit('deleteTask', id)
    }

    return {
      viewTask,
      deleteTask
    }
  },
  components: { AppStatus },
  computed: {
    // tasks () {
    //   return this.$store.getters.tasks
    // },
    showActiveTasks () {
      return this.$store.getters.tasks.filter(task => task.text === 'Завершен')
    },
    activeAndInProgressCount () {
      return this.$store.getters.tasks.filter(task =>
        task.text === 'Активен' || task.text === 'Выполняется'
      ).length
    }
  }
}
</script>
