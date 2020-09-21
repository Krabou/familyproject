<template>
  <main id="ads">
    <h1>Annonces</h1>
    <router-link :to="'/form_create_ad/'">Déposer une annonce</router-link>
    <ul>
      <li class="ad" v-for="(ad, i) in ads" :key="i">
          <figure>
            <img :src="ad.provider_id.avatar" alt="user picture" />
          </figure>
          <h2>{{ad.title}}</h2>
           <p> <font-awesome-icon id="location" icon="map-marker-alt" size="2x" />{{ad.provider_id.adress.city}}</p>
          <p>cree par {{ad.provider_id.username}} le {{ad.release_date | moment("DD/MM/YYYY") }}</p>
         
          <p>le  {{ad.date | moment("DD/MM/YYYY")}} de {{ad.starts_at}} à {{ad.ends_at}}</p>
          <ul>
            <li>faire boucle pour user child</li>
          </ul>
          <p>{{ad.description}}</p>
          <router-link :to="'/ad/' + ad._id">Donner un coup de main</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // provider_id:null,
      ads: []
    };
  },
  methods: {
    async getAds() {
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/ads/");
      this.ads = apiRes.data;
      console.log(apiRes)
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

<style lang="scss">

</style>
