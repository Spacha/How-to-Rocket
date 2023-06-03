import katexDirective from './directives/katex-directive';
import KatexElement from './components/KatexElement.vue';

/**
 * A Vue directive for rendering Katex equations.
 * 
 * @see https://github.com/lucpotage/vue-katex/blob/master/src/plugin.js
 * 
 * @param {*} globalOptions 
 * @returns 
 */
const VueKatex = {
  install: (app, options) => {
    const globalOptions = (options && options.globalOptions) || {};
    const vKatex = katexDirective(globalOptions);
    app.directive(vKatex.name, vKatex.directive);
    app.component(KatexElement.name, KatexElement);
    app.provide('$katexOptions', globalOptions);
  },
};

// if (typeof window !== 'undefined' && window.app) {
//   window.app.use(plugin);
// }

export default VueKatex;