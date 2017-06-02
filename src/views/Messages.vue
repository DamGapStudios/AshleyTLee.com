<template>
  <div class="top-more">
    <h1 class="ashley-blue-text"><nav-messages class="body-icon"></nav-messages>{{title}}</h1>
    <div id="messages">
      <div style=" margin: 40px 0">
        <p>Click on an audio teaching below to listen to free teaching of the bible:</p>
      </div>
      <div class="audio-container">
        <audio-component class="audio-block" v-for="teaching in audioTeaching" :audio="teaching" v-if="loaded">
        </audio-component>
      </div>
    </div>

    <div id="appDownload">
      <div style="font-size: 22pt">
        Like what you hear? Download our FREE app,
        now available on iTunes and Google Play
      </div>
      <a class="button">Click to Download</a>
    </div>

  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas.vue'
  import NavMessages from "../components/icons/nav-message.vue";
  import AudioComponent from "../components/audio-component.vue";
  export default {
      created () {
          this.$http.get('http://ashleytlee.com/wp-json/wp/v2/wpfc_sermon').then(response => {
              this.audioTeaching = response.body;
              console.log(this.audioTeaching);
              console.log("Collected Images");
              this.loaded=true
          }, response => {
          })
      },
    components: {
        AudioComponent,
        NavMessages,
        HomeCanvas},
    name: 'messages',
    data () {
      return {
        title: 'Messages',
        audioTeaching: [],
          loaded: false
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
    overflow: hidden;
  }

  /*.audio-image:hover{*/
    /*border: 5px white inset;*/
  /*}*/


  @media only screen and (min-width : 1160px) {
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

  @media only screen and (max-width : 1159px) and (min-width: 426px) {
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
