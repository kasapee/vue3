<template>
  <div class="alert alert-info">
    <h1>{{ data.title }}</h1>
    <p class="h5">{{ data.msg }}</p>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
  setup(props, context) {
    const data = reactive({
      title: 'HelloWorld',
      msg: 'This is HelloWorld component',
    })
    return {
      data
    }
  }
}
</script>
