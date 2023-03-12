<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import NotFound from './components/NotFound.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

// created() {
  //   // Set up the routes
  //   this.$router.addRoutes([
  //     {
  //       path: '/counter',
  //       component: Counter
  //     },
  //     {
  //       path: '*',
  //       component: NotFound
  //     }
  //   ])
  // }

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
