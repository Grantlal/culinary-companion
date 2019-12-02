import Vue from 'vue'
import App from './App.vue'

// Andrew
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)
import 'vue-material/dist/theme/black-green-light.css'
import axios from 'axios'
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});

