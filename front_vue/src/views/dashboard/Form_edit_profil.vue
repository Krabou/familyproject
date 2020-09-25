<template>
  <main class="main-form" id="editUser">
    <form @submit.prevent="editUser(userId)">
      <h1>
        Editer le rôle de {{ user.last_name }} {{ user.first_name }}
      </h1>
      <div class="input-radio-list">
        <div>
          <input
            class="input-radio"
            type="radio"
            id="user"
            v-model="role"
            value="user"
          />
          <label class="label-radio" for="user">User</label>
        </div>
        <div>
          <input
            class="input-radio"
            type="radio"
            id="admin"
            v-model="role"
            value="admin"
          />
          <label class="label-radio" for="admin">Admin</label>
        </div>
      </div>
      <button class="btn">Editer !</button>
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

<style lang="scss" scoped>
.main-form {
  margin: 100px 0 0;
}
</style>