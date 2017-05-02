<template>
  <div class="footer">
    Copyright © {{ year }} |  Ashley T Lee Miniseries  |  Site Created By Live Long Simple & DamGap Studios
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

</style>
