<template>
  <main id="dashboard">
    <h1 v-if="currentUser">Bienvenue {{ currentUser.first_name }} !</h1>
    <ul class="dash-link-list">
      <li v-if="currentUser && currentUser.role === 'admin'">
        <h2>
          <router-link :to="'/manageAds/'">Annonces</router-link>
        </h2>
        <p>Gérer les annonces de tout les utilisateurs</p>
      </li>
      <li v-if="currentUser && currentUser.role === 'admin'">
        <h2>
          <router-link :to="'/manageUser'">Utilisateurs</router-link>
        </h2>
        <p>Gérer tout les utilisateurs</p>
      </li>
      <li>
        <h2>
          <router-link v-if="currentUser" :to="'/profil/' + currentUser._id"
            >Profil</router-link
          >
        </h2>
        <p>Voir mon profil public et le modifier.</p>
      </li>
      <li>
        <h2>
          <router-link
            v-if="currentUser"
            :to="'/manageAd/userAds/' + currentUser._id"
            >Mes annonces</router-link
          >
        </h2>
        <p>Gérer mes annonces</p>
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
            :to="'/formEditParameters/' + currentUser._id"
            >Paramètres</router-link
          >
        </h2>
        <p>Gérer vos paramètres personnels</p>
      </li>
      <li @click="change">
        <h2>Profil</h2>
        <p>Supprimer mon profil</p>
      </li>
    </ul>
    <div v-if="active" class="window-delete">
      <div class="overlay" @click="change"></div>
      <div class="delete">
        <div @click="change"  class="close"><font-awesome-icon :icon="['fas', 'window-close']" size="2x" /></div>
        <h2>Êtes-vous sûre de vouloir supprimer votre compte ?</h2>
        <button  class="btn" @click.prevent="deleteProfil(currentUser._id)">SUPPRIMER</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import auth from "@/auth/";
export default {
  data() {
    return {
      active: false
    //   userId: "",
    //   user: ""
    };
  },
  methods: {
      change() {
        this.active = !this.active 
    },
    async deleteProfil(id) {
      await axios.delete(process.env.VUE_APP_BACKEND_URL + "/users/" + id);
      auth.signout(this);
      //  on passe l'instance de vue à la fonction de déconnection
      this.$router.push("/");
      this.flashMessage.success({
        title: "Success",
        message: "Votre compte a bien été supprimé !",
        time: 5000
      });
    }
  },
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
li:last-of-type,
li:last-of-type {
  background: red;
  color: whitesmoke;
  cursor: pointer;
}
.window-delete{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.overlay{
   background: rgba($color: #f1e1e1, $alpha: 0.7);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.delete{
  background: whitesmoke;
  color: black;
  padding: 50px;
  position: fixed;
  top: 30%;
}
.close{
  position: absolute;
  top: 10px;
  right: 10px;
cursor: pointer;
}
.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
.btn:hover {
  background: black;
  transition: 2s;
}
</style>
