<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form class="card" @submit.prevent="addNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="newTitle">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input type="date" id="date" v-model="newDate">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="newDescription"></textarea>
    </div>

    <button
      class="btn primary"
      type="submit"
      :disabled="isDisabled"
    >Создать</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const newTitle = ref('')
    const newDate = ref('')
    const newFormatedDate = ref('')
    const newDescription = ref('')

    function formatDate () {
      const date = new Date(newDate.value)
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
      newFormatedDate.value = new Intl.DateTimeFormat('ru-RU', options).format(date)
    }

    function addNewTask () {
      formatDate()
      if (parseInt(new Date(newDate.value).toLocaleDateString()) >= parseInt(new Date().toLocaleDateString())) {
        store.commit('addNewTask', {
          id: store.getters.tasks.length === 0 ? 1 : store.getters.tasks[store.getters.tasks.length - 1].id + 1,
          title: newTitle.value,
          text: 'Активен',
          deadline: newFormatedDate.value,
          type: 'primary',
          description: newDescription.value
        })
        router.push('/')
      } else {
        store.commit('addNewTask',
          {
            id: store.getters.tasks.length === 0 ? 1 : store.getters.tasks[store.getters.tasks.length - 1].id + 1,
            title: newTitle.value,
            text: 'Отменен',
            deadline: newFormatedDate.value,
            type: 'danger',
            description: newDescription.value
          }
        )
        router.push('/')
      }
    }

    return {
      newTitle,
      newDate,
      newDescription,
      addNewTask,
      newFormatedDate
    }
  },
  computed: {
    isDisabled () {
      if (this.newTitle.length > 0 & this.newDate.length > 1 & this.newDescription.length > 1) {
        return false
      } else return true
    },
    ...mapGetters(['tasks'])
  }
}

</script>
