
        <!-- <router-link class="anchor is-clickable" to="/">Home</router-link>
        <router-link class="anchor is-clickable" to="/about">About</router-link>
        <router-link class="anchor is-clickable" to="/contact">Contact</router-link>
        <router-link class="anchor is-clickable" to="/ads">Annonces</router-link>
        <router-link class="anchor is-clickable" to="/manage_user">Manage User</router-link>
        <router-link class="anchor is-clickable" :to="'/dashboard/'">Dashboard</router-link>
        <router-link class="anchor is-clickable" to="/connexion">Connexion</router-link> -->

        <!-- <li role="listitem"><a role="link" class="anchor is-clickable" href="/carte">Carte</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/tutoriel">Tutoriel</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/inscription">Inscription</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/connexion">Connexion</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/profil">Profil</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/messagerie">Messages</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/dashboard">Dashboard</a></li>
        <li role="listitem"><a role="link" class="anchor is-clickable" href="/deconnexion">Déconnexion</a></li>-->
   
<template>
  <nav id="nav-main">
    <router-link class="anchor is-clickable" to="/">Home</router-link>
    <router-link class="anchor is-clickable" to="/about">About</router-link>
    <router-link class="anchor is-clickable" to="/carte">Carte</router-link>
    <router-link class="anchor is-clickable" to="/ads">Annonces</router-link>
    <router-link class="anchor is-clickable" to="/manage_user">Manage User</router-link>
    <router-link class="anchor is-clickable" :to="'/dashboard/'">Dashboard</router-link>
    <router-link class="anchor is-clickable" to="/signin">Connexion</router-link>
    <IconBurger class="icon-burger" />
  </nav>
</template>

<script>
import IconBurger from "@/components/IconBurger";

export default {
  components: {
    IconBurger
  }
};
</script>

<style lang="scss" scoped>
#nav-main {
  display: flex;
  align-items: center;
  height: 90px;
  justify-content: center;
  color: black;
  right: 0;
  left: 0;
  z-index: 10;

  a {
    font-weight: bold;
    color: #050505;
    margin: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: rosybrown;
    }
  }
}
@media screen and (min-width: 1025px) {
  .icon-burger {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .anchor {
    display: none;
  }
}
</style>