<template>
  <main id="carte">
    <p>Recherchez des utilisateurs dans votre ville ou par nom d'utilisateur</p>
    <div class="search">
      <input type="text" class="searchTerm" v-model="search" placeholder="Rechercher" />
      <button type="submit" class="searchButton">
        <font-awesome-icon icon="search" size="1x" />
      </button>
    </div>
    <ul>
      <li class="user" v-for="(user, i) in filteredUsers" :key="i">
        <div>
          <figure class="avatar-profil-list">
            <img :src="user.avatar" alt="photo de profil" />
          </figure>
          <div>
            <h2>{{ user.username }}</h2>
            <span>
              <font-awesome-icon id="location" icon="map-marker-alt" size="2x" />
              {{ user.adress.city }}
            </span>
          </div>
        </div>
        <router-link :to="'/profil/' + user._id">voir profil</router-link>
        <button>
          <font-awesome-icon id="add" icon="user-plus" size="2x" />Ajouter
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      search: ""
    };
  },
  methods: {
    //Afficher tout les utilisateurs
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/"
      );
      this.users = apiRes.data;
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
    filteredUsers: function() {
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
            .match(
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
            .match(
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
    }
  }
};

</script>

<style lang="scss" scoped>
#carte {
  background: rgb(236, 229, 229);
  padding: 50px;
}
.user {
  width: 80%;
  height: 150px;
  background: whitesmoke;
  color: black;
  padding: 15px;
  margin: 15px auto 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.user:hover {
  background: coral;
  color: whitesmoke;
  box-shadow: 0px 14px 28px black;
}
.avatar-profil-list {
  width: 60px;
  border-radius: 50%;
  background: violet;
}
.avatar-profil-list img {
  width: 100%;
}
.search {
  width: 300px;
  height: 40px;
  border-radius: 42px;
  background: whitesmoke;
  color: black;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 50px;
}
.search input {
  width: 100%;
  border: none;
  padding: 0 5px 0 15px;
}
.search button {
  padding-right: 15px;
  background: white;
  color: black;
  border: none;
}
input:focus {
  outline: none;
  //  background: brown;
}
.search button {
  outline: none;
}
</style>