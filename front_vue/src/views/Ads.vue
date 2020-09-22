<template>
  <main id="main-ads">
    <h1>Annonces</h1>
    <div class="create-ad-link">
      <router-link :to="'/form_create_ad/'">DEPOSER UNE ANNONCE</router-link>
    </div>
    <ul class="ads">
      <li class="ad" v-for="(ad, i) in ads" :key="i">
        <figure>
          <img :src="ad.provider_id.avatar" alt="user picture" />
        </figure>
        <h2>{{ad.title}}</h2>
        <h3>{{ad.provider_id.username}}, annonce postée le {{ad.release_date | moment("DD/MM/YYYY") }}</h3>
        <p class="location">
          <span class="icon">
            <font-awesome-icon id="location" icon="map-marker-alt" size="1x" />
          </span>
          {{ad.provider_id.adress.city}}
        </p>

        <p>Besoin d'un babysitting le {{ad.date | moment("DD/MM/YYYY")}} de {{ad.starts_at}} à {{ad.ends_at}}</p>
        <ul>
          pour
          <li>faire boucle pour user child</li>
        </ul>
        <!-- <p>{{ad.description}}</p> -->
        <router-link :to="'/ad/' + ad._id">EN SAVOIR PLUS</router-link>
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
      console.log(apiRes);
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

<style lang="scss" scoped>
.create-ad-link {
  text-align: center;
}
a {
  background: rosybrown;
  border: 3px solid white;
  color: whitesmoke;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 15px;
  outline: 1px solid black;
  width: auto;
  text-align: center;
  text-decoration: none;
}
a:hover {
  background: black;
  color: whitesmoke;
}
.ads {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.ad {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 320px;
  background: darkcyan;
  color: whitesmoke;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 14px 28px black;
}
.ad > figure {
  border: solid 5px whitesmoke;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
}
.ad > figure > img {
  min-width: 100%;
  max-width: 100%;
}
.ad > h2 {
  margin: 15px 0;
  text-transform: uppercase;
}
.ad > p {
  margin: 5px 0;
}
.ad > a {
  margin-top: 15px;
}
.location {
  text-transform: uppercase;
}
.ad > ul > li {
  list-style: none;
}
.icon {
  color: gold;
}

@media screen and (min-width: 769px) {
  .create-ad-link {
    margin: 50px 0 100px;
  }
  #main-ads {
    margin: 100px 0 0;
    padding: 50px;
  }
  .ad {
    margin: 0 35px 35px;
  }
}
@media screen and (max-width: 768px) {
  .create-ad-link {
    margin: 50px 0;
    text-align: center;
  }
  #main-ads {
    margin: 100px 0 50px;
  }
  .ad {
    margin: 0 0 15px;
  }
}
</style>
