<template>

    <v-container fluid="fluid">
      <v-row>
        <v-col xs10 offset-xs1>
          <canvas id="myCanvas" width="200" height="100"
                  style="border:1px solid #000000;">
          </canvas>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'home-canvas',
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
