<template>
  <main id="friends">
    <section>
      <DemandesAmisEnvoyees v-if="currentUser" />
      <DemandesAmisRecues v-if="currentUser" />

      <h2>Amis</h2>
      <ul class="friends-list" v-if="currentUser">
        <li v-if="currentUser.friends.length === 0">
          Aucun ami enregistré pour le moment
        </li>
        <li v-for="(friend, i) in currentUser.friends" :key="i">
          <figure><img :src="friend.avatar" alt="avatar" /></figure>
          <article>
            <h3>{{ friend.username }}</h3>
            <form>
              <div class="btn">
                <router-link :to="'/profil/' + friend._id">
                  Profil
                </router-link> </div>
              <button
                class="btn"
                @click.prevent="
                  deletefriend(currentUser._id, friend._id),
                    breakFriendship(friend._id, currentUser._id)
                "
              >
                supprimer
              </button>
            </form>
          </article>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import DemandesAmisEnvoyees from "@/components/DemandesAmisEnvoyees";
import DemandesAmisRecues from "@/components/DemandesAmisRecues";

import axios from "axios";

export default {
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
div.btn{
  display: flex;
 align-items: center;
 justify-content: center;

}
a{
  text-decoration: none;
   color: white;
  font-size: 16px;
  font-weight: bold;
}
main#friends {
  margin: 100px 0 0;
}
section {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
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

.friends-list li article form {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.btn:first-of-type {
  margin-right: 15px;
}
@media screen and (min-width: 769px) {
  section {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }

  main#friends {
    margin: 100px 0 0;
    padding: 50px;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
  }
  .friends-list li {
    display: flex;
    flex-direction: row;
  }
  .friends-list li article {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
}
@media screen and (max-width: 768px) {
  section {
    padding: 15px;
    width: 100;
  }

  main#friends {
    margin: 100px 0 0;
  }
  .friends-list li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .friends-list li article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
}
</style>

