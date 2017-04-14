<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
          <router-link  v-for="link in this.$router.options.routes" :key="link.name" class="toolbar-link" :to="link.path" tag="span">{{ link.name }}</router-link>
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
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'

  .toolbar-link {
    color white
    padding 10px 20px
    font-size 12pt
  }

  .toolbar-link:hover{
    background: #a3e1e5
    border-color: white
    border-width: 2px;
    border-style: solid;
    font-size: 14pt
    cursor: pointer;
    box-shadow: 5px 5px 1px #5e6166;
  }
</style>
