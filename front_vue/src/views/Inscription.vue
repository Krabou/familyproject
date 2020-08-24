<template>
  <main>
    <section> <router-link to="/connexion">
      <button>J'AI UN COMPTE</button>
     </router-link>
        <button>CR&Eacute;ER UN COMPTE</button>
      
    </section>
    <section>
      <form  @submit.prevent="subscribe">
        <label for="email">Adresse e-mail</label>
        <input type="text" id="email" v-model="email" />
        <label for="password">Mot de passe</label>
        <input type="text" id="password" v-model="password" />
        <button>S'incrire</button>
    
      </form>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async subscribe() {
      const {email, password } = this.$data;
      // this.$data représente tout l'objet retourné par la fonction data()
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/auth/inscription",
          {
         email, password
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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdc3c7;
  width: 500px;
}
</style>