<template>
  <div id="app">
    <h1 class="logo">{{ this.main_title }}</h1>

    <router-view />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/timeline">Timeline</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import getSettingPoints from "./graphql/getSettingPoints.gql";
import { apolloClient }  from "./vue-apollo"

export default {
  name: 'App',
  data: () => ({
    main_title: ''
  }),
  async created () {
    await this.fetchSettingPoints()

    this.main_title = this.settingPoint('main_title')

  },
  mounted () {

  },
  computed: {
    ...mapGetters({
      settingPoints: 'settings/settingPoints',
      settingPoint: 'settings/settingPoint',
    })
  },
  methods: {
    ...mapActions({
      fetchSettingPoints: 'settings/fetchSettingPoints',
    })
  }
}
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Aref+Ruqaa&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  font-family: 'Aref Ruqaa', serif;
}
</style>
