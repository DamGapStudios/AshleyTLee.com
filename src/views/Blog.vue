<template>
  <div id="blog">
    <div class="header">
      <blog-title class="header title"></blog-title>

      <div class="header box-container">

        <div class="header box">

        </div>

        <div class="header portrait">
          <img src="wp-content/themes/AshleyTLeeTheme/dist/ashley_portrait.png" class="logo"/>
        </div>

      </div>

    </div>

    <div class="blogSection">
      <div class="blogs">
        <blog-post v-for="post in blog_posts" :post="post" class="blogContent"></blog-post>
      </div>
      <side-bar class="sideBar" :post="blog_posts"></side-bar>
    </div>
  </div>
</template>

<script>
    import BlogPost from "../components/blogpost.vue";
    import NavBlog from "../components/icons/nav-blog.vue";
    import SideBar from "../components/side-bar.vue";
    import BlogTitle from "../components/icons/blog-title.vue";
  export default {
      components: {
          BlogTitle,
          SideBar,
          NavBlog,
          BlogPost},
      created () {
      this.$http.get('http://ashleytlee.com/wp-json/wp/v2/posts').then(response => {
        this.blog_posts = response.body;
//        console.log(this.blog_posts)
      }, response => {})
    },
    data () {
      return {
          title: 'Blog',
          blog_posts: []
      }
    }
  }
</script>

<style>
</style>

<style scoped>
  #blog{
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width : 1160px) {
    .header {
      background: #56D1D7;
      padding: 10px 5% 20px ;
    }

    .header.title{
      display: block;
      margin: auto;
      height: 90px;
      fill: white;
      border: white 5px solid;
      padding: 20px 30px;
    }

    .header.box-container{
      display: flex;
      padding: 0;
      flex-direction: row;
    }

    .header.box{
      border: outset white 10px;
      flex-basis: 90%;
      margin: 10px;
    }

    .header.portrait{
      border: outset white 10px;
      flex-basis: 252px;
      height: 252px;
      margin: 10px;
      padding: 0;
    }

   .blogSection{
     display: inline-flex;
     flex-direction: row;
     padding: 20px 5%;
     background-color: #4B7FC0;
   }

    .blogs {
      margin: 0 20px 0 0 ;
      flex-grow: 3;
    }
    .blogContent {
      background: white;
      padding: 20px 10px;
    }

    .sideBar {
      width: auto;
      min-width: 200px;
      flex-grow: 1;
    }

  }

  @media only screen and (max-width : 1159px) and (min-width: 426px) {

    .blogSection{
      background-color: #4B7FC0;
    }


    .blogContent {
      padding: 0 5%;
    }

    .sideBar {
      display: none;
    }

  }

  @media only screen and (max-width : 425px) {

    .blogContent {
      padding: 0 5%;
    }

    .sideBar {
      display: none;
    }

  }

</style>
