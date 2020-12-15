import auth from "@/auth/";
import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */
        "../views/About.vue"
      )
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */
        "../views/Contact.vue"
      )
  },
  {
    path: "/carte",
    name: "Carte",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "carte" */
        "../views/Carte.vue"
      )
  },
  {
    path: "/ads",
    name: "Annonces",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "ads" */
        "../views/Ads.vue"
      )
  },
  {
    path: "/ads/:id",
    name: "Annonce",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "ad" */
        "../views/Ad.vue"
      )
  },
  {
    path: "/messagerie",
    name: "Messagerie",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "messagerie" */
        "../views/dashboard/Messagerie.vue"
      )
  },
  {
    path: "/message/:id",
    name: "Message",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "Message" */
        "../views/dashboard/Message.vue"
      )
  },
  {
    path: "/manageUser",
    name: "ManageUser",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "ManageUser" */
        "../views/dashboard/ManageUser.vue"
      )
  },
  {
    path: "/kids",
    name: "Kids",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "Kids" */
        "../views/dashboard/Kids.vue"
      )
  },
  {
    path: "/signin",
    name: "Signin",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "signin" */
        "../views/Signin.vue"
      )
  },
  {
    path: "/signup",
    name: "Signup",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "signup" */
        "../views/Signup.vue"
      )
  },
  {
    path: "/reinitialisation",
    name: "Reinitialisation",
    component: () =>
      import(
        /* webpackChunkName: "réinitialisation" */
        "../views/Reinitialisation.vue"
      )
  },
  {
    path: "/editUser/:id",
    name: "EditUser",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "editUser" */
        "../views/dashboard/EditUser.vue"
      )
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */
        "../views/dashboard/Dashboard.vue"
      )
  },
  {
    path: "/friends/:id",
    name: "Friends",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "friends" */
        "../views/dashboard/Friends.vue"
      )
  },
  {
    path: "/manageAds",
    name: "ManageAds",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "manageAds" */
        "../views/dashboard/ManageAds.vue"
      )
  },
  {
    path: "/manageAd/userAds/:id",
    name: "ManageAd",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "manageAd" */
        "../views/dashboard/ManageAd.vue"
      )
  },
  {
    path: "/formCreateAd",
    name: "FormCreateAd",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formCreateAd" */
        "../views/dashboard/FormCreateAd.vue"
      )
  },
  {
    path: "/formEditAd/:id",
    name: "FormEditAd",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formEditAd" */
        "../views/dashboard/FormEditAd.vue"
      )
  },
  {
    path: "/formEditAdUsers/:id",
    name: "FormEditAdUsers",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formEditAdUsers" */
        "../views/dashboard/FormEditAdUsers.vue"
      )
  },
  {
    path: "/profil/:id",
    name: "Profil",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "profil" */
        "../views/Profil.vue"
      )
  },
  {
    path: "/formEditProfil/:id",
    name: "FormEditProfil",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formEditProfil" */
        "../views/dashboard/FormEditProfil.vue"
      )
  },
  {
    path: "/formEditAvatar/:id",
    name: "FormEditAvatar",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formEditAvatar" */
        "../views/dashboard/FormEditAvatar.vue"
      )
  },
  {
    path: "/formEditParameters/:id",
    name: "FormEditParameters",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "formEditProfil" */
        "../views/dashboard/FormEditParameters.vue"
      )
  },
  {
    path: "/mentionsLegales",
    name: "MentionsLégales",
    component: () =>
      import(
        /* webpackChunkName: "mentionsLegales" */
        "../views/MentionsLegales.vue"
      )
  },
  {
    path: "/planDuSite",
    name: "PlanDuSite",
    component: () =>
      import(
        /* webpackChunkName: "mentionsLegales" */
        "../views/PlanDuSite.vue"
      )
  },
  {
    path: "*",
    name: "Error_404",
    component: () =>
      import(
        /* webpackChunkName: "404" */
        "../views/Error.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history", //permet de retirer le # dans l'url
  routes
});

export default router;
