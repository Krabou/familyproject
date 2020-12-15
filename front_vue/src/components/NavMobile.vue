<template>
  <div class="navMobile" :class="isActive && 'is-active'">
    <div
      class="over"
      :class="isActive && 'overlay'"
      @click="toggleNavMobile"
    ></div>
    <nav
      id="nav-mobile"
      :class="isActive && 'is-active'"
      @click="toggleNavMobile"
    >
      <router-link class="anchor is-clickable" to="/">Accueil</router-link>
      <router-link class="anchor is-clickable" to="/about"
        >A propos</router-link
      >
      <router-link class="anchor is-clickable" v-if="isSignedIn" to="/carte"
        >Carte</router-link
      >
      <router-link class="anchor is-clickable" v-if="isSignedIn" to="/ads"
        >Annonces</router-link
      >
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
      <router-link class="anchor is-clickable" v-if="!isSignedIn" to="/signin"
        >Connexion</router-link
      >
      <ButtonSignOut class="button-signout" v-if="isSignedIn" />
    </nav>
  </div>
</template>

<script>
import auth from "@/auth";
import ButtonSignOut from "@/components/ButtonSignOut.vue";
export default {
  name: "NavMobile",
  components: {
    ButtonSignOut
  },
  data() {
    return {
      auth,
      isActive: false
    };
  },

  methods: {
    toggleNavMobile() {
      console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile");
    }
  },
  computed: {
    isSignedIn() {
      return Boolean(this.$store.getters["user/current"]);
    }
  },
  created() {
    // $on prend un event-custom en param 1 (string)
    // et exécute un callback (param2) quand l'event survient...
    this.$ebus.$on("toggle-nav-mobile", () => {
      this.isActive = !this.isActive;
    });
  }
};
</script>

<style lang="scss" scoped>
.over.overlay {
  transform: translateX(0);
}
.navMobile.is-active {
  transform: translateX(0);
}
.navMobile {
  transform: translateX(100%);
  transition: transform 1s ease-in-out;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.over {
  height: 100vh;
  transition: transform 1s ease-in-out;
  width: 100%;
}
#nav-mobile {
  align-items: center;
  background: rgb(217, 74, 100);
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  justify-content: center;
  position: fixed;
  right: 0;
  top: 90px;
  transform: translateX(220px);
  transition: transform 1s ease-in-out;
  width: 220px;
  z-index: 10;

  a {
    color: whitesmoke;
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: black;
    }
  }

  a:hover {
    color: black;
    transition: 2s;
  }
}

#nav-mobile.is-active {
  transform: translateX(0);
}

.button-signout {
  color: whitesmoke;
}

.button-signout:hover {
  color: black;
  transition: 2s;
}
@media screen and (min-width: 1024px) {
  .navMobile {
    display: none;
  }
}
</style>
