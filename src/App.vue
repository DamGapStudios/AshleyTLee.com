<template>
  <v-app id="app">
    <v-toolbar class="center-stuff elevation-0">
      <v-toolbar-title>
        <img alt='Ashley Logo' src="./assets/ashley_logo.png" style="height: 64px">
      </v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
          <router-link  v-for="link in this.$router.options.routes" :key="link.name" class="toolbar-link" :to="link.path" tag="div" exact>{{ link.name }}</router-link>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer class="center-stuff footer">Copyright © {{ year }} |  Ashley T Lee Miniseries  |  Site Created By Live Long Simple & DamGap Studios</v-footer>
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

  .center-stuff{
    padding 0 3%;
  }

  .ashley-blue {
    background: #a3e1e5;
  }

  .ashley-blue-text {
    color: #a3e1e5;
  }

  .toolbar-link {
    color white
    padding 5px 10px
    margin 5px 10px
    font-size 12pt
  }

  .toolbar-link:hover{
    background: #a3e1e5
    border-color: white
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    margin 3px 8px
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .router-link-active{
    background: #a3e1e5
    border-color: white
    border-width: 2px;
    border-style: solid;
    font-size: 14pt
  }

  .footer {
    background white;
    color: black
  }
</style>
