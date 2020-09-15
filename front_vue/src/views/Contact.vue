<template>
  <main id="contact">
    <h1 role="heading">Nous contacter par email</h1>
    <form @submit.prevent="sendEmail">
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
      <button class="btn" role="button">Envoyer</button>
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

<style lang="scss">
main#contact {
  margin: 50px 10vh;
}

main#contact form {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main#contact input {
  color: black;
  font-size: 20px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
}

main#contact textarea {
  color: black;
  font-size: 20px;
  height: 200px;
  line-height: 25px;
  margin-bottom: 15px;
  overflow-y: scroll;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}

main#contact button {
    background: black;
    color: white;
    font-size: 25px;
    font-weight: bold;
    height: 50px;
    margin-right: 0;
    width: 200px;
}
</style>
