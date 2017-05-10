import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueProgressiveImage from 'progressive-image/dist/vue';

import App from './App.vue';
import router from './router/index';
import Resource from 'vue-resource';

Vue.use(Resource);


// Vue.prototype.$http = axios;
//Use vue route

Vue.use( Vuex )
Vue.use( VueRouter )
Vue.use(VueProgressiveImage, {
	removePreview: true
})

Vue.config.debug = true;
Vue.config.devTools = true;

//Create instatnce of main component
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

