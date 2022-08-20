import Vue from 'vue'
import VueKatex from 'vue-katex'

// Stylesheets
//import 'katex/dist/katex.min.css'
// If you wanna use BS, you need jquery, yak!
// import 'bootstrap'

// Import components
import Home from './components/Home.vue'

import Cover from './components/Cover.vue'
import BottomSticky from './components/BottomSticky.vue'
import Figure from './components/Figure.vue'

Vue.component('Cover', Cover)
Vue.component('BottomSticky', BottomSticky)
Vue.component('Figure', Figure)
/*
Vue.component('NoConnectionToaster', NoConnectionToaster)
Vue.component('ReactiveChart', ReactiveChart)
Vue.component('TestChart2', TestChart2)
Vue.component('TestChart', TestChart)
*/

// Import styles
// import '../sass/app.scss'

// Register axios as part of the app
// Vue.prototype.$http = axios

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

Vue.use(VueKatex, {
	globalOptions: {
		// Global KaTeX options here...
	}
})

// Create the application
new Vue({
	render: h => h(Home),
}).$mount("#app");