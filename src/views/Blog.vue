<template>
  <div id="blog">
    <h1 class="ashley-blue-text">Blog</h1>
    <blog-post v-for="post in blog_posts" :post="post" class="blogContent"></blog-post>
  </div>
</template>

<script>
    import BlogPost from "../components/blogpost.vue";
  export default {
      components: {BlogPost},
      created () {
      this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts').then(response => {
        this.blog_posts = response.body;
//        console.log(this.blog_posts)
      }, response => {})
    },
    data () {
      return {
        blog_posts: []
      }
    }
  }
</script>

<style>
  .blogContent {
    padding: 0 5%;
  }
</style>
