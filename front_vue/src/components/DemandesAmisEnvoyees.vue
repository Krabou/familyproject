<template>
  <div>
    <h2>Demandes d'Amis Envoyées</h2>
    <ul class="friends-list">
        <li v-for="(request, i) in currentUser.demande_ami_envoyee" :key="i">
        <figure><img :src="request.avatar" alt="avatar"></figure>
        <article>
          <h3>{{ request.username }}</h3>
          <form> <button
          class="btn"
          @click.prevent="
            deleteUserRequest(currentUser._id, request._id),
              deleteRequestReceived(request._id, currentUser._id)
          "
        >
          Annuler la demande
        </button></form>  
        </article>
      </li>
      <!-- <li v-for="(request, i) in currentUser.demande_ami_envoyee" :key="i">
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
      </li> -->
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

<style lang="scss" scoped>

/* friend List */
.friends-list{
  display: flex;
  flex-direction: column;
}
.friends-list li{
  background: blue;
  display: flex;
  flex-direction: row;
}
.friends-list li figure{
  width: 60px;
  height: 60%;
  border-radius: 50%;
  overflow: hidden;
  border: whitesmoke 5px solid;
  margin: 15px;
}
.friends-list li figure img{
  max-width: 100%;
}
.friends-list li article{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
.friends-list li article form{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.btn:first-of-type{
  margin-right: 15px;
}
</style>