<template>
  <div id="blog" class="top-more">
    <div class="ashley-blue-text"><nav-blog class="body-icon"></nav-blog><blog-title class="body-icon"></blog-title></div><br/>
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
      this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts').then(response => {
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
