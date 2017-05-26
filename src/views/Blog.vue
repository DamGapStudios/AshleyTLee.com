<template>
  <div id="blog" class="top-more">
    <h1 class="ashley-blue-text"><nav-blog class="body-icon"></nav-blog>{{title}}</h1>
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
  export default {
      components: {
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

  @media only screen and (min-width : 1024px) {
   .blogSection{
     display: flex;
     padding: 0 5%;
   }

    .blogs {
      margin: 0 20px 0 0 ;
    }
    .blogContent {
    }

    .sideBar {
      width: auto;
      min-width: 200px;
    }

  }

  @media only screen and (max-width : 1023px) and (min-width: 426px) {
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
