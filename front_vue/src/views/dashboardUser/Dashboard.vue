<template>
  <main id="dashboard">
    <h1 v-if="currentUser">Welcome {{ currentUser.first_name }} !</h1>
     <router-link :to="'/manage_ad'">Mes annonces</router-link>
     <router-link :to="'/manage_user'">Manager les utilisateurs</router-link>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  // data() {
  //   return {
  //   //   userId: "",
  //   //   user: ""
  //   };
  // },
  // methods: {
  //   async getUser(id) {
  //     const apiRes = await axios.get(
  //       process.env.VUE_APP_BACKEND_URL + "/users/" + id
  //     );
  //     this.user = apiRes.data;
  //   }
  // },
  // mounted() {
  //   console.log(">>>>", this.$router); // accessible partout dans ton app
  //   this.userId = this.$route.params.id;
  //   try {
  //     this.getUser(this.userId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
   computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style lang="scss">
</style>