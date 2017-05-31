<template>
  <div class="canvasContainer">
    <canvas id="myCanvas" width="1143px" height="450px"></canvas>
  </div>
</template>

<script>
  import fabric from 'fabric/dist/fabric.require.js';

  export default {
    mounted () {
//Magic that allows Vue Router to understand how to route
        let computerClick = (function (evt) {
            console.log("Computer clicked");
            this.$router.push('/messages');
        }).bind(this);

      let canvas = new fabric.Canvas('myCanvas');
        canvas.selection = false;
        canvas.hoverCursor = 'default';

        let bookClick = (function (evt) {
            console.log("Book Clicked");
            this.$router.push('/messages');
        }).bind(this);

        let calenderClick = (function (evt) {
            console.log("Calender Clicked");
            this.$router.push('/events');
        }).bind(this);

        let holderClick = (function (evt) {
            console.log("Holder Clicked");
            this.$router.push('/events');
        }).bind(this);

        let phoneClick = (function (evt) {
            console.log("Phone Clicked");
            this.$router.push('/contact');
        }).bind(this);

        let portraitClick = (function (evt) {
            console.log("Portrait Clicked");
            this.$router.push('/about');
        }).bind(this);

        let vaseClick = (function (evt) {
            console.log("Calender Clicked");
            this.$router.push('/events');
        }).bind(this);

        let iPhoneClick = (function (evt) {
            console.log("Calender Clicked");
            this.$router.push('/app');
        }).bind(this);

        fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_poster.png', function (poster) {
            poster.setLeft(250);
            poster.setTop(-80);
            poster.selectable = false;
            canvas.add(poster);
// eslint-disable-next-line quotes
            console.log('Added Poster');
            canvas.renderAll()
        });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_desk.png', function (desk) {
        desk.setLeft(0);
        desk.setTop(132);
        desk.selectable = false;
        canvas.add(desk);
// eslint-disable-next-line quotes
        console.log('Added Desk');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_computer.png', function (computer) {
        computer.setLeft(400);
        computer.setTop(120);
        computer.hasControls = false;
        computer.hasBorders = false;
        computer.lockMovementX = computer.lockMovementY = true;
        computer.on('mouseup', computerClick);
        canvas.add(computer);
// eslint-disable-next-line quotes
        console.log('Added Computer');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_book.png', function (book) {
        book.setLeft(125);
        book.setTop(375);
        book.hasControls = false;
        book.hasBorders = false;
        book.lockMovementX = book.lockMovementY = true;
        book.on('mouseup', bookClick);
        canvas.add(book);
// eslint-disable-next-line quotes
        console.log('Added Book');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_calender.png', function (calender) {
        calender.setLeft(700);
        calender.setTop(50);
          calender.hasControls = false;
          calender.hasBorders = false;
          calender.lockMovementX = calender.lockMovementY = true;
          calender.on('mouseup', calenderClick);
        canvas.add(calender);
// eslint-disable-next-line quotes
        console.log('Added Calender');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_holder.png', function (holder) {
        holder.setLeft(700);
        holder.setTop(275);
          holder.hasControls = false;
          holder.hasBorders = false;
          holder.lockMovementX = holder.lockMovementY = true;
          holder.on('mouseup', holderClick);
        canvas.add(holder);
// eslint-disable-next-line quotes
        console.log('Added Holder');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_phone.png', function (phone) {
        phone.setLeft(850);
        phone.setTop(300);
          phone.hasControls = false;
          phone.hasBorders = false;
          phone.lockMovementX = phone.lockMovementY = true;
          phone.on('mouseup', phoneClick);
        canvas.add(phone);
// eslint-disable-next-line quotes
        console.log('Added Phone');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_portrait.png', function (portrait) {
        portrait.setLeft(125);
        portrait.setTop(50);
          portrait.hasControls = false;
          portrait.hasBorders = false;
          portrait.lockMovementX = portrait.lockMovementY = true;
          portrait.on('mouseup', portraitClick);
        canvas.add(portrait);
// eslint-disable-next-line quotes
        console.log('Added Portrait');
        canvas.renderAll()
      });


      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_vase.png', function (vase) {
        vase.setLeft(250);
        vase.setTop(240);
          vase.hasControls = false;
          vase.hasBorders = false;
          vase.lockMovementX = vase.lockMovementY = true;
          vase.on('mouseup', vaseClick);
        canvas.add(vase);
// eslint-disable-next-line quotes
        console.log('Added Vase');
        canvas.renderAll()
      });

      fabric.Image.fromURL('wp-content/themes/AshleyTLeeTheme/dist/canvas_iphone.png', function (iPhone) {
        iPhone.setLeft(600);
        iPhone.setTop(355);
        iPhone.scale(.5);
          iPhone.hasControls = false;
          iPhone.hasBorders = false;
          iPhone.lockMovementX = iPhone.lockMovementY = true;
          iPhone.on('mouseup', iPhoneClick);
        canvas.add(iPhone);
// eslint-disable-next-line quotes
        console.log('Added iPhone');
        canvas.renderAll()
      });
    },
    name: 'home-canvas',
      methods() {

      }
  }
</script>

<style scoped>


@media only screen and (min-width : 1024px) {

  .canvasContainer {
    background-color: #8ad0d5;
    display: flex;
    justify-content: center
  }
}

@media only screen and (max-width : 1023px) and (min-width: 426px) {
  #myCanvas {
    display: none;
  }

  .canvasContainer {
    display: none;
  }

}

@media only screen and (max-width : 425px) {

  #myCanvas {
    display: none;
  }

  .canvasContainer {
    display: none;
  }

}
</style>
