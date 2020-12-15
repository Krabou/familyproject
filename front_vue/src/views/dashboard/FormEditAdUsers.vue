<template>
  <main class="main-form" id="ad">
    <form class="form" @submit.prevent="patchAd(adId)">
      <h1>Editez l'annonce</h1>
       <label for="active" class="label">Statut de l'annonce</label>
      <select v-model="ad.is_active" id="active" class="input">
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
      <label class="label" for="title">Titre de l'annonce</label>
      <input class="input" type="text" id="title" v-model="ad.title" />
      <label class="label" for="content">Description de l'annonce</label>
      <textarea
        class="textarea"
        rows="4"
        cols="50"
        id="content"
        v-model="ad.description"
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
          process.env.VUE_APP_BACKEND_URL + "/ads/formEditAd/" + id,
          { ...this.ad }
        );
        console.log(apiRes);
          this.$router.push("/manageAds/");
            this.flashMessage.success({
          title: "Success",
          message: "L'annonce a bien été modifié !",
          time: 5000
        })
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
  background: rgb(217,74,100);
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
  color: whitesmoke;
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
