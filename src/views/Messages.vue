<template>
  <div>
    <home-canvas></home-canvas>

    <div id="messages">
      <div style=" margin: 40px 0">
        <h2 style="color: #5AD1D6" >Messages</h2>
        <p>Click on an audio teaching below to listen to free teaching of the bible</p>
      </div>
      <div class="audio-container">
        <div class="audio-block" v-for="teaching in audioTeaching">
          <div class="audio-image"></div>
          {{ teaching.author }}<br/>
          {{ teaching.date }}
        </div>
      </div>
    </div>

    <div id="appDownload">
      <div style="font-size: 22pt">
        Like what you hear? Download our FREE app,
        now available on iTunes and Google Play
      </div>
      <a class="button">Message Ashley</a>
    </div>

  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas.vue'
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
  #messages{
    margin: 0 5%;
  }

  .audio-container {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    padding-bottom: 20px;
  }
  .audio-block{
    /*padding: 20px;*/
    font-size: 24pt;
  }
  .audio-image{
    width: 200px;
    height: 200px;
    background-color: #8FDCE0;
  }

  /*.audio-image:hover{*/
    /*border: 5px white inset;*/
  /*}*/
  #appDownload{
    padding: 30px 5%;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    background-color: #8FDCE0;
    padding: 10px;
    margin: 5px 10px;
    color: white;
    min-width: 150px;
  }

  a:hover{
    margin: 4px 9px;
    border: 1px white solid;
  }

</style>
