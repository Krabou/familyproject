<template>
  <main id="carte">
    <Card class="carte" />
    <section class="result">
      <form class="search">
        <h1>
          Recherchez des utilisateurs dans votre ville ou par nom d'utilisateur
        </h1>
        <nav class="searchbar">
          <label for="searchbar"
            ><font-awesome-icon icon="search" size="1x"
          /></label>
          <input
            id="searchbar"
            type="text"
            class="searchTerm"
            v-model="search"
            placeholder="Rechercher..."
          />
        </nav>
        <!-- <button type="submit" class="searchButton">
          <font-awesome-icon icon="search" size="1x" />
        </button> -->
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
          <div v-if="currentUser.friends.length == 0">
            <span
              class="user-plus"
              @click="
                userRequest(currentUser._id, user._id),
                  requestReceived(user._id, currentUser._id),
                  change()
              "
            >
              <font-awesome-icon
                v-if="addUser"
                class="add"
                icon="user-plus"
                size="2x"
              />
            </span>
            <span @click="change()">
              <font-awesome-icon
                v-if="minusUser"
                id="add"
                icon="user-times"
                size="2x"
              />
            </span>
          </div>
          <div v-for="(friend, i) in currentUser.friends" :key="i">
            <span
              v-if="friend._id != user._id"
              class="user-plus"
              @click="
                userRequest(currentUser._id, user._id),
                  requestReceived(user._id, currentUser._id),
                  change()
              "
            >
              <font-awesome-icon
                v-if="addUser"
                class="add"
                icon="user-plus"
                size="2x"
              />
            </span>
            <span @click="change()" v-if="friend._id != user._id">
              <font-awesome-icon
                v-if="minusUser"
                id="add"
                icon="user-times"
                size="2x"
              />
            </span>
            <span v-else>
              <router-link :to="'/message/' + user._id">
                <font-awesome-icon
                  id="add"
                  icon="envelope"
                  size="2x"
                /> </router-link
            ></span>
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
      addUser: true,
      minusUser: false,
      // users: [],
      user: "",
      search: "",
      friends: "",
      demande_ami_envoyee: "",
      demande_ami_recues: ""
    };
  },
  methods: {
    change() {
      (this.addUser = !this.addUser), (this.minusUser = !this.minusUser);
    },
    //Afficher tout les utilisateurs
    // async getUsers() {
    //   const apiRes = await axios.get(
    //     process.env.VUE_APP_BACKEND_URL + "/users/"
    //   );
    //   this.users = apiRes.data;
    // },

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
    this.$store.dispatch("user/getAll");
    // try {
    //   this.getUsers();
    // } catch (err) {
    //   console.error(err);
    // }
  },
  computed: {
    //Barre de recherche
    filteredUsers() {
      return this.all.filter(user => {
        if (user._id != this.currentUser._id) {
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
        }
      });
    },

    //On récupere les info de l'utilisateur connecté
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
    //On affiche tout les users
    all() {
      const userInfos = this.$store.getters["user/all"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style lang="scss" scoped>
main#carte {
  margin: 90px 0 0;
  display: flex;
  flex-direction: row;
}

.carte {
  height: calc(100vh - 90px);
  position: sticky;
  top: 90px;
  width: 50%;
}

.search {
  margin: 15px auto;
  width: 100%;
}

.searchbar {
  align-items: center;
  box-shadow: 0px 14px 28px gray;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  width: 100%;
}

.searchbar:focus {
  border: gray 1px solid;
}

.searchTerm {
  border: none;
  font-size: 16px;
  height: 100%;
  outline: none;
  padding-left: 15px;
  width: 90%;
}

.searchTerm::placeholder {
  font-size: 16px;
  padding-left: 15px;
}

.result {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px 5vw;
  height: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: whitesmoke;
}

.user-list {
  min-width: 320px;
  width: 100%;
}

h2 {
  margin-bottom: 5px;
}

.no-result {
  align-items: center;
  background: rgb(217, 74, 100);
  box-shadow: 0px 14px 28px black;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: center;
  margin: 15px 0;
  padding: 15px;
  width: 100%;
}

.user {
  align-items: center;
  background: rgb(0, 173, 191);
  box-shadow: 0px 14px 28px black;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
  list-style: none;
  margin: 15px 0;
  padding: 15px;
  width: 100%;
}

.avatar {
  border: solid 5px whitesmoke;
  border-radius: 50%;
  height: 60px;
  overflow: hidden;
  width: 60px;
}

// .avatar img {
//   max-height: 100%;
//   min-height: 100%;
//   max-width: 100%;
//   min-width: 100%;
// }

.location {
  text-transform: uppercase;
}

.icon {
  color: gold;
}

.left-side {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.left-side > div {
  margin: 15px;
}

.fa-2x {
  cursor: pointer;
}

@media screen and (min-width: 769px) {
  .result {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
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
