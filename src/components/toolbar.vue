<template>
  <div class="navbar">
    <img alt='Ashley Logo' src="wp-content/themes/AshleyTLeeTheme/dist/assets/ashley_logo.png" style="height: 80px; padding-left: 30px">
    <div class="toolbar-container">
      <router-link  v-for="link in this.$router.options.routes" :key="link.name" class="toolbar-link" :to="link.path" tag="div" exact>{{ link.name }}</router-link>
      <social-instagram class="social"></social-instagram>
      <social-facebook class="social"></social-facebook>
    </div>
  </div>
</template>

<script>
    import SocialInstagram from "./icons/social_instagram.vue";
    import SocialFacebook from "./icons/social_facebook.vue";

  export default {
      components: {
          SocialFacebook,
          SocialInstagram},
      computed: {
          imageLogo: function () {
              return require('../assets/ashley_logo.png')
          }
      },
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
    margin: 4px 4px;
    font-size: 12pt;
  }

  .toolbar-link:hover{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    margin: 2px 2px;
  }

  .router-link-active{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    margin: 2px 2px;
    /*font-size: 14pt*/
  }

  .social {
    fill: white;
    margin: auto 0;
  }

</style>
