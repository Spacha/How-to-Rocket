import { createApp } from 'vue';

import VueKatex from './plugins/vue-katex/vue-katex';

//import VueKatex from 'vue-katex';

// Stylesheets
//import 'katex/dist/katex.min.css';
// If you wanna use BS, you need jquery, yak!
// import 'bootstrap';

// Import components
import Home from './components/Home.vue';

import Cover from './components/Cover.vue';
import BottomSticky from './components/BottomSticky.vue';
import Figure from './components/Figure.vue';
import Equation from './components/Equation.vue';

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

// Vue.use(VueKatex, {
// 	globalOptions: {
// 		// Global KaTeX options here...
// 	}
// })

// Create the application
// new Vue({
// 	render: h => h(Home),
// }).$mount("#app");
const app = createApp(Home);

// register app-scoped components
app.component('Cover', Cover);
app.component('BottomSticky', BottomSticky);
app.component('Figure', Figure);
app.component('Equation', Equation);

// register plugins
app.use(VueKatex, {
  globalOptions: {
    /* Katex global options here... */
  }
});

app.mount('#app');
