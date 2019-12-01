import Vue from 'vue'
import App from './App.vue'

// Andrew
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)
import 'vue-material/dist/theme/black-green-light.css'
// Andrew

// more grace import third package !

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});

