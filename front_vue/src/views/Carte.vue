<template>
  <main id="main-carte">
    <Card class="carte" />
    <section class="result">
      <p>
        Recherchez des utilisateurs dans votre ville ou par nom d'utilisateur
      </p>
      <form class="search">
        <input
          type="text"
          class="searchTerm"
          v-model="search"
          placeholder="Rechercher"
        />
        <button type="submit" class="searchButton">
          <font-awesome-icon icon="search" size="1x" />
        </button>
      </form>
      <p class="no-result" v-if="filteredUsers.length == 0">
        Désolée aucun utilisateur ne correspond à votre recherche
      </p>
      <ul class="user-list">
        <li class="user" v-for="(user, i) in filteredUsers" :key="i">
          <div class="left-side">
            <figure class="avatar">
              <img :src="user.avatar" alt="photo de profil" />
            </figure>
            <div>
              <router-link :to="'/profil/' + user._id">
                <h2>{{ user.username }}</h2>
              </router-link>
              <p class="location">
                <span class="icon">
                  <font-awesome-icon
                    class="icon-location"
                    icon="map-marker-alt"
                    size="1x"
                  />
                </span>
                {{ user.adress.city }}
              </p>
            </div>
          </div>

          <div>

            <span
              class="user-plus"
              @click="
                userRequest(currentUser._id, user._id),
                  requestReceived(user._id, currentUser._id),
                  change()
              "
            >
              <font-awesome-icon v-if="addUser" class="add" icon="user-plus" size="2x" />
            </span>
                <span @click="change()">
              <font-awesome-icon v-if="minusUser" id="add" icon="user-times" size="2x" />
                </span>
            <router-link :to="'/message/' + user._id">
              <font-awesome-icon id="add" icon="envelope" size="2x" />
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      addUser:true,
      minusUser:false,
      users: [],
      user: "",
      search: "",
      friends: "",
      demande_ami_envoyee: "",
      demande_ami_recues: ""
    };
  },
  methods: {
    change(){
      this.addUser=!this.addUser,
      this.minusUser=!this.addUser
    },
    //Afficher tout les utilisateurs
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/"
      );
      this.users = apiRes.data;
    },

    //Demande d'ami
    async userRequest(currentUserId, userId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + currentUserId,
          { $push: { demande_ami_envoyee: userId } }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    },
    async requestReceived(userId, currentUserId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + userId,
          { $push: { demande_ami_recues: currentUserId } }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },

  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  },
  computed: {
    //Barre de recherche
    filteredUsers() {
      return this.users.filter(user => {
        return (
          //Replace remplace les caracteres speciaux

          user.adress.city
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            ) ||
          user.adress.street
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            ) ||
          user.username
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            )
        );
      });
    },

    //On récupere les info de l'utilisateur connecté
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style lang="scss" scoped>
#main-carte {
  // width: 100%;
  // min-height: 100vh;
  margin: 90px 0 0;
  display: flex;
  flex-direction: row;
  // flex-direction: row;
}
.carte {
  // float: left;
  width: 50%;
  height: calc(100vh - 90px);
  // position: fixed;
}
.search {
  height: 45px;
  width: 80%;
  margin: 50px auto;
}
.searchTerm {
  width: 90%;
  height: 100%;
  padding-left: 15px;
  font-size: 16px;
}
.searchTerm::placeholder {
  padding-left: 15px;
  font-size: 16px;
}
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 5vw;
  // position: absolute;
  // right: 0;
  // height: calc(100vh - 90px);
  // overflow: scroll;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: whitesmoke;
}
.user-list {
  width: 100%;
  min-width: 320px;
}
h2 {
  margin-bottom: 5px;
}
.no-result {
  width: 100%;
  height: 150px;
  background: rgb(217,74,100);
  color: whitesmoke;
  padding: 15px;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 14px 28px black;
}
.user {
  width: 100%;
  height: 150px;
  background: rgb(0, 173, 191);
  color: whitesmoke;
  padding: 15px;
  margin: 15px 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 14px 28px black;
}
.avatar {
  border: solid 5px whitesmoke;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.location {
  text-transform: uppercase;
}
.icon {
  color: gold;
}
.left-side {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left-side > div {
  margin: 15px;
}
.fa-2x{
cursor: pointer;
}
@media screen and (min-width: 769px) {
  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 50%;
     height: calc(100vh - 90px);
  overflow: scroll;
  }
}
@media screen and (max-width: 768px) {
  .carte {
    display: none;
  }
  .result {
    width: 100%;
  }
}
</style>
