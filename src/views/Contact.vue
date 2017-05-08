<template>
  <div id="contact">
    <home-canvas></home-canvas>

    <div id="about">
      <div class="text-block">
        <div style="padding: 15px 0">
          <span style="font-weight: bold">Ashley T Lee</span> is a Christan Author and Speaker. She is currently featured on over 100 Christin radio stations across America
          and teaches through the Kings of th Bible on the website audio teachings.
        </div>
        <div style="padding: 15px 0">
          Currently booking live talked and radio sessions!
          <br/>
          Message her below for further details:
        </div>
        <div style="display: block">
          <a class="about-button noside">Message Ashley</a>
          <a class="about-button">Read Statement of Faith</a>
        </div>
      </div>

      <div class="ashley-blue photo">
        <img src="../assets/ashley_portrait.png" style="width: initial; height: 100%"/>
      </div>
    </div>

    <div id="promo" style="text-align: center; padding: 30px; font-size: 30px">
      Click here to hear todays FREE teachings fom Ashley T Lee!
      <a class="about-button">Listen Now</a>
    </div>

    <div id="contactCard">
      <h2 style="color: white; margin: 0; padding: 10px">Contact</h2>
      Email us at <a href="mailto:ashley@ashleytlee.com" style="color: white;background-color: transparent;padding:0;margin:0;min-width: 0;">ashley@ashleytlee.com</a> or fill out the fields below and we wil be in touch
      <div class="contact-container">
        <div class="input-contact">
          <input type="text" name="name" placeholder="Name"/>
        </div>
        <div class="input-contact">
          <input type="email" name="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <textarea name="message" placeholder="Message"></textarea>
      </div>
      <a class="submit">Submit</a>
    </div>
  </div>
</template>

<script>
  import HomeCanvas from '../components/homeCanvas.vue'
  export default {
    name: 'contact',
    data () {
      return {
        title: 'Contact'
      }
    },
    components: {
      HomeCanvas
    }
  }
</script>

<style scoped>
  #about {
    display: flex;
    align-items: center;
    margin: 30px 5%;

  }
  #promo{
    background-color: #4B7FC0;
    color: white;
    padding: 0 5%;
  }
  #contactCard{
    padding: 0 5%;
    background-color: #8FDCE0;
    color: white;
  }

  .text-block {
    margin: 10px;
    font-size: 14pt;
  }
  .submit{
    background-color: #5CD1D6;
    width: 100%;
    text-align: center;
    margin: 0 0 30px 0;
    padding: 10px;
  }
  .photo {
    height: 190px;
    width: 190px;
    margin: 10px;
  }

  .about-button.noside{
    margin-left: 1px;
  }
  .about-button.noside:hover{
    border: 1px #F7F7F7 solid;
    margin: 9px 9px 9px 0px;
  }
  .about-button{
    background-color: #5CD1D6;
    margin: 10px;
    padding: 5px 10px ;
    color: white;
  }


  .about-button:hover{
    border: 1px #F7F7F7 solid;
    margin: 9px;
  }
  .contact-container{
    padding: 10px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  .input-contact{
    border: 3px white solid;
    width: 49%;
  }
  input{
    padding: 10px;
    -webkit-appearance: textfield;
    background-color: transparent;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    border: 0;

  }
  input:focus{
    outline: none;
  }
  textarea {
    border: 3px white solid;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    color: white;

    -webkit-appearance: textarea;
    background-color: transparent;
    -webkit-rtl-ordering: logical;
    user-select: text;
    flex-direction: column;
    resize: none;
    cursor: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  textarea:focus{
    outline: none;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: white;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: white;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: white;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: white;
  }
</style>
