<template>
  <div id="home">
    <home-canvas></home-canvas>

    <div id="about" class="center-stuff">
      <div class="text-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        <div style="display: block;">
          <button class="about-button ashley-blue">Message Ashley</button>
          <button class="about-button ashley-blue">Read Statement of Faith</button>
        </div>
      </div>

      <div class="ashley-blue photo">
        <img src="../assets/logo.png" style="width: initial; height: 100%"/>
      </div>
    </div>

    <div id="promo" style="text-align: center; padding: 30px">
      Click here to hear todays FREE teachings fom Ashley T Lee!
      <button class="about-button">Listen Now</button>
    </div>

    <div id="app" class="center-stuff ashley-blue">
      <div class="app app-image">
        PLACEHOLDER
      </div>
      <div class="app app-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </div>
      <div class="app app-link">
        <div class="app-link-item">
          <a href='https://itunes.apple.com/us/app/ashley-t-lee/id998172757?ls=1&mt=8' style="width: 94px; padding: 2px">
            <img class="app app-store" alt='Get it on the App Store' src='../assets/Download_on_the_App_Store_Badge_US-UK_135x40.svg'/>
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.ashleytlee.AshleyTLee&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style="width: 100px">
            <img class="app app-store" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
          </a>
          <button class="about-button ashley-blue">Click to Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas'

  export default {
    data () {
      return {
        title: 'home'
      }
    },
    components: {
      HomeCanvas
    }
  }
</script>

<style scoped>
  #home {
    margin-top: 10px;
  }
  #about {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  #promo{
    background-color: #4B7FC0;
    color: white;
  }

  #app{

    /*display: flex;*/
    /*justify-content: space-around;*/
  }

  .app {
    width: 30%;
    display: inline-flex;
  }
  .app-link {
    /*display: flex;*/
    /*flex-direction: column;*/

  }

  .app-link-item{
    /*margin: 5px auto;*/
    margin: 5px auto;
  }

  .app-store {
    width: inherit;
  }

  .photo {
    height: 190px;
    width: 190px;
    padding: 10px;
  }

  .about-button{
    background-color: #5CD1D6;
  }


  button {
    padding: 5px 10px ;
    color: white;
  }

</style>
