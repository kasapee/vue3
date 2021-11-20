<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld v-bind:title="message" v-bind:num="num"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: 'validate',
      num: 123
    }
  }
}
</script>
