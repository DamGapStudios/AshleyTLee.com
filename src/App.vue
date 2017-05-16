<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view class="top"></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import ToolBar from './components/toolbar.vue'
  import FooterBar from './components/footer.vue'
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

<style>

  .ashley-blue {
    background: #a3e1e5;
  }

  .ashley-blue-text {
    color: #a3e1e5;
    margin: 0px 5% 10px 5%;
  }

  .footer {
    background: white;
    color: black
  }

  a {
    cursor: pointer;
    text-align: center;
  }

  a:link {
    text-decoration: none;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .top {
    padding-top: 100px;
  }
</style>
