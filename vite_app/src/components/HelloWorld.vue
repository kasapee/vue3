<template>
  <div class="alert alert-info">
    <h1>{{ title }}</h1>
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
      msg: 'This is ref-value!',
      num: 0
    })
    data.msg = context.attrs['msg'].toUpperCase()
    return {
      data
    }
  }
}
</script>
