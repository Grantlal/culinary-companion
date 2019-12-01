import Vue from 'vue'
import App from './App.vue'

// Andrew
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)
import 'vue-material/dist/theme/black-green-light.css'
// Andrew

// more grace import third package !
import moment from 'moment'
import axios from 'axios'
import curvejs from 'curvejs'
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});

