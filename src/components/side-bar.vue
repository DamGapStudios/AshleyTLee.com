<template>
    <div id="side-bar">
        <div class="header">Recent Posts</div>
        <router-link :to="'/blogpage/' + blog.id" v-for="blog in post" class="post">{{ blog.title.rendered }} <br/> <span style="font-size: smaller">{{ toDate(blog.date) }}</span></router-link>
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
        methods: {
            toDate: function (date) {
                let data = new Date(date);
                return data.toDateString();
            }
        }
    };
</script>

<style scoped>

    #side-bar{
        display: flex;
        flex-direction: column;
    }

    .header {
        font-size: 20pt;
        text-align: center;
    }

    .post {
        margin: 10px 0;
        padding: 10px;
        background: #5CD1D6;
        color: white;
        border: white 2px solid;
        text-align: center;
    }

    .post:hover {
        cursor: pointer;
        box-shadow: 1px 1px 15px 1px grey;
    }
</style>
