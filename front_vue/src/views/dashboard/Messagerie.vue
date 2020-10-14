<template>
<main id="messagerie">
  <!-- <main id="messagerie">
    <h1>Messagerie</h1>
    <h2 class="title">MEssages reçus</h2>
    <ListMessages messages_type="received" />
    <h2 class="title">MEssages envoyes</h2>
    <ListMessages messages_type="sent" />
  </main> -->
  <div>
    <h1 class="title">Mes messages</h1>
    <!-- <h2>Messages envoyé</h2>
    <ul>
      <li v-for="(msg, i) in messages" :key="i">
        <h2 v-if="msg.receiver" class="title">{{ msg.receiver.username }}</h2>
        <p>
          {{ msg.text }}
        </p>
        <span>{{ msg.date | moment("DD/MM/YYYY") }}</span>
      </li>
    </ul> -->
    <h2>Messages recu</h2>
 <ul>
      <li v-for="(msg, i) in messages" :key="i">
        <h2 v-if="msg.sender" class="title">{{ msg.sender.username }}</h2>
        <p>
          {{ msg.text }}
        </p>
        <span>{{ msg.date | moment("DD/MM/YYYY") }}</span>
      </li>
    </ul>
  </div>
</main>
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
    // async getUserMessages() {
    //   const URL =
    //     process.env.VUE_APP_BACKEND_URL +
    //     "/messages/sender/"+ this.$store.getters["user/current"]._id;
    //   const apiRes = await axios.get(URL);

    //   this.messages = apiRes.data;
    // },
    // async checkMessages() {
    //   setInterval(this.getUserMessages, 20000)
    // }
      async getReceivedMessages(id) {
      const URL =
        process.env.VUE_APP_BACKEND_URL +
        "/messages/receiver/"+ id;
      const apiRes = await axios.get(URL);

      this.messages = apiRes.data;
    },
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
      const id = this.$store.getters["user/current"]._id
      // this.getUserMessages()
      this.getReceivedMessages(id)
      // this.checkMessages()
    } catch (err) {
      console.error(err, axios);
    }
  }
};



</script>

<style lang="scss" scoped>
main#messagerie {
  margin: 100px 0 0;
}
</style>
