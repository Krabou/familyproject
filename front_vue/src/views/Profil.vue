<template>
  <main id="profil">
    bon alors
    <figure>
      <img :src="user.avatar" alt="photo de profil" />
    </figure>
    <h1>{{ user.username }}</h1>
    <p>{{ user.adress.city }} {{ user.adress.country }}</p>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
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
#profil {
  margin-top: 90px;
}
</style>
