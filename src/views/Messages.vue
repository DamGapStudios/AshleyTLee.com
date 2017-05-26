<template>
  <div class="top-more">
    <h1 class="ashley-blue-text"><nav-messages class="body-icon"></nav-messages>{{title}}</h1>
    <div id="messages">
      <div style=" margin: 40px 0">
        <p>Click on an audio teaching below to listen to free teaching of the bible:</p>
      </div>
      <div class="audio-container">
        <div class="audio-block" v-for="teaching in audioTeaching">
          <div class="audio-image">
            <audio controls style="width: 200px; margin-top: 168px">
              <source :src="teaching.sermon_audio" type="audio/mpeg">
              Your browser does not support the audio element
            </audio>
          </div>
          {{ teaching.title.rendered}}<br/>
          <span style="font-size: 12px">{{ teaching.date }}</span>
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
  import NavMessages from "../components/icons/nav-message.vue";
  export default {
      created () {
          this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/wpfc_sermon?per_page=8').then(response => {
              this.audioTeaching = response.body;
        console.log(this.audioTeaching)
          }, response => {
          })
      },
    components: {
        NavMessages,
        HomeCanvas},
    name: 'messages',
    data () {
      return {
        title: 'Messages',
        audioTeaching: []
      }
    }
  }
</script>

<style>

</style>

<style scoped>
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


  @media only screen and (min-width : 1024px) {
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
  }

  @media only screen and (max-width : 1023px) and (min-width: 426px) {
    #appDownload{
      padding: 30px 5%;
      background-color: #F7F7F7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a {
      background-color: #8FDCE0;
      padding: 10px;
      margin: 5px 10px;
      color: white;
      min-width: 95%;
      margin-top: 10px;
    }

    a:hover{

    }
  }

  @media only screen and (max-width : 425px) {
    #appDownload{
      padding: 30px 5%;
      background-color: #F7F7F7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a {
      background-color: #8FDCE0;
      padding: 10px;
      color: white;
      width: 95%;
      margin-top: 10px;
    }

    a:hover{

    }
  }
</style>
