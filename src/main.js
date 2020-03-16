import Vue from 'vue';
import App from './App.vue';

// Andrew
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
Vue.use(VueMaterial);
import 'vue-material/dist/theme/black-green-light.css';
import axios from 'axios';
import router from './router';
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

// eslint-disable-next-line no-new
new Vue({
	el: '#app',
	router,
	render: h => h(App),
});
Vue.component('async', function(resolve, reject) {
	setTimeout(function() {
		// Pass the component definition to the resolve callback
		resolve({
			template:
				'<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">',
		});
	}, 1000);
});

Vue.use(Auth0Plugin, {
	domain,
	clientId,
	onRedirectCallback: appState => {
		router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
	},
});
