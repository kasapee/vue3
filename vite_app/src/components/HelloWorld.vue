<template>
  <div class="alert alert-info">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ $store.state.message }}</p>
  </div>
  <hr>
  <div class="alert alert-secondary" @click="$store.dispatch('doit')">
    <a class="h5" @click.stop="$store.commit('reset')">clicked: {{$store.state.counter}}</a>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'HelloWorld',
  setup(props) {
    const data = reactive({
      title: 'Vuex',
    })
    return {
      data
    }
  }
}
</script>
