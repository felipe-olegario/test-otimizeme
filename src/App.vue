<template>
  <div id="app">
    <Checkout />
  </div>
</template>

<script>
import Checkout from './Views/Checkout.vue'

export default {
  name: 'App',
  components: {
    Checkout
  }
}
</script>

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
