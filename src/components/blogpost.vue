<template>
    <div>
        {{ post.title.rendered }}
        <div v-html="post.content.rendered"></div>
        Some Text here
    </div>
</template>

<script>
    export default {
        name: 'blog-post',
        prop: ['blogPost'],
        computed: {
        }
    }
</script>

<style>


</style>