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
            <router-link :to="'/edit_user/' + user._id">
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
      <table v-for="(user, i) in users" :key="i" class="table Mobile">
        <tr>
          <td class="cell">
            <figure class="avatar">
              <img :src="user.avatar" :alt="user.last_name" />
            </figure>
          </td>

          <td class="cell" @click.prevent="deleteUser(user._id)">
            <font-awesome-icon :icon="['fas', 'trash-alt']" size="1x" />
          </td>
        </tr>
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
        <td class="cell">
          <router-link :to="'/edit_user/' + user._id">
            Editer
            <font-awesome-icon :icon="['fas', 'user-edit']" size="1x" />
          </router-link>
        </td>
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
        process.env.VUE_APP_BACKEND_URL + "/users/"
      );
      this.users = apiRes.data;
    },
    //Supprimer un utilisateur
    async deleteUser(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.users = apiRes.data;
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
<style lang="scss">
#manageUser {
  margin: 50px 20px;
}
.avatar img {
  width: 60px;
}
.table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}
.row,
.cell {
  border: 1px solid black;
  text-align: center;
  height: 50px;
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
  .table.Mobile {
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
    width: 320px;
    margin: 35px;
  }
}
</style>
