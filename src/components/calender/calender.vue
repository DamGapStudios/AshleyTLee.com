<template>
    <div class="calender">
        <div class="calender day" v-for="day in month">
            {{ day }}
        </div>
    </div>
</template>

<script>

    export default {
        name: 'calender-full',
        data () {
            return {
                month: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            }
        }
    }
</script>

<style scoped>
    .calender {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
        grid-auto-flow: row;
        margin: 0 5%;
    }

    .calender.day {
        background-color: #8FDCE0;
    }

</style>
