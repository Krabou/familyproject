<template>
  <main id="dashboard">
    <h1 v-if="currentUser">Bienvenue {{ currentUser.first_name }} !</h1>
    <ul class="dash-link-list">
      <li>
        <h2>
          <router-link v-if="currentUser" :to="'/profil/' + currentUser._id"
            >Profil</router-link
          >
        </h2>
        <p>Voir mon profil public</p>
      </li>
      <li>
        <h2>
          <router-link
            v-if="currentUser"
            :to="'/manage_ad/user_ads/' + currentUser._id"
            >Mes annonces</router-link
          >
        </h2>
        <p>Gérer mes annonces</p>
      </li>
      <li>
        <h2>
          <router-link
            v-if="currentUser"
            :to="'/form_edit_profil/' + currentUser._id"
            >Profil</router-link
          >
        </h2>
        <p>Modifier mon profil</p>
      </li>
      <li>
        <h2>
          <router-link v-if="currentUser" :to="'/kids'"
            >Mes enfants</router-link
          >
        </h2>
        <p>Gérer les informations de vos enfants</p>
      </li>
      <li>
        <h2>
          <router-link v-if="currentUser" :to="'/friends/' + currentUser._id"
            >Amis</router-link
          >
        </h2>
        <p>Accéder à votre liste d'amis et gérer vos invitations</p>
      </li>
      <li>
        <h2>
          <router-link
            v-if="currentUser"
            :to="'/form_edit_parameters/' + currentUser._id"
            >Paramètres</router-link
          >
        </h2>
        <p>Gérer vos paramètres personnels</p>
      </li>
      <li  v-if="currentUser && currentUser.role === 'admin'">
        <h2>
          <router-link
            :to="'/manage_ads/'"
            >Annonces</router-link
          >
        </h2>
        <p>Gérer les annonces de tout les utilisateurs</p>
      </li>
      <li  v-if="currentUser && currentUser.role === 'admin'">
        <h2>
          <router-link
            :to="'/manage_user'"
            >Utilisateurs</router-link
          >
        </h2>
        <p>Gérer tout les utilisateurs</p>
      </li>
    </ul>
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

<style lang="scss" scoped>
.dash-link-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px 50px;
}

.dash-link-list li {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  box-shadow: 0px 14px 28px grey;
  color: black;
  height: 150px;
  list-style: none;
  margin: 0 auto 15px;
  padding: 30px;
  text-align: center;
  width: 320px;
}

.dash-link-list a {
  color: black;
  cursor: pointer;
  text-decoration: none;
}

.dash-link-list h2,
p {
  margin: 0 auto 15px;
}
</style>
