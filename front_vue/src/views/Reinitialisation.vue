<template>
  <main id="reinitialisation">
    <h1>Mot de passe oublié</h1>
    <p>Nous vous enverrons un lien pour réinitialiser votre mot de passe</p>
    <form @submit.prevent="sendLink">
      <input class="input" type="email" placeholder="Entrez votre adresse email" v-model="mail" />
      <button class="btn">Envoyer</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mail: null
    };
  },
  methods: {
    async sendLink() {
      const { mail } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/contact/reinitialisation_mdp",
          {
            mail
          }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  }
};
</script>

<style lang="scss"></style>
