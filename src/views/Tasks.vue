<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <template v-if="$store.state.tasks">
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
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
    </div>
  </template>
  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    const viewTask = (id) => {
      router.push({ name: 'TaskDetail', params: { id: id } })
    }
    return {
      viewTask
    }
  },
  components: { AppStatus },
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  }
}
</script>
