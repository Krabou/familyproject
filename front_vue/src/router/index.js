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
        /* webpackChunkName: "message" */
        "../views/dashboard/Message.vue"
      )
  },
  {
    path: "/manage_user",
    name: "Manage_user",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "Manage_user" */
        "../views/dashboard/Manage_user.vue"
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
    path: "/edit_user/:id",
    name: "Edit_user",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "edit_user" */
        "../views/dashboard/Edit_user.vue"
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
    path: "/manage_ads",
    name: "Manage_ads",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "manage_ad" */
        "../views/dashboard/Manage_ads.vue"
      )
  },
  {
    path: "/manage_ad/user_ads/:id",
    name: "Manage_ad",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "manage_ad" */
        "../views/dashboard/Manage_ad.vue"
      )
  },
  {
    path: "/form_create_ad",
    name: "Form_create_ad",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "form_create_ad" */
        "../views/dashboard/Form_create_ad.vue"
      )
  },
  {
    path: "/form_edit_ad/:id",
    name: "Form_edit_ad",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "form_edit_ad" */
        "../views/dashboard/Form_edit_ad.vue"
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
    path: "/form_edit_profil/:id",
    name: "Form_edit_profil",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "form edit profil" */
        "../views/dashboard/Form_edit_profil.vue"
      )
  },
  {
    path: "/form_edit_parameters/:id",
    name: "Form_edit_parameters",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import(
        /* webpackChunkName: "form edit profil" */
        "../views/dashboard/Form_edit_parameters.vue"
      )
  },
  {
    path: "/mentions_legales",
    name: "Mentions_légales",
    component: () =>
      import(
        /* webpackChunkName: "mentions_legales" */
        "../views/MentionsLegales.vue"
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
