<template>
  <div class="upper">
    <h3 class="text-white">Всего незавершенных задач: {{ tasksCounter }} </h3>
    <app-filter></app-filter>
  </div>
</template>

<script>
import AppFilter from '../components/AppFilter.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const tasksCounter = computed(() => {
      return store.getters.activeAndInProgressCount
    })

    return {
      tasksCounter
    }
  },
  components: { AppFilter }
}
</script>

<style lang="scss" scoped>

</style>
