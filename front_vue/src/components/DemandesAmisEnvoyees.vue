<template>
  <div>
    <h2>Demandes d'Amis Envoyées</h2>
    <ul class="friends-list">
      <li v-if="currentUser.friend_requests_sent == 0">
        Aucune demande d'ami envoyé pour le moment
      </li>
      <li v-for="(request, i) in currentUser.friend_requests_sent" :key="i">
        <figure><img :src="request.avatar" alt="avatar" /></figure>
        <article>
          <h3>{{ request.username }}</h3>
          <form>
            <button
              class="btn"
              @click.prevent="
                deleteUserRequest(currentUser._id, request._id),
                  deleteRequestReceived(request._id, currentUser._id)
              "
            >
              Annuler
            </button>
          </form>
        </article>
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
          { $pull: { friend_requests_sent: userId } }
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
          { $pull: { friend_requests_received: currentUserId } }
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

.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 125px;
}
.btn:hover {
  background: black;
  transition: 2s;
}

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 50px auto;
  font-size: 25px;
}

.friends-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.friends-list li figure {
  width: 60px;
  height: 60%;
  border-radius: 50%;
  overflow: hidden;
  border: black 5px solid;
  margin: 15px;
}
.friends-list li figure img {
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  min-height: 100%;
}


.btn:first-of-type {
  margin-right: 15px;
}
@media screen and (min-width: 769px) {
 .friends-list li {
  display: flex;
  flex-direction: row

  }
  .friends-list li article {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
.friends-list li article form {
  display: flex;
  flex-direction: row;
  width: 100%;
}
}
@media screen and (max-width: 768px) {
 .friends-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  .friends-list li article {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}
.friends-list li article form {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
}
</style>