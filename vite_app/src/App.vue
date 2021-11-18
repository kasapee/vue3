<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloJSX title="OK, Vue3" message="※属性で設定したメッセージ。"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HelloJSX
  }
}
</script>
