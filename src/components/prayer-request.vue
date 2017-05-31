<template>
    <div id="prayer-request">
        <div class="text">NEW: Prayer Request Book - by Ashley T Lee! Available now on Amazon.</div>
        <a style="font-size: x-large" href="" class="about-button">See More</a>
        <prayer-request-book class="book"></prayer-request-book>
        <prayer-request-text class="styledText"></prayer-request-text>
    </div>
</template>

<script>
    import PrayerRequestBook from "./prayerRequest-book.vue";
    import PrayerRequestText from "./prayerRequest-text.vue";
    export default {
        components: {
            PrayerRequestText,
            PrayerRequestBook},
        name: 'prayer-request',
        data() {
            return {
                title: 'prayer-request',
            };
        },
    };
</script>

<style scoped>


 .about-button:hover{
     background: #8fdce0;
 }

 @media only screen and (min-width : 1160px) {
     #prayer-request{
         text-align: center;
         font-size: 30px;
         background-color: #4B7FC0;
         color: white;
         padding: 20px 5% 0;
         display: flex;
         flex-direction: row;
         align-items: center;
     }

     .about-button{
         padding: 11px 10px ;
         color: white;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
         font-size: 14pt;
         flex-basis: 150px;
     }

     .book {
         flex-basis: 15%;
     }

     .styledText {
         flex-basis: 20%;
         fill:#FFFFFF;
         font-family:'Monthoers-Vintage';
         font-size:49px;
     }

     .text {
     }
 }

 @media only screen and (max-width : 1159px) and (min-width: 426px) {
     #prayer-request{
         text-align: center;
         font-size: 30px;
         background-color: #4B7FC0;
         color: white;
         padding: 20px 5%;
         display: flex;
         flex-direction: column;
     }

     .about-button{
         color: white;
         padding: 10px 11px;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
     }

     .about-button{
         padding: 11px 10px ;
         color: white;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
         font-size: 14pt;
     }

     .book {
         flex-basis: 15%;
     }

     .styledText {
         flex-basis: 20%;
         fill:#FFFFFF;
         font-family:'Monthoers-Vintage';
         font-size:49px;
     }

     .text {
         flex-basis: 25%;
     }
 }

 @media only screen and (max-width : 425px) {
     #prayer-request{
         text-align: center;
         font-size: 30px;
         background-color: #4B7FC0;
         color: white;
         padding: 20px 5%;
         display: flex;
         flex-direction: column;

     }

     .about-button{
         color: white;
         padding: 10px 11px;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
     }

     .about-button{
         padding: 11px 10px ;
         color: white;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
         font-size: 14pt;
     }

     .book {
         flex-basis: 15%;
     }

     .styledText {
         flex-basis: 20%;
         fill:#FFFFFF;
         font-family:'Monthoers-Vintage';
         font-size:49px;
     }

     .text {
         flex-basis: 25%;
     }
 }
</style>
