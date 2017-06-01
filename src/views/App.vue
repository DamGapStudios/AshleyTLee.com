<template>
  <div id="app-page" class="top-more">
    <h1 class="ashley-blue-text"><nav-app class="body-icon"></nav-app>{{title}}</h1>

    <div class="teaching-container">

      <audio-component class="teaching-block" v-for="teaching in teachings" :audio="teaching" :images="teaching.image"></audio-component>

    </div>

    <div id="app" class="center-stuff">

      <div class="app app-image">
        <img src='wp-content/themes/AshleyTLeeTheme/dist/app_picture.png'/>
      </div>
      <div class="app app-link">


        <a href="" class="">Click below to Download:</a>

        <a href='https://itunes.apple.com/us/app/ashley-t-lee/id998172757?ls=1&mt=8' class="image">
          <img style='width: 155px; padding: 10px' class="app app-store" alt='Get it on the App Store' src='wp-content/themes/AshleyTLeeTheme/dist/Download_on_the_App_Store_Badge_US-UK_135x40.svg'/>
        </a>

        <a href='https://play.google.com/store/apps/details?id=com.ashleytlee.AshleyTLee&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' class="image">
          <svg id="artwork" xmlns="http://www.w3.org/2000/svg" width="155px" height="60px"><defs><linearGradient id="linear-gradient" x1="31.8" y1="183.29" x2="15.02" y2="166.51" gradientTransform="matrix(1, 0, 0, -1, 0, 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"/><stop offset="0.01" stop-color="#00a1ff"/><stop offset="0.26" stop-color="#00beff"/><stop offset="0.51" stop-color="#00d2ff"/><stop offset="0.76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><linearGradient id="linear-gradient-2" x1="43.83" y1="172" x2="19.64" y2="172" gradientTransform="matrix(1, 0, 0, -1, 0, 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"/><stop offset="0.41" stop-color="#ffbd00"/><stop offset="0.78" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><linearGradient id="linear-gradient-3" x1="34.83" y1="169.7" x2="12.07" y2="146.95" gradientTransform="matrix(1, 0, 0, -1, 0, 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><linearGradient id="linear-gradient-4" x1="17.3" y1="191.82" x2="27.46" y2="181.66" gradientTransform="matrix(1, 0, 0, -1, 0, 202)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"/><stop offset="0.07" stop-color="#2da771"/><stop offset="0.48" stop-color="#15cf74"/><stop offset="0.8" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient></defs><title>fil_get</title><rect width="155" height="60" style="fill:#fff;fill-opacity:0"/><rect x="10" y="10" width="135" height="40" rx="5" ry="5"/><path d="M140,10.8a4.2,4.2,0,0,1,4.2,4.2V45a4.2,4.2,0,0,1-4.2,4.2H15A4.2,4.2,0,0,1,10.8,45V15A4.2,4.2,0,0,1,15,10.8H140m0-.8H15a5,5,0,0,0-5,5V45a5,5,0,0,0,5,5H140a5,5,0,0,0,5-5V15a5,5,0,0,0-5-5Z" style="fill:#a6a6a6"/><path d="M57.42,20.24a2.71,2.71,0,0,1-.75,2,2.91,2.91,0,0,1-2.2.89,3.15,3.15,0,0,1-2.21-5.37,3,3,0,0,1,2.21-.9,3.1,3.1,0,0,1,1.23.25,2.47,2.47,0,0,1,.94.67l-.53.53a2,2,0,0,0-1.64-.71A2.32,2.32,0,0,0,52.14,20a2.36,2.36,0,0,0,4,1.73,1.89,1.89,0,0,0,.5-1.22H54.47v-.72h2.91A2.54,2.54,0,0,1,57.42,20.24Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M62,17.74H59.3v1.9h2.46v.72H59.3v1.9H62V23h-3.5V17H62Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M65.28,23h-.77V17.74H62.83V17H67v.74H65.28Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M69.94,23V17h.77v6Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M74.13,23h-.77V17.74H71.68V17H75.8v.74H74.13Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M83.61,22.22a3.12,3.12,0,0,1-4.4,0,3.24,3.24,0,0,1,0-4.45,3.1,3.1,0,0,1,4.4,0,3.23,3.23,0,0,1,0,4.45Zm-3.83-.5a2.31,2.31,0,0,0,3.26,0,2.56,2.56,0,0,0,0-3.44,2.31,2.31,0,0,0-3.26,0,2.56,2.56,0,0,0,0,3.44Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M85.58,23V17h.94l2.92,4.67h0l0-1.16V17h.77v6h-.8l-3.05-4.89h0l0,1.16V23Z" style="fill:#fff;stroke:#fff;stroke-miterlimit:10;stroke-width:0.2px"/><path d="M78.14,31.75A4.25,4.25,0,1,0,82.41,36,4.19,4.19,0,0,0,78.14,31.75Zm0,6.83A2.58,2.58,0,1,1,80.54,36,2.46,2.46,0,0,1,78.14,38.58Zm-9.31-6.83A4.25,4.25,0,1,0,73.09,36,4.19,4.19,0,0,0,68.82,31.75Zm0,6.83A2.58,2.58,0,1,1,71.22,36,2.46,2.46,0,0,1,68.82,38.58ZM57.74,33.06v1.8h4.32a3.77,3.77,0,0,1-1,2.27,4.42,4.42,0,0,1-3.33,1.32,4.8,4.8,0,0,1,0-9.6A4.6,4.6,0,0,1,61,30.14l1.27-1.27A6.29,6.29,0,0,0,57.74,27a6.61,6.61,0,1,0,0,13.21,6,6,0,0,0,4.61-1.85,6,6,0,0,0,1.56-4.22,5.87,5.87,0,0,0-.1-1.13Zm45.31,1.4a4,4,0,0,0-3.64-2.71,4,4,0,0,0-4,4.25,4.16,4.16,0,0,0,4.22,4.25,4.23,4.23,0,0,0,3.54-1.88l-1.45-1a2.43,2.43,0,0,1-2.09,1.18,2.16,2.16,0,0,1-2.06-1.29l5.69-2.35Zm-5.8,1.42a2.33,2.33,0,0,1,2.22-2.48,1.65,1.65,0,0,1,1.58.9ZM92.63,40H94.5V27.5H92.63Zm-3.06-7.3H89.5a3,3,0,0,0-2.24-1,4.26,4.26,0,0,0,0,8.51,2.9,2.9,0,0,0,2.24-1h.06v.61c0,1.63-.87,2.5-2.27,2.5a2.35,2.35,0,0,1-2.14-1.51l-1.63.68a4.05,4.05,0,0,0,3.77,2.51c2.19,0,4-1.29,4-4.43V32H89.57Zm-2.14,5.88a2.59,2.59,0,0,1,0-5.16A2.4,2.4,0,0,1,89.7,36,2.38,2.38,0,0,1,87.42,38.58ZM111.81,27.5h-4.47V40h1.87V35.26h2.61a3.89,3.89,0,1,0,0-7.76Zm0,6H109.2V29.24h2.65a2.14,2.14,0,1,1,0,4.29Zm11.53-1.8a3.5,3.5,0,0,0-3.33,1.91l1.66.69a1.77,1.77,0,0,1,1.7-.92,1.8,1.8,0,0,1,2,1.61v.13a4.13,4.13,0,0,0-1.95-.48c-1.79,0-3.6,1-3.6,2.81a2.89,2.89,0,0,0,3.1,2.75A2.63,2.63,0,0,0,125.32,39h.06v1h1.8V35.19C127.18,33,125.52,31.73,123.39,31.73Zm-.23,6.85c-.61,0-1.46-.31-1.46-1.06,0-1,1.06-1.33,2-1.33a3.32,3.32,0,0,1,1.7.42A2.26,2.26,0,0,1,123.16,38.58ZM133.74,32l-2.14,5.42h-.06L129.32,32h-2l3.33,7.58-1.9,4.21h1.95L135.82,32Zm-16.81,8h1.87V27.5h-1.87Z" style="fill:#fff"/><path d="M20.44,17.54a2,2,0,0,0-.46,1.4V41.06a2,2,0,0,0,.46,1.4l.07.07L32.9,30.15v-.29L20.51,17.47Z" style="fill:url(#linear-gradient)"/><path d="M37,34.28,32.9,30.15v-.29L37,25.72l.09.05L42,28.56c1.4.79,1.4,2.09,0,2.89l-4.89,2.78Z" style="fill:url(#linear-gradient-2)"/><path d="M37.12,34.22,32.9,30,20.44,42.46a1.63,1.63,0,0,0,2.08.06l14.61-8.3" style="fill:url(#linear-gradient-3)"/><path d="M37.12,25.78l-14.61-8.3a1.63,1.63,0,0,0-2.08.06L32.9,30Z" style="fill:url(#linear-gradient-4)"/><path d="M37,34.13,22.51,42.38a1.67,1.67,0,0,1-2,0h0l-.07.07h0l.07.07h0a1.66,1.66,0,0,0,2,0l14.61-8.3Z" style="opacity:0.2;isolation:isolate"/><path d="M20.44,42.32a2,2,0,0,1-.46-1.4v.15a2,2,0,0,0,.46,1.4l.07-.07Z" style="opacity:0.12;isolation:isolate"/><path d="M42,31.3l-5,2.83.09.09L42,31.44a1.75,1.75,0,0,0,1-1.44h0A1.86,1.86,0,0,1,42,31.3Z" style="opacity:0.12;isolation:isolate"/><path d="M22.51,17.62,42,28.7a1.86,1.86,0,0,1,1,1.3h0a1.75,1.75,0,0,0-1-1.44L22.51,17.48c-1.4-.79-2.54-.13-2.54,1.47v.15C20,17.49,21.12,16.83,22.51,17.62Z" style="fill:#fff;opacity:0.25;isolation:isolate"/></svg>
        </a>
      </div>

    </div>

  </div>
</template>

<script>
    import NavApp from "../components/icons/nav-app.vue";
    import AudioComponent from "../components/audio-component.vue";
  export default {
      components: {
          AudioComponent,
          NavApp},
      name: 'app',
    data () {
      return {
          title: 'App',
          teachings: [
              {
                  title: {
                      rendered: 'Wonderful Morning!.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/mavpl36nhfqd6jr/Wonderful%20Morning%21.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/WounderfulMorning.jpg'
              },
              {
                  title: {
                      rendered: 'Are You Sleeping?.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/9g18750qso8ru99/Are%20You%20Sleeping%3F.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/AreYouSleeping.jpg'
              },
              {
                  title: {
                      rendered: 'Apple of His Eye.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/mtydppik2hnc5q8/Apple%20of%20His%20Eye.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/AppleofhisEye.jpg'
              },
              {
                  title: {
                      rendered: 'Devoted Love.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/36edib3g9utp8rb/Devoted%20Love.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/DevotedLove.jpg'
              },
              {
                  title: {
                      rendered: 'First Love.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/lobi75huopfpwb3/First%20Love.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/FirstLove.jpg'
              },
              {
                  title: {
                      rendered: 'Hiding Place.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/6oh3q3aw73tr8mr/Hiding%20Place.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/HidingPlace.jpg'
              },
              {
                  title: {
                      rendered: 'Jet Lag.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/sk2jumncmjpaal5/Jet%20Lag.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/JetLag.jpg'
              },
              {
                  title: {
                      rendered: 'Peace.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/n90ux0f4dm94kag/Peace.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/Peace.jpg'
              },
              {
                  title: {
                      rendered: 'Signs.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/ndy86avt9tj6lr4/Signs.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/Signs.jpg'
              },
              {
                  title: {
                      rendered: 'Throw In The Towel.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/f8u9kt21rhrttkc/Throw%20In%20The%20Towel.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/ThrowintheTowel.jpg'
              },
              {
                  title: {
                      rendered: 'Roller Coaster.mp3'
                  },
                  sermon_audio: 'https://www.dropbox.com/s/9uhuue7pqv5hwve/Roller%20Coaster.mp3?dl=1',
                  image: 'wp-content/themes/AshleyTLeeTheme/dist/Apps/RollerCoaster.jpg'
              },
          ]
      }
    }
  }
</script>

<style>
</style>

<style scoped>

  @media only screen and (min-width : 1160px) {
    #app{
      background-color: #8FDCE0;
      display: flex;
      justify-content: center;

    }

    .app {
      display:inline-block;
    }

    .app-link {
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    .app-store {
      width: inherit;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      border: 1px #F7F7F7 solid;
      margin: 9px;
    }


    a {
      padding: 5px 10px ;
      color: white;
    }

    .image {
      color: white;
      background-color: transparent;
      padding:0;
      margin:0;
      min-width: 0;
    }

    .image:hover {
      border: none;
    }

    .teaching-container {
      display: grid;
      grid-gap: 40px;
      grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
      padding-bottom: 20px;
      margin: 0 5%;
    }
    .teaching-block{
      /*padding: 20px;*/
      font-size: 24pt;
      overflow: hidden;
    }
    .teaching-image{
      width: 200px;
      height: 200px;
      background-color: #8FDCE0;
    }
  }

  @media only screen and (max-width : 1159px) and (min-width: 426px) {

    #app{
      background-color: #8FDCE0;
      display: flex;
      justify-content: center;

    }

    .app {
      display:inline-flex;
      flex-direction: column;
    }

    .app-image {
      display: none;
    }

    .app-link {
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    .app-store {
      width: inherit;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      border: 1px #F7F7F7 solid;
      margin: 9px;
    }


    a {
      padding: 5px 10px ;
      color: white;
    }

    .image {
      color: white;
      background-color: transparent;
      padding:0;
      margin:0;
      min-width: 0;
    }

    .image:hover {
      border: none;
    }

    .teaching-container {
      display: grid;
      grid-gap: 40px;
      grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
      padding-bottom: 20px;
      margin: 0 5%;
    }
    .teaching-block{
      /*padding: 20px;*/
      font-size: 24pt;
    }
    .teaching-image{
      width: 200px;
      height: 200px;
      background-color: #8FDCE0;
    }

  }

  @media only screen and (max-width : 425px) {

    #app{
      background-color: #8FDCE0;
      display: flex;
      justify-content: center;

    }

    .app {
      display:inline-flex;
      flex-direction: column;
    }

    .app-link {
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    .app-image {
      display: none;
    }

    .app-store {
      width: inherit;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      border: 1px #F7F7F7 solid;
      margin: 9px;
    }


    a {
      padding: 5px 10px ;
      color: white;
    }

    .image {
      color: white;
      background-color: transparent;
      padding:0;
      margin:0;
      min-width: 0;
    }

    .image:hover {
      border: none;
    }

    .teaching-container {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      margin: 0 5%;
    }
    .teaching-block{
      /*padding: 20px;*/
      font-size: 24pt;
      text-align: center;
    }
    .teaching-image{
      width: 200px;
      height: 200px;
      margin: auto;
      background-color: #8FDCE0;
    }

  }

</style>
