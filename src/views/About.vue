<template>
  <div id="about" class="top-more">
    <h1 class="ashley-blue-text"><nav-about class="body-icon"></nav-about>{{title}}</h1>

    <div id="info">
      <div class="photo">
        <img src="http://www.ashleytlee.com/wp-content/uploads/2017/06/ashley_portrait.png" class="logo"/>
      </div>
      <div class="text-block">
        <div style="padding: 0 0 10px 0">
          Ashley Lee has a heart for unbelievers because she didn’t have the gospel clearly presented to her.  After writing the book,
          “RELATIONSHIPS: How To Have Relationships God’s Way”,  she did many speaking engagements and incorporated teaching people how to
          share their faith. She became involved with “Way of The Master” Ministry due to her heart for the lost to come to salvation.
        </div>
        <div style="padding: 10px 0">
          Her heart’s passion includes helping all who need to see relevancy of the scriptures to their needs so it will
          help them deal with all the stresses that are presented in life. She has a compassionate heart and tries to help
          people grow closer in their walk with God after they come to a saving knowledge.
        </div>
        <div style="padding: 10px 0">
          Ashley is currently pursuing a Master of Arts in Apologetics degree from Southern Evangelical Seminary. She is a
          Mom of 4 girls so can relate to all people dealing with raising families.
        </div>
        <div style="padding: 10px 0" class="about-button-container">
          <a href="/" class="about-button noside">Message Ashley</a>
        </div>
      </div>
    </div>
    <br>
    <div id="statementOfFaith">
      <h1 class="ashley-blue-text header">Statement of Faith</h1>
      <div v-for="statement in statementsOfFaith" :key="statement.title" class="statement">
        {{ statement.statement }} ({{statement.scripture }})
      </div>
    </div>

    <prayer-request></prayer-request>

  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas.vue'
  import NavAbout from "../components/icons/nav-about.vue";
  import PrayerRequest from "../components/prayer-request.vue";

  export default {
    data () {
      return {
        title: 'About',
        statementsOfFaith: [
          {
            title: 'Some Title',
            statement: 'Ashley believes the Holy Scriptures of the Old and New Testaments to be the verbally, fully inspired Word of God; the final authority in all matters of doctrine, faith, and conduct.',
            scripture: 'II Tim. 3:16-17; II Peter 1:20-21; Mt. 5:18; John 16:12-13'
          },
          {
            title: 'Some Title',
            statement: 'Ashley believes in one Triune God, eternally existing in three persons – Father, Son, and Holy Spirit – co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections.',
            scripture: 'Deut. 6:4; II Cor. 13:14'
          },
          {
            title: 'Some Title',
            statement: 'Ashley believes God the Father is the sovereign authority, who is the Father of all creation, who authored the divine decrees, who gave His Son for our redemption and His Holy Spirit for our sanctification, in order to glorify Himself. He is loving and just, “not willing that any should perish, but that all should come to repentance.”',
            scripture: 'Ps. 139; Deut. 10:14-15; John 17:1-6, 15:26; I Pet. 1:16; II Pet. 3:9'
          },
          {
            title: 'Some Title',
            statement: 'Ashley believes that the Lord Jesus Christ, the Eternal Son of God, became man, without ceasing to be God, having been conceived by the Holy Spirit, and born of the Virgin Mary, in order that He might reveal God and redeem sinful man',
            scripture: 'John 1:1,2,14; Luke 1:35'
          },
          {
            title: 'Some Title',
            statement: 'Ashley believes that the Lord Jesus Christ accomplished our redemption through His death on the Cross as a representative, vicarious, substitutionary sacrifice and that our justification is made sure by His literal, physical resurrection from the dead',
            scripture: 'Romans  3:24,25; I Pt. 2:24; Eph. 1:7; I Pt. 1:3-5'
          },
          {
            title: 'Some Title',
            statement: 'Ashley believes that the Lord Jesus Christ ascended to heaven, and is now exalted at the right hand of God, where as our High Priest, He fulfills the ministry of representative Intercessor and Advocate',
            scripture: 'Acts 1:9,10; Heb. 9:24; Rom. 8:34; I John 2:1,2'
          }
        ]
      }
    },
    components: {
        PrayerRequest,
        NavAbout,
        HomeCanvas
    }
  }
</script>

<style>
</style>

<style scoped>

  #about {
    background-color: #F7F7F7;
  }

  @media only screen and (min-width : 1160px) {
    #info {
      display: flex;
      align-items: flex-start;
      margin: 0 5%;
    }

    a {
      padding: 11px 10px ;
      color: white;
    }

    .about-button.noside{
      margin-left: 1px;
      margin-right: 20px;

    }
    .about-button.noside:hover{
      background: #8fdce0;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      background: #8fdce0;
    }

    .photo {
      height: 190px;
      width: 190px;
      margin: 10px;
      vertical-align: top;
    }

    .logo {
      width: initial;
      height: 100%
    }

    .header {
      margin: 0 0 0 0;

    }

  }

  @media only screen and (max-width : 1159px) and (min-width: 426px) {
    #info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 5%;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      background: #8fdce0;
    }


    a {
      padding: 11px 10px ;
      color: white;
    }

    .photo {
      width: inherit;
      margin: auto;
      display: block;
    }

    .logo {
    }

  }

  @media only screen and (max-width : 425px) {

    #info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 5%;
    }

    .about-button-container{
      display: flex;
      flex-direction: column;
    }

    .about-button{
      background-color: #5CD1D6;
      margin: 10px;
      text-align: center;
    }


    .about-button:hover{
      background: #8fdce0;
    }

    a {
      padding: 11px 10px ;
      color: white;
    }

    .photo {
      width: inherit;
      margin: auto;
      display: block;
    }

    .logo {
    }

  }

  #statementOfFaith {
    margin: 20px 5% 0;
    padding: 0 0 50px;
  }

  .text-block {
    margin: 10px;
  }

  .statement{
    padding: 10px;
  }

</style>
