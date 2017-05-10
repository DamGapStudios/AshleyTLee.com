<template>
  <div style="background-color: #5CD1D6; display: flex; justify-content: center" class="center-stuff">
    <canvas id="myCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
  import fabric from 'fabric/dist/fabric.require.js'

  export default {
    mounted () {
      let canvas = new fabric.Canvas('myCanvas');
      let imgBook = document.getElementById('canvasBook');
      let imgInstance = new fabric.Image(imgBook, {
        left: 100,
        top: 100,
        height: 50,
        width: 60
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/ashley_portrait.png', function (oImg) {
        oImg.setLeft(0);
        oImg.setTop(0);
        canvas.add(oImg);
// eslint-disable-next-line quotes
        console.log('Added Image');
        canvas.renderAll()
      });

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
