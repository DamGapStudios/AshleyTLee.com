<template>
  <div id="contact">

    <h1 class="ashley-blue-text"><nav-contact></nav-contact>{{title}}</h1>

    <div id="promo" style="text-align: center; padding: 30px; font-size: 30px">
      Click here to hear today's FREE teachings from Ashley T Lee!
      <a class="about-button">Listen Now</a>
    </div>

    <form action="/wp-content/themes/AshleyTLeeTheme/dist/process.php" method="POST" id="contactCard">
      <h2 style="color: white; margin: 0; padding: 10px 10px 10px 0px">Contact</h2>
      Email us at <a href="mailto:ashley@ashleytlee.com" style="color: white;background-color: transparent;padding:0;margin:0;min-width: 0;">ashley@ashleytlee.com</a> or fill out the fields below and we will be in touch.
      <div class="contact-container">
        <div class="input-contact">
          <input type="text" name="name" placeholder="Name" v-model="name"/>
        </div>
        <div class="input-contact">
          <input type="email" name="email" placeholder="Email" v-model="email"/>
        </div>
      </div>
      <div class="contact-container">
        <textarea  rows="4" name="message" placeholder="Message" v-model="message"></textarea>
      </div>
      <button class="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import NavContact from "../components/icons/nav-contact.vue";
  export default {
    name: 'contact',
    data () {
      return {
          title: 'Contact',
          name: '',
          email: '',
          message: ''
      }
    },
    components: {
        NavContact
    },
      methods: {
        sendContact: function() {
          console.log("Name = " + this.name);
          console.log("Email = " + this.email);
          console.log("Message = " + this.message);
        }
      }
  }
</script>

<style>
  .nav-icon {
    height: 37px;
    fill: #5CD1D6;
    float: left;
  }
</style>

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
    height: auto;
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
    margin: 1px 1px 31px 1px;
    padding: 10px;
    border: none;
    color: white;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    font-family: Helvetica Neue, Helvetica, Arial;
  }

  .submit:hover{
    margin: 0 0 30px 0;
    border: 1px #F7F7F7 solid;
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
    color: white

  }
  input:focus{
    outline: none;
  }
  textarea {
    font-family: Helvetica Neue, Helvetica, Arial;
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
