import App from './App.vue';
import router from "./router";
import Vue from 'vue';

import store from "./store";
import "./axios.config";
//_____________________________________________________________
//FONT AWESOME  
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
  library
} from '@fortawesome/fontawesome-svg-core';

import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

import {
  faTrashAlt,
  faUserEdit,
  faBars,
  faSearch,
  faCamera,
  faTimes,
  faUserPlus,
  faMapMarkerAlt,
  faEdit,
  faSignOutAlt,
  faEnvelope,
  faUserTimes,
  faFlag,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';

library.add(faFacebookSquare, faLinkedin, faTrashAlt, faTwitterSquare, faUserEdit, faBars, faSearch, faCamera, faTimes, faUserPlus, faMapMarkerAlt, faEdit, faSignOutAlt, faEnvelope, faUserTimes, faFlag, faWindowClose);

Vue.component('font-awesome-icon', FontAwesomeIcon)


//_____________________________________________________

//VUE MOMENT
Vue.use(require('vue-moment'));
//_______________________________________________
//GOOGLE MAPS
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDw3DRRRgF19B144GHXzBCVFu3qpkyHGNs',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});
//________________________________________________
//SocketIO

// import VueSocketIO from 'vue-socket.io'

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://metinseylan.com:1992',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/my-app/" } //Optional options
// }))
//______________________________________________
//Messages flash
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);
//______________________________________________

Vue.config.productionTip = false

Vue.prototype.$ebus = new Vue();

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount("#app");