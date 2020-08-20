<template>
  <ul>
    <li v-for="(ad, i) in ads" :key="i">{{ad["provider_id"][adress]}}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ads: []
    };
  },
  methods: {
    async getAds() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/ads/" 
      );
      this.ads = apiRes.data;
    }
  },
  created() {
    try {
      this.getAds();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
</style>