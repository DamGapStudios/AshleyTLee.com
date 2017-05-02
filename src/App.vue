<template>
  <v-app id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import ToolBar from './components/toolbar'
  import FooterBar from './components/footer'
  export default {
  // eslint-disable-next-line indent
    created () {
    },
    components: {
      FooterBar,
      ToolBar},
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .ashley-blue {
    background: #a3e1e5;
  }

  .ashley-blue-text {
    color: #a3e1e5;
  }

  .footer {
    background white;
    color: black
  }
</style>
