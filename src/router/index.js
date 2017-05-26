import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Messages from '../views/Messages.vue';
import App from '../views/App.vue';
import Events from '../views/Events.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
import Posts from '../views/Posts.vue';
import Giving from '../views/Giving.vue'
// import BlogTest from '../views/BlogTest.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blogpage',
      name: 'Blog',
      component: Blog
    },
      {
      path: '/giving',
      name: 'Giving',
      component: Giving
    },
      {
      path: '/blogpage/:id',
      name: 'Posts',
      component: Posts
    }
  ]
});
