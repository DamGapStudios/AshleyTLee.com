<template>
    <div id="audio-component">
        <div class="audio-image" :style="{ backgroundImage: 'url(' + image + ')' }">
            <audio controls style="width: 200px; margin-top: 168px">
                <source :src="audio.sermon_audio" type="audio/mpeg">
                Your browser does not support the audio element
            </audio>
        </div>
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
        };
        },
        props: ['audio'],
        computed: {
            image: function () {
                this.$http.get('http://ashleytlee.com/wp-json/wp/v2/media/' + this.audio.featured_media).then(response => {
                    return response.body.guid.rendered;
                })
            }
        },
    };
</script>

<style scoped>
    .audio-image{
        width: 200px;
        height: 200px;
    }
</style>
