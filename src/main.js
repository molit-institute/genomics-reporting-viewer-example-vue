import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { applyPolyfills, defineCustomElements } from '@molit/genomics-reporting-viewer/loader';

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false;

applyPolyfills().then(() => { 
    defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app');
