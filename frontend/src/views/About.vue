<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'About',
  components: {
  },
  mounted () {
    // axios.post('http://localhost:4000/graphql/', {
    //   query: '{posts {id, title}}'
    // })
  }
}
</script>

