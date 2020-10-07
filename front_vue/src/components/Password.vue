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
export default {
data(){
    return {
        oldPassword:"",
        password:""
    };
},
methods:{
    editPassword(){

    }
}
}
</script>

<style>

</style>