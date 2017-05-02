<template>
  <div style="background-color: #5CD1D6; display: flex; justify-content: center" class="center-stuff">
    <canvas id="myCanvas" width="500" height="500"></canvas>
    <!--<img src="../assets/canvas_book.png" id="canvasBook"/>-->
    <!--<img src="../assets/canvas_calender.png" id="canvasCalender"/>-->
    <!--<img src="../assets/canvas_computer.png" id="canvasComputer"/>-->
    <!--<img src="../assets/canvas_holder.png" id="canvasHolder"/>-->
    <!--<img src="../assets/canvas_phone.png" id="canvasPhone"/>-->
    <!--<img src="../assets/canvas_portrait.png" id="canvasPortrait"/>-->
    <!--<img src="../assets/canvas_poster.png" id="canvasPoster"/>-->
    <!--<img src="../assets/canvas_vase.png" id="canvasVase"/>-->
  </div>
</template>

<script>
  import {fabric} from 'fabric'

  export default {
    mounted () {
      let canvas = new fabric.Canvas('myCanvas')
      let imgBook = document.getElementById('canvasBook')
      let imgInstance = new fabric.Image(imgBook, {
        left: 100,
        top: 100,
        height: 50,
        width: 60
      })

      fabric.Image.fromURL('canvas_phone.png', function (oImg) {
        oImg.setLeft(0)
        oImg.setTop(0)
        canvas.add(oImg)
// eslint-disable-next-line quotes
        console.log('Added Image')
        canvas.renderAll()
      })

      canvas.add(imgInstance)
    },
    name: 'home-canvas',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
img{
  visibility: hidden;
}
</style>
