<template>
  <main id="ad">
    <h1>Ajouter une annonce</h1>
    <form @submit.prevent="postAd">
      <label for="title">Titre de l'annonce</label>
      <input type="text" id="title" v-model="description" />
      <label for="start">Début</label>
      <input type="date" v-model="starts_at" id="start" />
      <label for="end">Fin</label>
      <input type="date" v-model="ends_at" id="end" />
      <label for="content">Description de l'annonce</label>
      <textarea rows="4" cols="50" id="content" v-model="content"></textarea>
      <button class="btn">Poster !</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      provider_id: null,
      description: null,
      starts_at: null,
      ends_at: null,
      content: null
    };
  },
  created() {
    try {
      this.provider_id = this.$route.params.id;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async postAd() {
      const { provider_id, description, starts_at, ends_at, content } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/ads",
          { provider_id, description, starts_at, ends_at, content }
        );
        console.log(apiRes);
      } catch (Err) {
        console.log(Err);
      }
    }
  }
};
</script>

<style lang="scss">
#ad form {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  width: 500px;
  margin: auto;
}
#ad form label {
  font-size: 20px;
  line-height: 25px;
}
#ad form input,
textarea {
  font-size: 15px;
  line-height: 25px;
  margin: 15px 0;
  padding: 10px 15px;
}
#ad .btn {
  height: 35px;
  width: 175px;
  border: 1px solid black;
  background: black;
  color: whitesmoke;
  margin: 25px 0 100px 0;
  font-size: 20px;
}
</style>

