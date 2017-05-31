<template>
    <div id="Giving" class="top-more">
        <h1 class="ashley-blue-text"><nav-giving class="body-icon"></nav-giving>{{title}}</h1>
    </div>
</template>

<script>
    import NavGiving from "../components/icons/nav-giving.vue";
    export default {
        components: {NavGiving},
        name: 'Giving',
        data() {
            return {
                title: 'Giving',
            };
        },
    };
</script>

<style>

</style>
