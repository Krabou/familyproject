<template>
  <main class="main-form" id="ad">
    <form class="form" @submit.prevent="postAd(currentUser._id)">
      <h1>Déposer une annonce</h1>
      <label class="label" for="title">Titre de l'annonce</label>
      <input class="input" type="text" id="title" v-model="title" />
      <label class="label" for="date">Date</label>
      <input class="input" type="date" id="date" v-model="date" />
      <label class="label" for="start">Début</label>
      <input class="input" type="time" v-model="starts_at" id="start" />
      <label class="label" for="end">Fin</label>
      <input class="input" type="time" v-model="ends_at" id="end" />
      <label class="label" for="content">Description de l'annonce</label>
      <textarea
        class="textarea"
        rows="4"
        cols="50"
        id="content"
        v-model="description"
      ></textarea>
      <button class="btn">POSTER</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      provider: null,
      title: "",
      date: null,
      starts_at: null,
      ends_at: null,
      description: ""
    };
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  methods: {
    async postAd(id) {
      const {
        provider,
        title,
        date,
        starts_at,
        ends_at,
        description
      } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/ads",
          { provider, title, date, starts_at, ends_at, description }
        );
        // alert("Votre annonce à bien été crée");
          this.$router.push("/manageAd/userAds/"+id);
            this.flashMessage.success({
          title: "Success",
          message: "Votre annonce à bien été crée !",
          time: 5000
        })
        console.log(apiRes);
      } catch (Err) {
        console.log(Err);
      }
    }
  },
  created() {
    try {
      this.provider = this.$store.getters["user/current"]._id;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-form {
  margin: 100px 0 0;
}

.form {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}

.main-form p {
  margin-bottom: 30px;
}

.label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}

.input {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
}

.textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}

.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}

.btn:hover {
  background: black;
  transition: 2s;
}

@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }

  .main-form {
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
  .form {
    padding: 15px;
    width: 100;
  }

  .main-form {
    margin: 100px 0 0;
  }
}
</style>
