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
    color: #565656;
  }

  .body-icon {
    height: 37px;
    fill: #5CD1D6;
    float: left;
  }

  .top {
    padding-top: 90px;
  }

  .top-more {
    padding-top: 120px;
  }
</style>
