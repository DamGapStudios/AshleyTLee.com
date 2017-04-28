<template>
  <div id="messages">
    <home-canvas></home-canvas>

    <div class="center-stuff">
      <h2 class="ashley-blue-text">Messages</h2>
      <p>Click on an audio teaching below to listen to free teaching of the bible</p>
      <div class="audio-container">
        <div class="audio-block" v-for="teaching in audioTeaching">
          <div class="audio-image ashley-blue"></div>
          {{ teaching.author }}<br/>
          {{ teaching.date }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas'
  export default {
    components: {HomeCanvas},
    name: 'messages',
    data () {
      return {
        title: 'messages',
        audioTeaching: [
          {
            author: 'Daniel',
            date: 'January 1 2017'
          },
          {
            author: 'Jeremiah',
            date: 'May 1 2016'
          },
          {
            author: 'Isaiah',
            date: 'June 27 2016'
          },
          {
            author: 'Isaiah',
            date: 'June 27 2016'
          },
          {
            author: 'Daniel',
            date: 'January 1 2017'
          },
          {
            author: 'Jeremiah',
            date: 'May 1 2016'
          },
          {
            author: 'Isaiah',
            date: 'June 27 2016'
          },
          {
            author: 'Isaiah',
            date: 'June 27 2016'
          }
        ]
      }
    }
  }
</script>

<style>
  .audio-container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  }
  .audio-block{
    /*padding: 20px;*/
    font-size: 24pt;
  }
  .audio-image{
    width: 200px;
    height: 200px;
  }
</style>
