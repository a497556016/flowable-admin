import Vue from 'vue'
import App from './App.vue'

import SnackBar from "./components/SnackBar";
import Dialog from "./components/Dialog";

import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(SnackBar, vuetify);
Vue.use(Dialog, vuetify);

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
