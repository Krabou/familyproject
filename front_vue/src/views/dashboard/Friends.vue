<template>
  <main class="main-form" id="friends">
    <h1>Amis</h1>
    <!-- <DemandesAmisEnvoyees v-if="currentUser" />
    <DemandesAmisRecues v-if="currentUser" /> -->
    <h2>Amis</h2>
    <ul class="friends-list" v-if="currentUser">
      <li class="friend" v-for="(friend, i) in currentUser.friends" :key="i">
        {{ friend.username }}
        <button
          class="btn"
          @click.prevent="
            deletefriend(currentUser._id, friend._id),
              breakFriendship(friend._id, currentUser._id)
          "
        >
          supprimer
        </button>
      </li>
    </ul>
<p v-if="friends.length">test friends length {{friends.length}} </p>
    
  </main>
</template>

<script>
// import DemandesAmisEnvoyees from "@/components/DemandesAmisEnvoyees";
// import DemandesAmisRecues from "@/components/DemandesAmisRecues";

import axios from "axios";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("friend/getFriends")
  },
  components: {
    // DemandesAmisEnvoyees,
    // DemandesAmisRecues
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
    friends() {
      const userInfos = this.$store.getters["friend/all"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },


  }
};
</script>


<style>
</style>