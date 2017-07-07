<template>
    <div class="blog">
        <div class="FeatImage"><img v-bind:src="post.better_featured_image.media_details.sizes.medium_large.source_url" v-bind:alt="post.better_featured_image.description" style="width: 75%"/></div>
        <!--<div class="FeatImage">{{ post.better_featured_image.media_details.sizes.medium.source_url }}</div>-->
        <div class="title">{{ toDate(post.date) }} | {{ post.title.rendered }}</div>
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
            console.log(this.post.better_featured_image.media_details.sizes.medium.source_url)
        },
        methods: {
            toDate: function (date) {
                let data = new Date(date);
                return data.toDateString();
            }
        }
    }
</script>

<style scoped>

    .blog {
        background-color: white;
    }

    @media only screen and (min-width : 1160px) {

        .title {
            font-size: 24pt;
            color: #56D1D7;
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

        .readMore:hover{
            background: #8fdce0;
        }

        .blog{
            margin: 20px 0;
        }

    }

    @media only screen and (max-width : 1159px) and (min-width: 426px) {

        .title {
            font-size: 24pt;
            color: #56D1D7;
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