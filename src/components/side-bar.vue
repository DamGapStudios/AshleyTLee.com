<template>
    <div id="side-bar">
        <div v-for="blog in post">{{ blog.title.rendered }}</div>
    </div>
</template>

<script>
    export default {
        name: 'side-bar',
        props: ['post'],
        data() {
            return {
                title: 'side-bar',
            };
        },
    };
</script>

<style>

</style>
