<template>
  <div style="background-color: #8ad0d5; display: flex; justify-content: center" class="center-stuff">
    <canvas id="myCanvas" width="1143px" height="450px"></canvas>
  </div>
</template>

<script>
  import fabric from 'fabric/dist/fabric.require.js'

  export default {
    mounted () {
      let canvas = new fabric.StaticCanvas('myCanvas');

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_desk.png', function (desk) {
        desk.setLeft(0);
        desk.setTop(132);
        canvas.add(desk);
// eslint-disable-next-line quotes
        console.log('Added Desk');
        canvas.renderAll()
      });

        fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_poster.png', function (poster) {
            poster.setLeft(250);
            poster.setTop(-80);
            canvas.add(poster);
// eslint-disable-next-line quotes
            console.log('Added Poster');
            canvas.renderAll()
        });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_computer.png', function (computer) {
        computer.setLeft(350);
        computer.setTop(120);
        canvas.add(computer);
// eslint-disable-next-line quotes
        console.log('Added Computer');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_book.png', function (book) {
        book.setLeft(125);
        book.setTop(375);
        canvas.add(book);
// eslint-disable-next-line quotes
        console.log('Added Book');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_calender.png', function (calender) {
        calender.setLeft(700);
        calender.setTop(50);
        canvas.add(calender);
// eslint-disable-next-line quotes
        console.log('Added Calender');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_holder.png', function (holder) {
        holder.setLeft(700);
        holder.setTop(275);
        canvas.add(holder);
// eslint-disable-next-line quotes
        console.log('Added Holder');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_phone.png', function (phone) {
        phone.setLeft(850);
        phone.setTop(300);
        canvas.add(phone);
// eslint-disable-next-line quotes
        console.log('Added Phone');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_portrait.png', function (portrait) {
        portrait.setLeft(125);
        portrait.setTop(50);
        canvas.add(portrait);
// eslint-disable-next-line quotes
        console.log('Added Portrait');
        canvas.renderAll()
      });


      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_vase.png', function (vase) {
        vase.setLeft(250);
        vase.setTop(240);
        canvas.add(vase);
// eslint-disable-next-line quotes
        console.log('Added Vase');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_iphone.png', function (iPhone) {
        iPhone.setLeft(600);
        iPhone.setTop(355);
        iPhone.scale(.5);
        canvas.add(iPhone);
// eslint-disable-next-line quotes
        console.log('Added iPhone');
        canvas.renderAll()
      });

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

@media only screen and (min-width : 1024px) {

}

@media only screen and (max-width : 1023px) and (min-width: 426px) {
  #myCanvas {
    display: none;
  }

}

@media only screen and (max-width : 425px) {

  #myCanvas {
    display: none;
  }

}
</style>
