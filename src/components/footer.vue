<template>
  <div class="footer">
    <div class="footer-text">Copyright © {{ year }} |  Ashley T Lee Ministries</div>
    <div class="footer-text">Site Created By Live Long Simple & DamGap Studios</div>
    <div class="footer-text">
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
  .footer {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #565656;
  }
  @media only screen and (min-width : 1024px) {
    .footer{
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin:  10px;
    }

    .footer-text {
      padding: 0;
    }
  }
  @media only screen and (max-width : 1023px) and (min-width: 426px) {
    .footer{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin:  10px;
    }

    .footer-text {
      padding: 5px;
    }
  }
  @media only screen and (max-width : 425px) {
    .footer{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin:  10px;
      padding: 10px;
      text-align: center;
    }

    .footer-text {
      padding: 5px;
    }
  }

  .social {
    fill: #5CD1D6;
  }

</style>
