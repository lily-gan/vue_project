<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style>

</style>
