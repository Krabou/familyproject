import axios from "axios";
import auth from "@/auth";
import { apiHandler } from "./../api/handler";

const handler = apiHandler();

export default {
  namespaced: true,
  // les données du store
  state: {
    users: [],
    currentUser: null,
  },
  // les getters permettent d'acceder aux données
  getters: {
    all(state) {
      return state.users;
    },
    current(state) {
      return state.currentUser;
    },
  },
  // https://vuex.vuejs.org/fr/api/#mutations
  // RAPPEL : les mutations (synchrones) sont commit
  // les mutations permettent de faire un changement synchrone 
  //exemple pour incrementer un compteur 
  mutations: {
    // les mutations prennent toujours le state en 1er argument, et la valeur d'update en 2nd argument
    setCurrent(state, infos) {
      console.log("infos ?", infos);
      state.currentUser = infos; // on créé un nouvel objet tout neuf, contenant les infos de l'user qui vient de se signin
    },
    setUsers(state, users) {
      state.users = users;
    },
    unsetCurrent(state) {
      console.log("signout from store");
      state.currentUser = null;
    },
  },
  //https://vuex.vuejs.org/fr/api/#actions
  // RAPPEL : les actions (asynchrones) sont dispatch
  // c'est pour les actions asynchrone
  actions: {
    signin(context, userInfos) {
      return new Promise((resolve, reject) => {
        handler
          .post("/auth/signin", userInfos)
          .then((res) => {
            auth.setLocalAuthToken(res.data.token);
            // si cest bon on ecrit le token dans le local storage
            // context.commit permet de modifier le state du store
            // de façon synchrone
            console.log(res.data.user);
            // On ecrit dans la reponse axios le currentUser res.data.user l'utilisateur qui a été retourné depuis le back end
            context.commit("setCurrent", res.data.user);
            resolve(res);
          })
          .catch((err) => {
            auth.deleteLocalAuthToken();
            context.commit("setCurrent", null);
            reject(err);
          });
      });
    },
    async signup(context, userInfos) {
      console.log("fooo");
      // ci-dessus: context représente tout le store, il est obligatoire...
      try {
        await handler.post("/auth/signup", userInfos);
      } catch (err) {
        // problème au signup ...
        const method = err.response.status.toString().startsWith("4")
          ? "warn"
          : "error"; // en fonction du code de réponse http...
        console[method](err.response.data); // détermine si on utilise console.warn OU console.error pour log la réponse
      }
    },
    signout(context) {
      // todo : kill token server side
      auth.deleteLocalAuthToken();
      context.commit("unsetCurrent");
      console.log("router ???", this.$router);
      // vm.$router.push({ path: signinPath }).catch((error) => { // si un erreur survient ...
      //   console.info(error.message); // todo : afficher le message dans une alert box
      // });
    },
    getUserByToken(context) {
      axios
        .get(process.env.VUE_APP_BACKEND_URL + "/auth/get-user-by-token")
        .then((res) => context.commit("setCurrent", res.data))
        .catch((err) => console.error(err.message));
    },
    getAll(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("/users/")
          .then((res) => {
            context.commit("setUsers", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
            resolve(res); // promesse tenue !
          })
          .catch((err) => {
            reject(err); // promesse non tenue !
          });
      });
    },
    update(context, userInfos) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`/users/${userInfos._id}`, userInfos)
          .then((res) => {
            context.commit("setCurrent", res.data);
            resolve(res);
          })
          .catch((err) => {
            auth.deleteLocalAuthToken();
            context.commit("setCurrent", null);
            reject(err);
          });
      });
    },
    async updateAvatar(context, avatarFile) {
      try {
        const updatedUser = await axios.patch(
          `/users/${context.getters.current._id}/avatar`,
          avatarFile
        );
        context.commit("setCurrent", updatedUser.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
