<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <the-upper-row v-if="$store.getters.tasks[0]"></the-upper-row>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import TheUpperRow from './components/TheUpperRow'

export default {
  components: {
    TheNavbar,
    TheUpperRow
  }
}
</script>

<style>

</style>
