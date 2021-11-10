<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld v-bind:title="message" />
    <hr>
    <button class="btn btn-primary" v-on:click="doAction">Change Title</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'HELLO'
    }
  },
  methods: {
    doAction() {
      var input = prompt("new title:")
      this.message = input
    }
  }
}
</script>
