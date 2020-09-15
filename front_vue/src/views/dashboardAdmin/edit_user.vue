<template>
  <main id="editUser">
    <h1>Editer le rôle de {{ user.last_name }} {{ user.first_name }}</h1>
    <form @submit.prevent="editUser(userId)">
      <label for="role">Rôle {{ user.role }}</label>
      <input type="text" id="role" v-model="role" />
      <button>Editer !</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      role: "",
      user: ""
    };
  },
  methods: {
    // On affiche l'utilisateur
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.user = apiRes.data;
    },
    // On édite l'utilisateur
    async editUser(id) {
      const { role } = this.$data;
      // this.$data représente tout l'objet retourné par la fonction data()
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/edit_user/" + id,
          {
            role
          }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },
  mounted() {
    console.log(">>>>", this.$router); // accessible partout dans ton app
    this.userId = this.$route.params.id;
    try {
      this.getUser(this.userId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdc3c7;
  width: 500px;
}
</style>
