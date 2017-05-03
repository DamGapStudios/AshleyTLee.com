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

//Define vuex store
// const store = new Vuex.Store({
// 	state: {
// 		title: ''
// 	},
// 	mutations: {
// 		rtChangeTitle(state, value) {
// 			// mutate state
// 			state.title = value;
// 			document.title = (state.title ?state. title + ' - ' : '') + rtwp.site_name;
// 		}
// 	}
// })

//Create instatnce of main component
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

