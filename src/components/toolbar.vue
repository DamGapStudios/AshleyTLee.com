<template>
  <div>
    <div class="blur"></div>
    <div class="navbar large">
      <img alt='Ashley Logo' src="wp-content/themes/AshleyTLeeTheme/dist/ashley_logo.png" style="height: 80px; padding-left: 30px">
      <div class="toolbar-container">
        <router-link to="/" class="toolbar-link" tag="div" exact>Home</router-link>
        <router-link to="/about" class="toolbar-link" tag="div" exact><nav-about class="toolbar-icon"></nav-about>About</router-link>
        <router-link to="/messages" class="toolbar-link" tag="div" exact><nav-messages class="toolbar-icon"></nav-messages>Messages</router-link>
        <router-link to="/app" class="toolbar-link" tag="div" exact><nav-app class="toolbar-icon"></nav-app>App</router-link>
        <router-link to="/events" class="toolbar-link" tag="div" exact><nav-events class="toolbar-icon"></nav-events>Events</router-link>
        <router-link to="/contact" class="toolbar-link" tag="div" exact><nav-contact class="toolbar-icon"></nav-contact>Contact</router-link>
        <router-link to="/blogpage" class="toolbar-link" tag="div" exact><nav-blog class="toolbar-icon"></nav-blog>Blog</router-link>
          <router-link to="/giving" class="toolbar-link" tag="div" exact><nav-giving class="toolbar-icon"></nav-giving>Giving</router-link>
        <!--<router-link  v-for="link in this.links" :key="link.name" class="toolbar-link" :to="link.path" tag="div" exact>{{ link.name }}</router-link>-->
        <!--<social-giving class="social"></social-giving>-->
        <social-instagram class="social"></social-instagram>
        <social-facebook class="social"></social-facebook>
        <social-twitter class="social"></social-twitter>
      </div>
    </div>

    <div class="navbar mobile">
      <div>
        <button v-on:click="show = !show" class="menubutton">
          Menu
        </button>
        <img alt='Ashley Logo' src="wp-content/themes/AshleyTLeeTheme/dist/ashley_logo.png" class="logo">
      </div>
      <transition name="expand">
        <div v-if="show" class="toolbar-container">
          <router-link  v-for="link in this.links" :key="link.name" class="toolbar-link" :to="link.path" tag="div" v-on:click="show = !show" exact>{{ link.name }}</router-link>
          <div style="display: inline-flex; flex-direction: row;justify-content: space-around;  align-items: center">
            <social-instagram class="social"></social-instagram>
            <social-facebook class="social"></social-facebook>
            <social-twitter class="social"></social-twitter>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import SocialInstagram from "./icons/social_instagram.vue";
    import SocialFacebook from "./icons/social_facebook.vue";
    import SocialTwitter from "./icons/social_twitter.vue";
    import SocialGiving from "./icons/social_giving.vue";
    import NavAbout from "./icons/nav-about.vue";
    import NavMessages from "./icons/nav-message.vue";
    import NavApp from "./icons/nav-app.vue";
    import NavEvents from "./icons/nav-events.vue";
    import NavContact from "./icons/nav-contact.vue";
    import NavBlog from "./icons/nav-blog.vue";
    import NavGiving from "./icons/nav-giving.vue";

  export default {
      components: {
          NavGiving,
          NavBlog,
          NavContact,
          NavEvents,
          NavApp,
          NavMessages,
          NavAbout,
          SocialGiving,
          SocialTwitter,
          SocialFacebook,
          SocialInstagram},
    name: 'tool-bar',
    data () {
      return {
          show: false,
          links: [
              {
                  path: '/',
                  name: 'Home'
              },
              {
                  path: '/about',
                  name: 'About'
              },
              {
                  path: '/messages',
                  name: 'Messages'
              },
              {
                  path: '/app',
                  name: 'App'
              },
              {
                  path: '/events',
                  name: 'Events'
              },
              {
                  path: '/contact',
                  name: 'Contact'
              },
              {
                  path: '/blogpage',
                  name: 'Blog'
              },
              {
                  path: '/giving',
                  name: 'Giving'
              }
          ]

      }
    }
  }
</script>
<style>
    .icon {    height: 35px}
