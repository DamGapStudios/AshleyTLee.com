<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
        <v-toolbar-item ripple v-for="link in this.$router.options.routes" :key="link.name">
          <router-link class="toolbar-link" :to="link.path" tag="span">{{ link.name }}</router-link>
        </v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer>Copyright ©  <span>{{ year }}</span> |  Ashley T Lee Miniseries  |  Site Created By Live Long Simple & DamGap Studios</v-footer>
  </v-app>
</template>

<script>
export default {
// eslint-disable-next-line indent
  name: 'app',
  data () {
    return {
      year: '2017'
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  .toolbar-link {
    color white
  }
</style>
