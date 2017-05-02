<template>
  <div class="footer">
    <div>Copyright © {{ year }} |  Ashley T Lee Miniseries</div>
    <div>Site Created By Live Long Simple & DamGap Studios</div>
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
}
</style>
