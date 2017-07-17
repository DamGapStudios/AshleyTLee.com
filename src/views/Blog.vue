<template>
  <div id="blog">
    <img src="http://www.ashleytlee.com/wp-content/uploads/2017/06/AshleyTLee_BlogHeader.png" style="width: 100%" class="med-up"/>

    <div class="header small">

      <blog-title class="header title"></blog-title>

    </div>

    <div class="blogCard">
    <div class="blogCard">
      <img src="http://www.ashleytlee.com/wp-content/uploads/2017/06/blog_banner.jpg" class="blog_banner large"/>
      <div class="blogSection">
        <div class="blogs">
          <blog-post v-for="post in blog_posts" :post="post" class="blogContent"></blog-post>
        </div>
        <side-bar class="sideBar" :post="side_posts"></side-bar>
      </div>
    </div>

    <div class="blogFooter">
      <button class="nextButton med-up" v-on:click="pageUp">Next Page ></button>
      <button class="previousButton med-up" v-on:click="pageDown" v-if="hide_previous">< Previous Page</button>

      <button class="nextButton small" v-on:click="pageUp">></button>
      <button class="previousButton small" v-on:click="pageDown" v-if="hide_previous"><</button>
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

//          http://ashleytlee.com/wp-json/wp/v2/posts
//          Sidebar Reteriving
      this.$http.get('http://ashleytlee.com/wp-json/wp/v2/posts').then(response => {
        this.side_posts = response.body;
//        console.log(this.blog_posts)
      }, response => {});
      this.$http.get('http://ashleytlee.com/wp-json/wp/v2/posts?page=' + this.post_page+ '&per_page=10').then(response => {
        this.blog_posts = response.body;
//        console.log(this.blog_posts)
      }, response => {})
    },
    data () {
      return {
          title: 'Blog',
          blog_posts: [],
          side_posts: [],
          post_page: 1,
          hide_previous: false
      }
    },
      methods: {
        pageUp: function () {
            this.post_page +=1;
            this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts?page=' + this.post_page+ '&per_page=10').then(response => {
                this.blog_posts = response.body;
//        console.log(this.blog_posts)
            }, response => {});
            console.log("Page Number = " + this.post_page);
            this.hide_previous = true
        },
        pageDown: function () {
            this.post_page -=1;
            this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts?page=' + this.post_page+ '&per_page=10').then(response => {
                this.blog_posts = response.body;
//        console.log(this.blog_posts)
            }, response => {});
            console.log("Page Number = " + this.post_page);
            if (this.post_page === 1){
                this.hide_previous= false
            }
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
    .small{
      display: none;
    }
    .header {
      background: #56D1D7;
      padding: 10px 5% 20px ;
    }

    .logo {
      height: 252px;
      width: 252px;
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


    /*BLOG SECTION*/
    .blogCard {
      margin: 30px 5%;
      border: 1px solid #56D1D7;
    }

    .blog_banner {
      width: 100%;
    }

    .blogSection{
     display: inline-flex;
     flex-direction: row;
     padding: 20px 0;
   }

    .blogs {
      margin: 0 0 0 0 ;
    }
    .blogContent {
      background: white;
      padding: 20px 10px;
    }

    .sideBar {
      width: auto;
      min-width: 200px;
      padding: 0 10px 0 0 ;
    }

    /*BLOG FOOTER*/
    .blogFooter {
      margin: 0 5% ;
      background: #56D1D7;
    }

    .nextButton {
      float: right;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 20px 40px;
    }

    .previousButton {
      float: left;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 20px 40px;
    }

  }

  @media only screen and (max-width : 1159px) and (min-width: 426px) {

    .large{
      display: none;
    }

    .small{
      display: none;
    }

    .header.title{
      display: block;
      margin: 10px auto;
      height: 90px;
      fill: #56D1D7;
      border: #56D1D7 5px solid;
      padding: 20px 30px;
    }

    .blogSection{
      /*background-color: #4B7FC0;*/
    }


    .blogContent {
      padding: 0 5%;
    }

    .sideBar {
      display: none;
    }

    /*BLOG FOOTER*/
    .blogFooter {
      margin: 0 5% ;
      background: #56D1D7;
    }

    .nextButton {
      float: right;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 20px 40px;
    }

    .previousButton {
      float: left;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 20px 40px;
    }

  }

  @media only screen and (max-width : 425px) {

    .large {
      display: none;
    }

    .med-up{
      display: none;
    }

    .header.title{
      display: block;
      margin: 10px auto;
      height: 90px;
      fill: #56D1D7;
      border: #56D1D7 5px solid;
      padding: 20px 30px;
    }

    .large{
      display: none;
    }

    .blogContent {
      padding: 0 5%;
    }

    .sideBar {
      display: none;
    }

    /*BLOG FOOTER*/
    .blogFooter {
      margin: 0;
      background: #56D1D7;
    }

    .nextButton {
      float: right;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 5px 40px;
    }

    .previousButton {
      float: left;
      font-size: 20pt;
      color: white;
      background-color: transparent;
      border: none;
      padding: 5px 40px;
    }

  }

</style>
