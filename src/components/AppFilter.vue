<template>
 <div class="filter">
  <select
    class="filter__select"
    name="filter"
    v-model="value"
    >
    <option value="all" selected>Все</option>
    <option value="active">Активен</option>
    <option value="progress">Выполняется</option>
    <option value="finished">Завершен</option>
    <option value="canceled">Отменен</option>
  </select>
 </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const value = ref('all')
    const router = useRouter()

    watch(value, (newValue, _) => {
      if (newValue === 'all') {
        router.push('/')
      } else {
        router.push('/' + newValue)
      }
    })

    return {
      value
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  // max-width: fit-content;
  // height: fit-content;
}
</style>
