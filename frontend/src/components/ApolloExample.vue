<template>
  <div>
    
    <!-- <div v-for="post in posts" v-bind:key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.id }}</p>
    </div> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import getPosts from '../graphql/posts.gql'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data () {
    return {
      name: 'Anne',
      newMessage: '',
    }
  },
  created () {
  },
  computed: {
    ...mapGetters({
    }),
  },

  methods: {
    ...mapActions({
    })
  },
}
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

label {
  display: block;
  margin-bottom: 6px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
  grid-gap: 10px;
}

.image-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
  border-radius: 8px;
}

.image {
  max-width: 100%;
  max-height: 100%;
}

.image-input {
  margin: 20px;
}
</style>
