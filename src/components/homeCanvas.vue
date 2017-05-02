<template>
  <div style="background-color: #5CD1D6; display: flex; justify-content: center" class="center-stuff">
    <canvas id="myCanvas" width="200" height="500">
    </canvas>
  </div>
</template>

<script>
  import {fabric} from 'fabric'

  export default {
    mounted () {
      let canvas = new fabric.Canvas('myCanvas')

//       create a rectangle object
      let rect = new fabric.Rect({
        left: 100,
        top: 180,
        fill: '#F0F0F0',
        width: 100,
        height: 40
      })
      canvas.add(rect)
      canvas.selection = false
      rect.set('selectable', false)
      canvas.renderAll()
    },
    name: 'home-canvas',
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
