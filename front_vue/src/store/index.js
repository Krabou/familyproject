import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import friend from "./friend";
import message from "./message";

// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules

Vue.use(Vuex);



export default new Vuex.Store({
  modules: {
    user,
    friend,
    message
  }
});
