<template>
  <div id="about">
    <home-canvas></home-canvas>

    <div id="info">
      <div class="ashley-blue photo">
        <img src="../assets/ashley_portrait.png" style="width: initial; height: 100%"/>
      </div>
      <div class="text-block">
        <h2 class="ashley-blue-text">About</h2>
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        <button class="about-button ashley-blue">Message Ashley</button>
      </div>
    </div>

    <div id="statementOfFaith">
      <h2 class="ashley-blue-text">Statement of Faith</h2>
      <div v-for="statement in statementsOfFaith" :key="statement.title">
        {{ statement.statement }} ({{statement.scripture }})
      </div>
    </div>
  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas'

  export default {
    data () {
      return {
        title: 'about',
        statementsOfFaith: [
          {
            title: 'Some Title',
            statement: 'Here lies the statement',
            scripture: 'John 3:16'
          }
        ]
      }
    },
    components: {
      HomeCanvas
    }
  }
</script>

<style scoped>
  #about {
    margin-top: 10px;
    background-color: #F7F7F7;
  }
  #info {
    display: flex;
    align-items: center;
  }

  #statementOfFaith {
    margin-top: 20px;
  }

  .photo {
    height: 190px;
    width: 190px;
    margin: 10px;
  }

  .text-block {
    margin: 10px;
  }

  .about-button {
    display: block;
    color: white;
    padding: 5px 10px;
  }

</style>
