<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld title="Composition API" msg="This is Composition API sample" />
    <HelloJSX title="Composition API JSX" msg="This is Composition API JSX"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloJSX
  },
}
</script>
