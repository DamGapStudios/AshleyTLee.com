<template>
    <div id="prayer-request">
        BNEW: Prayer Request Book - by Ashley T Lee! Available now on Amazon.
        <a style="font-size: x-large" href="" class="about-button">See More</a>
    </div>
</template>

<script>
    export default {
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
         padding: 100px 5%;
     }

     .about-button{
         padding: 11px 10px ;
         color: white;
         background-color: #5CD1D6;
         margin: 10px;
         text-align: center;
         font-size: 14pt;
     }
 }

 @media only screen and (max-width : 1159px) and (min-width: 426px) {
     #prayer-request{
         text-align: center;
         font-size: 30px;
         background-color: #4B7FC0;
         color: white;
         padding: 100px 5%;
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
 }

 @media only screen and (max-width : 425px) {
     #prayer-request{
         text-align: center;
         font-size: 30px;
         background-color: #4B7FC0;
         color: white;
         padding: 100px 5%;
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
 }
</style>
