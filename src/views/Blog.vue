<template>
  <div id="blog">
    <h1 class="ashley-blue-text"><nav-blog></nav-blog>{{title}}</h1>
    <blog-post v-for="post in blog_posts" :post="post" class="blogContent"></blog-post>
  </div>
</template>

<script>
    import BlogPost from "../components/blogpost.vue";
    import NavBlog from "../components/icons/nav-blog.vue";
  export default {
      components: {
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
  .blogContent {
    padding: 0 5%;
  }
</style>
