<template>
  <div class="footer">
    <div class="footer-text">Copyright © {{ year }} |  Ashley T Lee Ministries</div>
    <div class="footer-text">Site Created By &nbsp; <a href="http://www.longlivesimeple.com"> Long Live Simple </a> &nbsp; & &nbsp; <a href="http://www.damgapstudios.com"> DamGap Studios </a></div>
    <div class="footer-text">
      <nav-giving class="social"></nav-giving>
      <router-link to="/giving" class="social extra">Giving</router-link>
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
    import NavGiving from "./icons/nav-giving.vue";

  export default {
      components: {
          NavGiving,
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

  .footer-text {
    display: inline-flex;
    align-items: center;
  }

  a {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #565656;
  }
  @media only screen and (min-width : 1024px) {
    .footer{
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin:  18px;
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
    color:#5CD1D6;

  }

  .social.extra {
    margin-right: 20px;
    font-size: 25.55px;
  }

</style>
