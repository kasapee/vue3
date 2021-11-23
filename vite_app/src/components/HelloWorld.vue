<template>
  <div class="alert alert-info">
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    msg: String
  },
  setup(props) {
    console.log(props)
  }
}
</script>
