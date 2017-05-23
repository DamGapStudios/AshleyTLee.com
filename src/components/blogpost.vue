<template>
    <div class="blog">
        <div class="title">{{ post.title.rendered }}</div>
        <div class="content" v-html="post.excerpt.rendered"></div>
        <router-link :to="'/blogpage/' + post.id" class="readMore" >Read More</router-link>
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

<style scoped>

    @media only screen and (min-width : 1024px) {

        .title {
            font-size: 24pt;
        }

        .content {
            font-size: 14pt;
        }

        .readMore{
            background-color: #5CD1D6;
            text-align: center;
            padding: 10px ;
            color: white;
        }

        .blog{
            margin: 20px 0;
        }

    }

    @media only screen and (max-width : 1023px) and (min-width: 426px) {

        .title {
            font-size: 24pt;
        }

        .content {
            font-size: 14pt;
        }

        .readMore{
            background-color: #5CD1D6;
            text-align: center;
            padding: 10px ;
            color: white;
        }

        .blog{
            margin: 20px 0;
        }
    }

    @media only screen and (max-width : 425px) {

        .title {
            font-size: 24pt;
        }

        .content {
            font-size: 14pt;
        }

        .readMore{
            background-color: #5CD1D6;
            text-align: center;
            padding: 10px;
            color: white;
            display:block;
        }

        .blog{
            margin: 20px 0;
        }
    }

</style>