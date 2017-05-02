<template>
  <div id="blog">
    <div v-for="post in blog_posts">
      {{ post.title.rendered }}
      <div v-html="post.content.rendered">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
