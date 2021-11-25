<template>
<div id="app">
  <div>
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <router-link :to="{name: 'index', params: {name: 'TARO'}}" class="btn btn-primary mx-2">Go to Top</router-link>
    <router-link :to="{name: 'index', params: {name: 'HANAKO'}}" class="btn btn-warning">Go to JSX</router-link>
  </div>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log("***** App Created! *****")
  },
  mounted() {
    console.log("----- App Mounted! -----")
  },
  setup() {
    return {
      title: 'Router'
    }
  }

}
</script>

<style scoped>

</style>