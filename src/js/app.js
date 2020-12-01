import Vue from 'vue'
import VueKatex from 'vue-katex'

// Stylesheets
import 'katex/dist/katex.min.css'
// If you wanna use BS, you need jquery, yak!
// import 'bootstrap'

// Import components
import Home from './components/Home.vue'

import Cover from './components/Cover.vue'
import BottomSticky from './components/BottomSticky.vue'

Vue.component('Cover', Cover)
Vue.component('BottomSticky', BottomSticky)
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

Vue.use(VueKatex, {
	globalOptions: {
		// Global KaTeX options here...
	}
})

// Create the application
new Vue({
	render: h => h(Home),
}).$mount("#app");