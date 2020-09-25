<template>
  <main id="ad">
    Annonce complete envoi message
    <p>{{ ad.provider_id.username }}</p>
    <p>{{ ad.provider_id.adress.city }}</p>
      <span>
        <router-link :to="'/message/' + ad._id">
          <font-awesome-icon id="add" icon="envelope" size="1x" />
          Message
        </router-link>
      </span>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ad: {
        provider_id: {
          adress: ""
        }
      }
    };
  },
  methods: {
    //Afficher toutes les annonces
    async getAd(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/ads/" + id
      );
      this.ad = apiRes.data;
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

<style></style>