</style>
<style scoped>

  @media only screen and (min-width : 1400px) {
    /* Styles */

    .mobile {
      display: none;
    }

    .navbar {
      background: transparent;
      padding: 5px;
      height: 90px;
      opacity: .75;
      z-index: 3;
      position: fixed;
      top: 0;
      width: 100%;

    }

    .blur {
      background-color: #a8dbdf;
      filter: blur(0px);
      z-index: 2;
      position: fixed;
      top: 0;
      width: 100%;
      height: 90px;
      opacity: .9;
    }

    .toolbar-container {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      vertical-align: middle;
      float: right;
      padding: 18px;
    }

    .toolbar-link {
      color: white;
      padding: 5px 10px;
      margin: 4px 14px;
      font-size: 12pt;
      display: inline-flex;
      align-items: center;
    }

    .toolbar-icon {
      float: left;
      height: 35px;
      fill: white;
    }

    .toolbar-link:hover {
      background: #a3e1e5;
      border: white 2px solid;
      cursor: pointer;
      margin: 2px 12px;
      box-shadow: 1px 1px 15px 1px #fff;
    }

    .router-link-active {
      background: #a3e1e5;
      border: white 2px solid;
      margin: 2px 12px;
      /*font-size: 14pt*/
    }

    .logo{
      height: 80px; float: right; margin-right: 40%
    }
  }

  @media only screen and (max-width : 1399px) and (min-width: 426px) {
    /* Styles */
    .large {
      display: none;
    }
    .navbar {
      z-index: 3;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .blur {
      background-color: #a8dbdf;
      filter: blur(0px);
      z-index: 2;
      position: fixed;
      top: 0;
      width: 100%;
      height: 90px;
      opacity: .9;
    }

    .toolbar-link {
      color: white;
      font-size: 12pt;
      text-align: center;
      margin: 5px;
    }

    .toolbar-link:hover{
      cursor: pointer;
    }

    .toolbar-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #a8dbdf;
      justify-content: center;
      opacity: 1;
    }

    .router-link-active {
      background: #a3e1e5;
      border: white 2px solid;
      margin: 3px 5px;
      /*font-size: 14pt*/
    }

    .exapnd-enter-active, .expand-leave-active {
      transition: opacity .5s
    }

    .expand-enter, .expand-leave-to /* .fade-leave-active in <2.1.8 */
    {
      opacity: 0
    }

    .menubutton{
        float: left;
      height: 90px;
      background-color: transparent;
      align-items: flex-start;
      text-align: center;
      cursor: default;
      color: white;
      padding: 2px 6px 3px;
      border: none;
    }

    .menubutton:focus{
      outline: none;
    }

    .logo{
      height: 80px; float: right; margin-right: 50%
    }
  }


  @media only screen and (max-width : 425px) {
    /* Styles */
    .large {
      display: none;
    }
    .navbar {
      z-index: 3;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .blur {
      background-color: #a8dbdf;;
      filter: blur(0px);
      z-index: 2;
      position: fixed;
      top: 0;
      width: 100%;
      height: 90px;
      opacity: .9;
    }

    .toolbar-link {
      color: white;
      font-size: 12pt;
      text-align: center;
      margin: 5px;
    }

    .toolbar-link:hover{
      cursor: pointer;
    }

    .toolbar-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-color: #a8dbdf;
      justify-content: center;
      opacity: 1;
    }

    .router-link-active {
      background: #a3e1e5;
      border: white 2px solid;
      margin: 3px 5px;
      /*font-size: 14pt*/
    }

    .exapnd-enter-active, .expand-leave-active {
      transition: opacity .5s
    }

    .expand-enter, .expand-leave-to /* .fade-leave-active in <2.1.8 */
    {
      opacity: 0
    }

    .menubutton{
        float: left;
      height: 90px;
      background-color: transparent;
      align-items: flex-start;
      text-align: center;
      cursor: default;
      color: white;
      padding: 2px 6px 3px;
      border: none;
    }

    .menubutton:focus{
      outline: none;
    }

    .logo{
      height: 70px; float: right; margin-right: 30%
    }
  }

  .social {
    fill: white;
    margin: auto 2px;
  }
</style>
