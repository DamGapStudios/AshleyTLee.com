<template>
    <div id="audio-component">
        <img class="audio-image" :src.sync="images" v-if="loaded">
        <div class="background" v-if="loading">Loading....</div>
            <audio controls style="width: 200px;">
                <source :src="audio.sermon_audio" type="audio/mpeg">
                Your browser does not support the audio element
            </audio>
        <div v-html="audio.title.rendered"></div><br/>
        <span style="font-size: 12px">{{ audio.date }}</span>
    </div>
</template>

<script>
    export default {
        name: 'audio-component',
        data() {
            return {
                title: 'audio-component',
                loaded: false,
                loading: true,
        };
        },
        props: ['audio', 'images'],
        created() {
            console.log(this.audio.featured_media);

            if(isNaN(this.audio.featured_media)){
                console.log("Not number");
                this.loaded = true;
                this.loading = false
            }
            else if (this.audio.featured_media === 0) {
                this.images = 'http://www.ashleytlee.com/wp-content/uploads/2017/06/ashley_portrait.png';
                console.log("YES");
                this.loaded = true;
                this.loading = false
            }
            else {
                console.log("NO");
                this.$http.get('http://ashleytlee.com/wp-json/wp/v2/media/' + this.audio.featured_media).then(response => {
                    this.images = response.body.media_details.sizes.thumbnail.source_url;
                    this.loaded = true;
                    this.loading = false
                })
            }
        }
    };
</script>

<style scoped>
    .audio-image{
        width: 200px;
        height: 200px;
        overflow: hidden;
        background: transparent;
    }
    .background {
        width: 200px;
        height: 200px;
        background: #a3e1e5;
    }
</style>
