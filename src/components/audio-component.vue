<template>
    <div id="audio-component">
        <img class="audio-image" :src="images">
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
                loaded: false
        };
        },
        props: ['audio', 'images']
    };
</script>

<style scoped>
    .audio-image{
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        background: #4B7FC0;
    }
</style>
