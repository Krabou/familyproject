<template>
  <div>
    <h2>Demandes d'Amis Envoyées</h2>
    <ul>
      <li v-for="(request, i) in currentUser.demande_ami_envoyee" :key="i">
        <figure><img :src="request.avatar" alt="" /></figure>
        <span>{{ request.username }}</span>
        <button
          class="btn"
          @click.prevent="
            deleteUserRequest(currentUser._id, request._id),
              deleteRequestReceived(request._id, currentUser._id)
          "
        >
          Annuler la demande
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    //Demande d'ami
    async deleteUserRequest(currentUserId, userId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + currentUserId,
          { $pull: { demande_ami_envoyee: userId } }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    },
    async deleteRequestReceived(userId, currentUserId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + userId,
          { $pull: { demande_ami_recues: currentUserId } }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },
  computed: {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style>
</style>