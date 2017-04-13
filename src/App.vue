<template>
  <v-app id="example-1">
    <v-toolbar>
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-btn class="pink" v-for="link in this.$router.options.routes" :href="link.path" :key="link.name" flat>{{ link.title }}</v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>

export default {
// eslint-disable-next-line indent
  name: 'app'
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
