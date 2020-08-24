<template>
  <main>
  <h1>Editer un utilisateur</h1>
      <form  @submit.prevent="editUser(userId)">
        <label for="email">Adresse e-mail {{user.email}}</label>
        <input type="text" id="email" v-model="email" >
         <button>Editer !</button>
      </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId:"",
      email:"",
      user:""
    };
  },
  methods: { 
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.user = apiRes.data;
    },
      async editUser(id) {
      const {email}  = this.$data;
      // this.$data représente tout l'objet retourné par la fonction data()
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/edit_user/" + id,
          {
         email
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