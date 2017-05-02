<template>
  <div class="navbar">
    <img alt='Ashley Logo' src="../assets/ashley_logo.png" style="height: 80px; padding-left: 30px">
    <div class="toolbar-container">
      <router-link  v-for="link in this.$router.options.routes" :key="link.name" class="toolbar-link" :to="link.path" tag="div" exact>{{ link.name }}</router-link>
      <img class="social" src="../assets/social_instagram.png"/>
      <img class="social" src="../assets/social_pinterest.png"/>
      <img class="social" src="../assets/social_twitter.png"/>
      <img class="social" src="../assets/social_facebook.png"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tool-bar',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #A3D9D9;
    padding: 5px;
    height: 90px;
  }
  .toolbar-container{
    display: flex;
    align-items:baseline;
    justify-content:flex-end;
    vertical-align:middle;
    float: right;
    padding: 18px;
  }
  .toolbar-link {
    color: white;
    padding: 5px 10px;
    margin: 5px 10px;
    font-size: 12pt;
  }

  .toolbar-link:hover{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    margin: 3px 8px;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  }

  .router-link-active{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    margin: 3px 8px;
    /*font-size: 14pt*/
  }

  .social{
    height: 30px;
    margin: auto 0;
  }

</style>
