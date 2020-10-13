<template>
  <form class="form" v-on:submit.prevent="editPassword">
      <h2>Mettre à jour votre password</h2>
      <label class="label" for="password">Mot de passe actuel</label>
      <input type="old-password" v-model="oldPassword" id="old-password">
      <label for="password">Nouveau mot de passe</label>
       <input type="password" v-model="password" id="password">
      <button class="btn">EDITER !</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
data(){
    return {
        oldPassword:"",
        password:""
    };
},
  computed: {
    currentUser() {
      return (
        this.$store.getters["user/current"] 
      )
    },
  },
methods:{
        //On édite l'annonce
    async editPassword() {
        const { oldPassword, password } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/form_edit_parameters/password/" + this.$store.getters["user/current"]._id,
          { oldPassword, password }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
}
}
</script>

<style>

</style>