<template>
  <div id="template" class="top-more">
    <h1 class="ashley-blue-text"><nav-events class="body-icon"></nav-events>{{title}}</h1>
    <p class="sides" >{{intro}}</p>
    <full-calendar :events="eventSet" locale="en"></full-calendar>
  </div>
</template>

<script>
    import CalenderFull from "../components/calender/calender.vue";
    import NavEvents from "../components/icons/nav-events.vue";

  export default {
      components: {
          NavEvents,
          CalenderFull,
          'full-calendar': require('vue-fullcalendar'),
      },
      name: 'events',
    data () {
      return {
          title: "Events",
          intro: 'Click on an Ashley T Lee Ministries event below for more info:',
          events:[],
          eventSet: []
      }
    },
      created(){
          this.$http.get('http://ashleytlee.dev/wp-json/tribe/events/v1/events').then(response => {
              this.events = response.body.events;
              console.log(this.events);
              for (let i = 0; i < this.events.length; i++) {
                  console.log({title: this.events[i].title, start: this.events[i].start_date, end: this.events[i].end_date});
                  this.eventSet.push({title: this.events[i].title, start: this.events[i].start_date, end: this.events[i].end_date});
                  console.log(this.eventSet)
              }
          }, response => {
          })
      }
  }
</script>

<style>

</style>

<style scoped="">
  .sides {
    margin: 0 5%;
    text-align: center;
  }
</style>
