<template>
    <main>
      <h1>Manager les utilisateurs</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody v-for="(user, i) in users" :key="i">
          <tr>
          <td>
           <!-- <figure><img src="{{user.avatar}}" alt="{{user.last_name}}"></figure> -->
          </td>
          <td>{{user.username}}</td>
        <td>{{user.last_name}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.email}}</td>
          <td>
           <router-link :to="'/edit_user/' + user._id">
              <font-awesome-icon  :icon="['fas', 'user-edit']" size="1x"/>
            </router-link>
          </td>
          <td @click.prevent="deleteUser(user._id)">
              <font-awesome-icon  :icon="['fas', 'trash-alt']" size="1x"/>
          </td></tr>
        </tbody>
      </table>
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
      this.getUsers()
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

<style >

</style>