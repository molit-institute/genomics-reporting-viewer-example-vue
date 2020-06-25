import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills as stencilComponentsApplyPolyfills, defineCustomElements as stencilComponentsDefineCustomElements } from 'stencil-components/loader';
import { applyPolyfills as trystencilApplyPolyfills, defineCustomElements as trystencilDefineCustomElements } from 'trystencil/loader';

Vue.config.productionTip = false;

stencilComponentsApplyPolyfills().then(() => {
  stencilComponentsDefineCustomElements();
});

trystencilApplyPolyfills().then(() => {
  trystencilDefineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app');
