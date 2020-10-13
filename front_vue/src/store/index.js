import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import friend from "./friend";
import message from "./message";
// Le store permet de partager des informations quelque soit leur place dans l'arborescence 
// On peut y creer des modules
// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules

Vue.use(Vuex);



export default new Vuex.Store({
  // Store est composé de ces differents modules
  modules: {
    user,
    friend,
    message
  }
});
