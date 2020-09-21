<template>
  <main class="main-form" id="ad">
    <form class="form" @submit.prevent="postAd">
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
      <textarea class="textarea" rows="4" cols="50" id="content" v-model="description"></textarea>
      <button class="btn">Poster !</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      provider_id: null,
      title: "titre",
      date: null,
      starts_at: null,
      ends_at: null,
      description: "babybooom"
    };
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  methods: {
    async postAd() {
      const {
        provider_id,
        title,
        date,
        starts_at,
        ends_at,
        description
      } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/ads",
          { provider_id, title, date, starts_at, ends_at, description }
        );
        console.log(apiRes);
      } catch (Err) {
        console.log(Err);
      }
    }
  },
  created() {
    try {
      this.provider_id = this.$store.getters["user/current"]._id;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss">
// #ad form {
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: space-between;
//   width: 500px;
//   margin: auto;
// }
// #ad form label {
//   font-size: 20px;
//   line-height: 25px;
// }
// #ad form input,
// textarea {
//   font-size: 15px;
//   line-height: 25px;
//   margin: 15px 0;
//   padding: 10px 15px;
// }
// #ad .btn {
//   height: 35px;
//   width: 175px;
//   border: 1px solid black;
//   background: black;
//   color: whitesmoke;
//   margin: 25px 0 100px 0;
//   font-size: 20px;
// }

// main#contact
.main-form {
  margin: 100px 0 0;
}
// main#contact form
.form {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
// main#contact
.main-form p {
  margin-bottom: 30px;
}
// main#contact

.label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}
// main#contact
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
// main#contact
.textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  // margin-bottom: 30px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}
// main#contact button
.btn {
  background: rosybrown;
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  // margin-right: 0;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
// main#contact button:hover
.btn:hover {
  background: black;
}
@media screen and (min-width: 769px) {
  // main#contact
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
  }
}
@media screen and (max-width: 768px) {
  // main#contact
  .form {
    padding: 15px;
    width: 100;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
  }
}
</style>

