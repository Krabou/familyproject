<template>
  <main id="messagerie">
    <h1 class="title">Mes messages</h1>
    <section>
      <h2>Messages reçu</h2>
      <ul>
        <li v-for="(msg, i) in messages" :key="i">
          <h3 v-if="msg.sender" class="title">{{ msg.sender.username }}</h3>
          <h4 v-if="msg.title">Sujet: {{ msg.title }}</h4>
          <span>{{ msg.date | moment("DD/MM/YYYY") }}</span>
          <p>
            {{ msg.text }}
          </p>
          <div class="btn">
            <router-link
              class="link-message"
              :to="'/message/' + msg.sender._id"
              :receiver="msg.sender._id"
            >
              <span><font-awesome-icon icon="envelope" size="1x"/></span>
              Message
            </router-link>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h2>Messages envoyé</h2>
      <ul>
        <li v-for="(msg, i) in messages" :key="i">
          <h3 v-if="msg.receiver" class="title">{{ msg.receiver.username }}</h3>
          <h4 v-if="msg.title">Sujet: {{ msg.title }}</h4>
          <span>{{ msg.date | moment("DD/MM/YYYY") }}</span>
          <p>
            {{ msg.text }}
          </p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    async getUserMessages() {
      const URL =
        process.env.VUE_APP_BACKEND_URL +
        "/messages/sender/" +
        this.$store.getters["user/current"]._id;
      const apiRes = await axios.get(URL);

      this.messages = apiRes.data;
    },
    async checkMessages() {
      setInterval(this.getUserMessages, 20000);
    },
    async getReceivedMessages(id) {
      const URL = process.env.VUE_APP_BACKEND_URL + "/messages/receiver/" + id;
      const apiRes = await axios.get(URL);

      this.messages = apiRes.data;
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
  },
  created() {
    try {
      const id = this.$store.getters["user/current"]._id;
      this.getUserMessages();
      this.getReceivedMessages(id);
      // this.checkMessages()
    } catch (err) {
      console.error(err, axios);
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
div.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
main#messagerie {
  margin: 100px 0 0;
}
h1 {
  font-size: 35px;
}
h2 {
  font-size: 30px;
  margin-bottom: 25px;
}
h3,
h4 {
  font-size: 25px;
  margin: 25px;
}
ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}
li{
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  margin: 15px 0;
  padding: 15px;
}
p {
  font-size: 16px;
  margin: 35px auto;
}
section {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
@media screen and (min-width: 769px) {
  section {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  main#messagerie {
    margin: 100px 0 0;
    padding: 50px;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
  }
}
@media screen and (max-width: 768px) {
  section {
    padding: 15px;
    width: 100;
  }
  main#messagerie {
    margin: 100px 0 0;
  }
}
</style>
