<template>
  <main  id="friends">
    <section class="friend-left-side">
    <DemandesAmisEnvoyees v-if="currentUser" />
    <DemandesAmisRecues v-if="currentUser" />
    <h2>Amis</h2>
    <ul class="friends-list" v-if="currentUser">
      <li v-for="(friend, i) in currentUser.friends" :key="i">
        <figure><img :src="friend.avatar" alt="avatar"></figure>
        <article>
          <h3>{{friend.username}}</h3>
          <form><span class="btn"><router-link :to="'/profil/' + friend._id">
                Profil
              </router-link></span> <button
          class="btn"
          @click.prevent="
            deletefriend(currentUser._id, friend._id),
              breakFriendship(friend._id, currentUser._id)
          "
        >
          supprimer
        </button></form>  
        </article>
      </li>
    </ul>
<!-- <p v-if="friends.length">test friends length {{friends.length}} </p> -->
est ce que ca marche
<p>test users length {{all.length}} </p>
   </section> 
  </main>
</template>

<script>
import DemandesAmisEnvoyees from "@/components/DemandesAmisEnvoyees";
import DemandesAmisRecues from "@/components/DemandesAmisRecues";

import axios from "axios";

export default {
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch("friend/getFriends");
    this.$store.dispatch("user/getAll");
  },
  components: {
    DemandesAmisEnvoyees,
    DemandesAmisRecues
  },
  methods: {
    async deletefriend(currentUserId, userId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + currentUserId,
          { $pull: { friends: userId } }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    },
    async breakFriendship(userId, currentUserId) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + userId,
          { $pull: { friends: currentUserId } }
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
    },
    // friends() {
    //   const userInfos = this.$store.getters["friend/all"]; // récupère l'user connecté depuis le store/user
    //   return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    // },
      all() {
      const userInfos = this.$store.getters["user/all"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>


<style lang="scss" scoped>
main#friends {
  display: flex;
  flex-direction: row;
}
.friend-left-side {
  width: 30%;
background: brown;
}
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