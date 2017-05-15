<template>
    <div>
        {{ post.title.rendered }} by {{ post.author }}
        <div v-html="post.content.rendered"></div>
        Some Text here
    </div>
</template>

<script>
    export default {
        name: 'blog-post',
        props: ['post'],
        created () {
            console.log(this.post)
        }

    }
</script>

<style>


</style>