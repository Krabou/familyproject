<template>
  <main class="main-form" id="reinitialisation">
    <form class="form" @submit.prevent="sendLink">
      <h1>Mot de passe oublié</h1>
      <p>Nous vous enverrons un lien pour réinitialiser votre mot de passe</p>
      <label class="label" for="email">Adresse email</label>
      <input class="input" type="email" id="email" v-model="mail" />
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

<style lang="scss">
// main#contact
 .main-form{
  margin: 100px 0 0;
}
// main#contact form 
.form{
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
// main#contact 
.main-form p {
  margin-bottom: 30px;
}
// main#contact

 .label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}
// main#contact 
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
// main#contact
 .textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  // margin-bottom: 30px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}
// main#contact button
.btn {
  background: rosybrown;
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  // margin-right: 0;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
// main#contact button:hover 
.btn:hover {
  background: black;
}
@media screen and (min-width: 769px) {
  // main#contact 
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
  }
}
@media screen and (max-width: 768px) {
  // main#contact 
  .form { 
    padding: 15px;
    width: 100;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
  }
}
</style>
