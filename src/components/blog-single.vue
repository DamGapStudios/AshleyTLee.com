<template>
    <div id="blog-single">
        <div class="title">{{ post.title.rendered }}</div>
        <div class="author">By {{ author.name }}</div>
        <div class="post" v-html="post.content.rendered"></div>
    </div>
</template>

<script>
    export default {
        name: 'blog-single',
        props: ['post', 'author'],
        created(){
            console.log(this.post);
            console.log(this.author)
        },
        data() {
            return {
                title: 'blog-single',
            };
        },
    };
</script>

<style scoped>
    #blog-single {
        margin: 0 5%;
    }

    .title {
        font-size: 24pt;
    }

    .author {
        font-size: 20pt;
    }

    .post {
        font-size: 14pt;
    }

    @media only screen and (min-width : 1024px) {


    }

    @media only screen and (max-width : 1023px) and (min-width: 426px) {

        .title {
            text-align: center;
        }

    }

    @media only screen and (max-width : 425px) {

        .title {
            text-align: center;
        }

    }

</style>
