<template>
  <div id="blog">
    <h1 class="ashley-blue-text"><nav-blog></nav-blog>{{title}}</h1>
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
  .nav-icon {
    height: 37px;
    fill: #5CD1D6;
    float: left;
  }
</style>

<style scoped>
  @media only screen and (min-width : 1024px) {
   .blogSection{
     display: flex;
     padding: 0 5%;
   }

    .blogs {
      flex-grow: 2;
      margin: 0 20px 0 0 ;
    }
    .blogContent {
    }

    .sideBar {
      width: auto;
      flex-grow: 1;
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
