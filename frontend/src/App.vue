<template>
  <div id="app">
    <h1 class="logo">{{ this.SettingPoints.main_title }}</h1>
    <div id="nav">
      <router-link
        v-for="(value, name) in this.SettingPoints.menu_items"
        v-bind:key="name"
        :to="value"
        >{{name}} | </router-link>
    </div>
    <router-view />

  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
  async created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Aref+Ruqaa&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lora|Open+Sans&display=swap');

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #000;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  font-family: 'Aref Ruqaa', serif;
}
</style>
