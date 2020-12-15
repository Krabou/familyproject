<template>
  <main id="manageUser">
    <h1>Manager les utilisateurs</h1>
    <!-- TABLE COMPUTER -->
    <table class="table Computer">
      <thead class="head">
        <tr class="row">
          <th class="cell">Avatar</th>
          <th class="cell">Pseudo</th>
          <th class="cell">Rôle</th>
          <th class="cell">Nom</th>
          <th class="cell">Prénom</th>
          <th class="cell">Email</th>
          <th class="cell">Editer</th>
          <th class="cell">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row" v-if="users.length === 0">
          <td class="cell" colspan="7">
            Pas d'utilisateur enregistrée pour le moment...
          </td>
        </tr>
      </tbody>
      <tbody v-for="(user, i) in users" :key="i">
        <tr class="row">
          <td class="cell">
            <figure class="avatar">
              <img :src="user.avatar" :alt="user.last_name" />
            </figure>
          </td>
          <td class="cell">{{ user.username }}</td>
          <td class="cell">{{ user.role }}</td>
          <td class="cell">{{ user.last_name }}</td>
          <td class="cell">{{ user.first_name }}</td>
          <td class="cell">{{ user.email }}</td>
          <td class="cell">
            <router-link :to="'/editUser/' + user._id">
              <font-awesome-icon :icon="['fas', 'user-edit']" size="1x" />
            </router-link>
          </td>
          <td class="cell" @click.prevent="deleteUser(user._id)">
            <font-awesome-icon :icon="['fas', 'trash-alt']" size="1x" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- TABLE TABLET & MOBILE -->
    <div class="tableList">
      <p v-if="users.length === 0" class="no-result">
        Pas d'annonce enregistrée pour le moment...
      </p>
      <table v-for="(user, i) in users" :key="i" class="table Mobile">
          <td >
            <figure class="avatar">
              <img :src="user.avatar" :alt="user.last_name" />
            </figure>
          </td>
          <th class="cell">Pseudo</th>
          <td class="cell">{{ user.username }}</td>
          <th class="cell">Role</th>
          <td class="cell">{{ user.role }}</td>
          <th class="cell">Nom</th>
          <td class="cell">{{ user.last_name }}</td>
          <th class="cell">Prénom</th>
          <td class="cell">{{ user.first_name }}</td>
          <th class="cell">Email</th>
          <td class="cell">{{ user.email }}</td>
        <tr class="last-row">
          <td class="cell">
            <router-link :to="'/editUser/' + user._id">
              EDITER
              <font-awesome-icon :icon="['fas', 'user-edit']" size="1x" />
            </router-link>
          </td>
          <td class="cell" @click.prevent="deleteUser(user._id)">
            <font-awesome-icon :icon="['fas', 'trash-alt']" size="1x" />
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    //Afficher tout les utilisateurs
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users"
      );
      this.users = apiRes.data;
    },
    //Supprimer un utilisateur
    async deleteUser(id) {
      await axios.delete(process.env.VUE_APP_BACKEND_URL + "/users/" + id);
      this.getUsers();
    }
  },
  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>
<style lang="scss" scoped>
#manageUser {
  margin: 100px 20px;
}

.table.Computer {
  box-shadow: 0px 14px 28px black;
  padding: 50px;
}

.avatar img {
  width: 60px;
}
td {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
}
.table {
  border-collapse: collapse;
  margin: auto;
  width: 90%;
}

.fa-1x {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}

.row,
.cell {
  border: 1px solid black;
  height: 50px;
  text-align: center;
}

.head .cell,
.table.Mobile th {
  font-size: 20px;
  font-weight: bold;
}

.cell {
  font-size: 18px;
  font-weight: 400;
}

@media screen and (min-width: 1025px) {
  .table.Mobile,
  .no-result {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .table.Computer {
    display: none;
  }

  .tableList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .table.Mobile {
    display: flex;
    flex-direction: column;
    margin: 35px;
    width: 320px;
    box-shadow: 0px 14px 28px black;
    text-align: center;
  }

  .last-row > td {
    width: 160px;
    border: 1px solid black;
    height: 50px;
    text-align: center;
  }
  .no-result {
    margin: auto;
    text-align: center;
    height: 150px;
    width: 320px;
    background: rgb(217, 74, 100);
    color: whitesmoke;
    padding: 50px 15px;
    box-shadow: 0px 14px 28px black;
  }
}
</style>
