import katex from 'katex';
import renderMathInElement from 'katex/dist/contrib/auto-render.js';
const merge = require('deepmerge');

/**
 * A Vue directive for rendering Katex equations.
 * 
 * @see https://github.com/lucpotage/vue-katex/blob/master/src/directives/katex-directive.js
 * 
 * @param {*} globalOptions 
 * @returns 
 */
const katexDirective = (globalOptions) => ({
  name: 'katex',
  directive: (el, binding) => {
    const argOptions = (binding.value && binding.value.options) || {};
    const allOptions = merge(globalOptions, argOptions);

    if (binding.arg && binding.arg === 'auto') {
      renderMathInElement(el, allOptions);
    } else {
      const expression = binding.value.expression || binding.value;
      const displayMode = {};
      if (binding.arg === 'display') {
        displayMode.displayMode = true;
      }
      const options = merge(allOptions, displayMode);

      katex.render(expression, el, options);
    }
  },
});

export default katexDirective;