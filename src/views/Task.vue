<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h2>{{tasks[id - 1].title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="tasks[id - 1].type" :text="tasks[id - 1].text"/></p>
    <p><strong>Дэдлайн</strong>: {{tasks[id - 1].deadline}}</p>
    <p><strong>Описание</strong>: {{tasks[id - 1].description}}</p>
    <div>
      <button class="btn">Взять в работу</button> //todoo работать над изменением статуса
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { toRefs } from 'vue'
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  setup (props) {
    const id = toRefs(props)
    return {
      taskId: id.id.value
    }
  },
  components: { AppStatus },
  computed: {
    ...mapGetters(['tasks'])
  }
}
</script>

<style scoped>

</style>
