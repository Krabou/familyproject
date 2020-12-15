<template>
  <main class="main-form" id="contact">
    <form class="form" @submit.prevent="sendEmail">
      <h1 role="heading">Contact</h1>
      <p>
        Remplissez le formulaire ci dessous et nous reviendrons vers vous dans
        les meilleurs délais.
      </p>
      <label class="label" for="name">Nom</label>
      <input
        class="input"
        role="textbox"
        type="text"
        id="name"
        v-model="name"
      />
      <label class="label" for="firstname">Prénom</label>
      <input
        class="input"
        role="textbox"
        type="text"
        id="firstname"
        v-model="firstname"
      />
      <label class="label" for="mail">Email</label>
      <input
        class="input"
        role="textbox"
        type="email"
        id="mail"
        v-model="mail"
      />
      <label class="label" for="subject">Sujet</label>
      <input
        class="input"
        role="textbox"
        type="text"
        id="subject"
        v-model="subject"
      />
      <label class="label" for="message">Message</label>
      <textarea
        class="textarea"
        role="textbox"
        id="message"
        rows="4"
        cols="50"
        v-model="message"
      ></textarea>
      <button class="btn" role="button">ENVOYER</button>
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
.main-form {
  margin: 100px 0 0;
}
.form {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
.main-form p {
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}
.label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}
.input {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
}
.textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}
.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
.btn:hover {
  background: black;
  transition: 2s;
}
@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
  }
}
@media screen and (max-width: 768px) {
  .form {
    padding: 15px;
    width: 100;
  }
  .main-form {
    margin: 100px 0 0;
  }
}
</style>
