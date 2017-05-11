<template>
  <div id="blog">
    <!--<blog-post v-for="post in blog_posts" :blog-post="post"></blog-post>-->
    <div v-for="post in blog_posts">
      {{ post.title.rendered }}
      <div v-html="post.content.rendered">
      </div>
    </div>
  </div>
</template>

<script>
    import BlogPost from "../components/blogpost.vue";
  export default {
      components: {BlogPost},
      created () {
      this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts').then(response => {
        this.blog_posts = response.body
        console.log(this.blog_posts)
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

</style>
