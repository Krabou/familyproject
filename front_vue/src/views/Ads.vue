<template>
  <main id="ads">
    <h1>Annonces</h1>
    <router-link :to="'/form_create_ad/'">Déposer une annonce</router-link>
    <ul>
      <li v-for="(ad, i) in ads" :key="i">
        <section>
          <figure>
            <img src alt="user picture" />
          </figure>
          <h2>{{ad.description}}</h2>
          <p>cree par {{ad.provider_id}}</p>
          <p>le {{ad.starts_at}} à {{ad.ends_at}}</p>
          <ul>
            <li>faire boucle pour user child</li>
          </ul>
          <p>{{ad.content}}</p>
          <router-link :to="''">Répondre</router-link>
        </section>
      </li>
    </ul>
  </main>
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
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/ads/");
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

<style lang="scss"></style>
