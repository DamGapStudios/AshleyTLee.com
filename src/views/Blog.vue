<template>
  <div id="blog">
    <h1 class="ashley-blue-text">Blog</h1>
    <blog-post class="blogContent" v-for="post in blog_posts" :post="post"></blog-post>
    <!--<div v-for="post in blog_posts" class="blogContent">-->
      <!--{{ post.title.rendered }}-->
      <!--<div v-html="post.content.rendered">-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    import BlogPost from "../components/blogpost.vue";
  export default {
      components: {BlogPost},
      created () {
      this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts').then(response => {
        this.blog_posts = response.body
//        console.log(this.blog_posts)
      }, response => {})
    },
    name: 'blog',
    data () {
      return {
        title: 'Blog',
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
