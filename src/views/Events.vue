<template>
  <div id="template">
    <h1 class="ashley-blue-text">{{title}}</h1>
    <calender-full></calender-full>
  </div>
</template>

<script>
    import CalenderFull from "../components/calender/calender.vue";
  export default {
      components: {CalenderFull},
      name: 'events',
    data () {
      return {
        title: 'Events'
      }
    }
  }
</script>

<style>

</style>
