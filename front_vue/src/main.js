import App from './App.vue';
import router from "./router";
import Vue from 'vue';
import store from "./store";
import "./axios.config";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faUserEdit} from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";


library.add(faFacebookSquare);
library.add(faLinkedin);
library.add(faTrashAlt);
library.add(faTwitterSquare);
library.add(faUserEdit);
library.add(faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$ebus = new Vue();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
       render: h => h(App)
  }).$mount("#app");
