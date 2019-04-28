<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  components: {
    FootGuide
  },
  async mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped >

</style>
