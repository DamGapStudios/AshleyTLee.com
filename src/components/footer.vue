<template>
  <div class="footer">
    <div>Copyright © {{ year }} |  Ashley T Lee Ministries</div>
    <div>Site Created By Live Long Simple & DamGap Studios</div>
    <div>
      <social-instagram class="social"></social-instagram>
      <social-facebook class="social"></social-facebook>
      <social-twitter class="social"></social-twitter>
    </div>
  </div>
</template>

<script>
    import SocialInstagram from "./icons/social_instagram.vue";
    import SocialFacebook from "./icons/social_facebook.vue";
    import SocialTwitter from "./icons/social_twitter.vue";

  export default {
      components: {
          SocialTwitter,
          SocialFacebook,
          SocialInstagram},
      name: 'footer-bar',
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
.footer{
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin:  10px;
}

  .social {
    fill: #5CD1D6;
  }

</style>
