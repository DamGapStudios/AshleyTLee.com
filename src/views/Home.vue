<template>
  <div id="home">
    <br>
    <home-canvas></home-canvas>
    <google-play-badge></google-play-badge>
    <app-store-badge></app-store-badge>
  </div>
</template>

<script>
  import GooglePlayBadge from '../components/googlePlayBadge'
  import AppStoreBadge from '../components/appStoreBadge.vue'
  import HomeCanvas from '../components/homeCanvas'

  export default {
    data () {
      return {
        title: 'home'
      }
    },
    components: {
      HomeCanvas,
      GooglePlayBadge,
      AppStoreBadge
    }
  }
</script>

<style>

</style>
