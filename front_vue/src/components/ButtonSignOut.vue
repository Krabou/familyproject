<template>
  <div @click="signout" class="sign-out">
    <font-awesome-icon
      title="signout"
      class="is-clickable icon"
      icon="sign-out-alt"
    />Déconnexion
  </div>
</template>

<script>
import auth from "@/auth/";

export default {
  name: "Signout",
  methods: {
    signout() {
      auth.signout(this);
      //  on passe l'instance de vue à la fonction de déconnection
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-out {
  cursor: pointer;
}
</style>
