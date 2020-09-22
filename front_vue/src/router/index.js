import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import auth from "@/auth/";

Vue.use(VueRouter);

const routes = [{
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
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/carte",
    name: "Carte",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Carte.vue")
  },
  {
    path: "/ads",
    name: "Annonces",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Ads.vue")
  },
  {
    path: "/ad/:id",
    name: "Annonce",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Ad.vue")
  },
  {
    path: "/manage_user",
    name: "Manage user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/dashboardAdmin/Manage_user.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    // beforeEnter: (to, from, next) => {
    //   // on vérifie l'état de connexion
    //   if (auth.getLocalAuthToken()) next("/dashboard");
    //   // un utilisateur déjà connecté sera redirigé vers le dashboard...
    //   else next();
    // },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Signin")
  },
  {
    path: "/signup",
    name: "Signup",
    // beforeEnter: (to, from, next) => {
    //   // on vérifie l'état de connexion:
    //   if (auth.getLocalAuthToken()) next("/dashboard");
    //   // un utilisateur déjà connecté sera redirigé vers le dashboard...
    //   else next();
    // },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Signup")
  },
  {
    path: "/reinitialisation",
    name: "Reinitialisation",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Reinitialisation")
  },
  {
    path: "/edit_user/:id",
    name: "Edit_user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/dashboardAdmin/Edit_user")
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
      import(/* webpackChunkName: "signup" */ "../views/dashboardUser/Dashboard.vue")
  },
  {
    path: "/manage_ad",
    name: "Manage_ad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/dashboardUser/Manage_ad.vue")
  },
  {
    path: "/form_create_ad",
    name: "Form_create_ad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/dashboardUser/Form_create_ad.vue")
  },
  {
    path: "/form_edit_ad/:id",
    name: "Form_edit_ad",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/dashboardUser/Form_edit_ad.vue")
  },
  {
    path: "/profil/:id",
    name: "Profil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Profil.vue")
  },
  {
    path: "/mentions_legales",
    name: "Mentions légales",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/MentionsLegales.vue")
  },
  {
    path: "*",
    name: "Error 404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Error.vue")
  },
];

const router = new VueRouter({
  mode: "history", //permet de retirer le # dans l'url
  routes
});

export default router;