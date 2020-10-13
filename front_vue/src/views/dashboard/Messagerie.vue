<template>
  <!-- <main id="messagerie">
    <h1>Messagerie</h1>
    <h2 class="title">MEssages reçus</h2>
    <ListMessages messages_type="received" />
    <h2 class="title">MEssages envoyes</h2>
    <ListMessages messages_type="sent" />
  </main> -->
  <div>
    <h1 class="title">My messages</h1>
    <ul>
      <li v-for="(msg, i) in messages" :key="i">
        <!-- <h2 v-if="msg.from" :title="msg.from.email" class="title">{{ msg.from.first_name }} - {{ msg.from.last_name }}</h2> -->
        <p>
          {{ msg.text }}
        </p>
        <!-- <span>{{ msg.date }}</span> -->
      </li>
    </ul>
  </div>

</template>

<script>
// import ListMessages from "@/components/messages/ListMessages.vue";
// export default {
//   components: {
//     ListMessages
//   }
// };
import axios from "axios";

export default {
  data() {
    return {
      // from: null,
      messages: []
    };
  },
  methods: {
    async getUserMessages() {
      const URL =
        process.env.VUE_APP_BACKEND_URL +
        "/messages/sender/5f73b08ae4bbe106781fdf7c"
      const apiRes = await axios.get(URL);

      this.messages = apiRes.data;
    },
    // async checkMessages() {
    //   setInterval(this.getUserMessages, 20000)
    // }
  },
   computed: {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  created() {
    try {
      this.getUserMessages();
      // this.checkMessages()
    } catch (err) {
      console.error(err, axios);
    }
  }
};



</script>

<style lang="scss"></style>
