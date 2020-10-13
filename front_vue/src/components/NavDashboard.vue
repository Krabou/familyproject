<template>
    <nav class="nav-dash">
    <ul class="dash-link-list">
      <li><router-link v-if="currentUser" :to="'/profil/' + currentUser._id">Profil</router-link></li>
      <li><router-link v-if="currentUser" :to="'/manage_ad/user_ads/' + currentUser._id">Mes annonces</router-link></li>
      <li><router-link v-if="currentUser " :to="'/form_edit_profil/' + currentUser._id">Profil</router-link></li>
      <li><router-link v-if="currentUser" :to="'/kids'">Mes enfants</router-link></li>
      <li><router-link v-if="currentUser" :to="'/friends/' + currentUser._id">Amis</router-link></li>
       <li><router-link v-if="currentUser" :to="'/form_edit_profil/' + currentUser._id">Paramètres</router-link></li>
      <li><router-link v-if="currentUser && currentUser.role === 'admin'" :to="'/manage_ads/'">Annonces</router-link></li>
      <li><router-link v-if="currentUser && currentUser.role === 'admin'" :to="'/manage_user'">Utilisateurs</router-link></li>
    </ul>
   </nav>
</template>

<script>
export default {
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-dash{
  width: 200px;
  padding: 15px;
  height: auto;
}
.dash-link-list{
  display: flex;
  flex-direction: column;
  list-style: none;
}
.dash-link-list a{
  text-decoration: none;
  color: black;
}
.content{
  background: red;
  height: 300vh;
  width: 100%;
}

</style>