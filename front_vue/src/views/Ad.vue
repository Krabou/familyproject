<template>
  <main id="ad">
    Annonce complete
    envoi message
    {{ ad }}
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ad: "",
    };
  },
  methods: {
    //Afficher toutes les annonces
    async getAd(id) {
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/ads/" + id);
      this.ad = apiRes.data;
    },
  },
  created() {
    try {
       this.adId = this.$route.params.id;
      this.getAd(this.adId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
</style>