<template>
  <div class="footer">
    <div>Copyright © {{ year }} |  Ashley T Lee Miniseries</div>
    <div>Site Created By Live Long Simple & DamGap Studios</div>
    <div>
      <img src="http://ashleytlee.dev/wp-content/themes/AshleyTLeeTheme/dist/assets/social_instagram.png"/>
      <img src="http://ashleytlee.dev/wp-content/themes/AshleyTLeeTheme/dist/assets/social_pinterest.png"/>
      <img src="http://ashleytlee.dev/wp-content/themes/AshleyTLeeTheme/dist/assets/social_twitter.png"/>
      <img src="http://ashleytlee.dev/wp-content/themes/AshleyTLeeTheme/dist/assets/social_facebook.png"/>
    </div>
  </div>
</template>

<script>

  export default {
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
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
  img{
    height: 45px;
  }
</style>
