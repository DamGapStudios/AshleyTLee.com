<template>
  <div id="admin">

    <h2 style="color: #5e7ebc">Add Blog Post</h2>
    <div style="width: 75%">
      <input type="text" placeholder="Blog Title"/>
      <textarea placeholder="Blog Message"></textarea>
      <button v-on:click="saveData('Steve', 'Todays Date', 'Some Message', 'Blog')">Submit</button>
    </div>

    <h2 style="color: #5e7ebc; padding-top: 10px">Add Message Post</h2>
    <div style="width: 75%">
      <input type="text" placeholder="Message"/>
      <input type="file" placeholder="Audio File"/>
      <button v-on:click="saveData()">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
    },
    name: 'admin',
    data () {
      return {
        title: 'admin'
      }
    },
    methods: {
      saveData: function (name, date, message, type) {
        console.log(name, date, message, type)
      }
    }
  }
</script>

<style scoped>
  #admin {
    margin: 10px 5% 0;
  }
  button{
    padding: 10px;
    background-color: #5e7ebc;
    color: white;
  }
  input{
    border: 3px #5e7ebc solid;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    color: #5e7ebc;
  }
  input:focus{
    outline: none;
  }
  textarea {
    border: 3px #5e7ebc solid;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    color: #5e7ebc;
  }
  textarea:focus{
    outline: none;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #5e7ebc;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #5e7ebc;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #5e7ebc;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #5e7ebc;
  }
</style>
