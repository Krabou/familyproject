<template>
  <nav id="nav-main">
    <router-link class="anchor is-clickable" to="/">Home</router-link>
    <router-link class="anchor is-clickable" to="/about">About</router-link>
    <router-link class="anchor is-clickable" to="/carte">Carte</router-link>
    <router-link class="anchor is-clickable" to="/ads">Annonces</router-link>
    <router-link
      class="anchor is-clickable"
      v-if="isSignedIn"
      :to="'/dashboard/'"
      >Dashboard</router-link
    >
    <router-link
      class="anchor is-clickable"
      v-if="isSignedIn"
      :to="'/messagerie/'"
      >Messagerie</router-link
    >
    <router-link v-if="!isSignedIn" class="anchor is-clickable" to="/signin"
      >Connexion</router-link
    >
    <div class="button-signout" v-if="isSignedIn"><ButtonSignOut /></div>
    <IconBurger class="icon-burger" />
  </nav>
</template>

<script>
import auth from "@/auth";
import ButtonSignOut from "@/components/ButtonSignOut.vue";
import IconBurger from "@/components/IconBurger";

export default {
  name: "NavMain",
  components: {
    ButtonSignOut,
    IconBurger
  },
  data() {
    return {
      auth,
      isActive: false
    };
  },
  computed: {
    isSignedIn() {
      return Boolean(this.$store.getters["user/current"]);
    }
  }
};
</script>

<style lang="scss" scoped>
#nav-main {
  align-items: center;
  color: black;
  display: flex;
  height: 90px;
  justify-content: center;
  left: 0;
  right: 0;
  z-index: 10;

  a {
    color: #050505;
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;
    &.router-link-exact-active {
      color: rosybrown;
    }
  }

  a:hover {
    color: rosybrown;
  }
}

.button-signout:hover {
  color: rosybrown;
}

@media screen and (min-width: 1025px) {
  .icon-burger {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .anchor,
  .button-signout {
    display: none;
  }
}
</style>
