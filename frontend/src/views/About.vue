<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ApolloExample />
  </div>
</template>

<script>

import axios from 'axios'
import ApolloExample from '../components/ApolloExample'

export default {
  name: 'About',
  components: {
    ApolloExample
  },
  mounted () {
    axios.post('http://localhost:4000/graphql/', {
      query: '{posts {id, title}}'
    })
  }
}
</script>

