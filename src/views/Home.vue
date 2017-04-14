<template>
  <div id="home">
    Some Text Here
    <google-play-badge></google-play-badge>
    <app-store-badge></app-store-badge>
  </div>
</template>

<script>
  import GooglePlayBadge from '../components/googlePlayBadge'
  import AppStoreBadge from '../components/appStoreBadge.vue'

  export default {
    data () {
      return {
        title: 'home'
      }
    },
    components: {
      GooglePlayBadge,
      AppStoreBadge
    }
  }
</script>

<style>

</style>
