import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue'
import Vue from 'vue';
import store from './store';
import VueTheMask from 'vue-the-mask';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTheMask);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
