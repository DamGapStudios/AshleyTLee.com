<template>
  <div id="template">
    <h1 class="ashley-blue-text"><nav-events></nav-events>{{title}}</h1>
    <calender-full></calender-full>
  </div>
</template>

<script>
    import CalenderFull from "../components/calender/calender.vue";
    import NavEvents from "../components/icons/nav-events.vue";
  export default {
      components: {
          NavEvents,
          CalenderFull},
      name: 'events',
    data () {
      return {
        title: 'Events'
      }
    }
  }
</script>

<style>
  .nav-icon {
    height: 37px;
    fill: #5CD1D6;
    float: left;
  }
</style>

<style>

</style>
