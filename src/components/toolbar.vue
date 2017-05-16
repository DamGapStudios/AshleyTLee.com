<template>
  <div>
    <div class="blur"></div>
    <div class="navbar">
      <img alt='Ashley Logo' src="wp-content/themes/AshleyTLeeTheme/dist/ashley_logo.png" style="height: 80px; padding-left: 30px">
      <div class="toolbar-container">
        <router-link  v-for="link in this.$router.options.routes" :key="link.name" class="toolbar-link" :to="link.path" tag="div" exact>{{ link.name }}</router-link>
        <social-giving class="social"></social-giving>
        <social-instagram class="social"></social-instagram>
        <social-facebook class="social"></social-facebook>
        <social-twitter class="social"></social-twitter>
      </div>
    </div>
  </div>
</template>

<script>
    import SocialInstagram from "./icons/social_instagram.vue";
    import SocialFacebook from "./icons/social_facebook.vue";
    import SocialTwitter from "./icons/social_twitter.vue";
    import SocialGiving from "./icons/social_giving.vue";

  export default {
      components: {
          SocialGiving,
          SocialTwitter,
          SocialFacebook,
          SocialInstagram},
    name: 'tool-bar',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .navbar {
    background: transparent;
    padding: 5px;
    height: 90px;
    opacity: .75;
    z-index: 3;
    position:fixed;
    top:0;
    width: 100%;
  }

  .blur{
    background-color: #a8dbdf;
    filter: blur(2px);
    z-index: 2;
    position:fixed;
    top:0;
    width: 100%;
    height: 90px;
    opacity: .75;
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
    margin: 4px 14px;
    font-size: 12pt;
  }

  .toolbar-link:hover{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    margin: 2px 12px;
    box-shadow: 1px 1px 15px 1px #fff ;
  }

  .router-link-active{
    background: #a3e1e5;
    border-color: white;
    border-width: 2px;
    border-style: solid;
    margin: 2px 12px;
    /*font-size: 14pt*/
  }

  .social {
    fill: white;
    margin: auto 0;
  }

</style>
