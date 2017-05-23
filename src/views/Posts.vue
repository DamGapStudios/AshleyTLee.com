<template>
    <div id="posts">
        <blog-single :post="blog_post" :author="author"></blog-single>
    </div>
</template>

<script>
    import BlogSingle from "../components/blog-single.vue";
    export default {
        components: {BlogSingle},
        name: 'Posts',
        created () {
            console.log(this.$route.params.id);
            this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/posts/' + this.$route.params.id).then(response => {
                this.blog_post = response.body;
                console.log(this.blog_post);

                this.$http.get('http://ashleytlee.dev/wp-json/wp/v2/users/' + this.blog_post.author).then(response => {
                    this.author = response.body;
                    console.log(this.author)
                }, response => {})

            }, response => {})
        },
        data() {
            return {
                title: 'posts',
                blog_post: [],
                author: {}
            };
        },
    };
</script>

<style>

</style>
