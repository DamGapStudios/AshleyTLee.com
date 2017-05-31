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

<style>
 #prayer-request {
     text-align: center;
     font-size: 30px;
     background-color: #4B7FC0;
     color: white;
     padding: 100px 5%;
 }

 .about-button-container{
     display: block;
     margin-top: 10px;
 }

 .about-button.noside{
     margin-left: 1px;
     margin-right: 20px;
 }
 .about-button.noside:hover{
     background: #8fdce0;
 }

 .about-button{
     background-color: #5CD1D6;
     margin: 10px;
     text-align: center;
     font-size: 14pt;
 }


 .about-button:hover{
     background: #8fdce0;
 }

</style>
