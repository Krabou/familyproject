<template>
  <main>
    <form @submit.prevent="sendEmail">
      <h1 role="heading">Nous contacter par email</h1>
      <input role="textbox" type="text" placeholder="Nom" v-model="name" />
      <input role="textbox" type="text" placeholder="Prénom" v-model="firstname" />
      <input role="textbox" type="email" placeholder="Mail*" v-model="mail" />
      <input role="textbox" type="text" placeholder="Sujet*" v-model="subject" />
      <textarea
        role="textbox"
        rows="4"
        cols="50"
        placeholder="Entrez ici votre message*"
        v-model="message"
      ></textarea>
      <button role="button">Envoyer</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: null,
      firstname: null,
      mail: null,
      message: null,
      subject: null
    };
  },
  methods: {
    async sendEmail() {
      const { name, firstname, mail, message, subject } = this.$data;
      // this.$data représente tout l'objet retourné par la fonction data()
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/contact",
          {
            name,
            firstname,
            mail,
            message,
            subject
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

<style>
</style>
