<template>
  <div style="background-color: #5CD1D6" class="center-stuff ">
    <canvas id="myCanvas" width="200" height="200">
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
        top: 100,
        fill: 'red',
        width: 20,
        height: 20,
        angle: 45
      })

      canvas.add(rect)
      canvas.selection = false
      rect.set('selectable', false)
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
