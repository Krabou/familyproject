<template>
  <main class="main-form" id="ad">
    <form class="form" @submit.prevent="patchAd(adId)">
      <h1>Editez votre annonce</h1>
      <label class="label" for="title">Titre de l'annonce</label>
      <input class="input" type="text" id="title" v-model="ad.title" />
      <label class="label" for="date">Date</label>
      <input class="input" type="date" id="date" v-model="ad.date" />
      <label class="label" for="start">Début</label>
      <input class="input" type="time" v-model="ad.starts_at" id="start" />
      <label class="label" for="end">Fin</label>
      <input class="input" type="time" v-model="ad.ends_at" id="end" />
      <label class="label" for="content">Description de l'annonce</label>
      <textarea
        class="textarea"
        rows="4"
        cols="50"
        id="content"
        v-model="ad.description"
      ></textarea>
      <button class="btn">Poster !</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      adId: "",
      ad: ""
    };
  },
  methods: {
    //On affiche l'annonce
    async getAd(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/ads/" + id
      );
      this.ad = apiRes.data;
    },
    //On édite l'annonce
    async patchAd(id) {
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/ads/form_edit_ad/" + id,
          { ...this.ad }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },
  mounted() {
    this.adId = this.$route.params.id;
    try {
      this.getAd(this.adId);
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
  background: rosybrown;
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