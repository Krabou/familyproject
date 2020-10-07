<template>
  <main id="main-ads">
    <section>
    <h1>Annonces</h1>
          <form class="search">
        <input
          type="text"
          class="searchTerm"
          v-model="search"
          placeholder="Rechercher"
        />
        <button type="submit" class="searchButton">
          <font-awesome-icon icon="search" size="1x" />
        </button>
      </form>
    <div class="create-ad-link">
      <router-link :to="'/form_create_ad/'">DEPOSER UNE ANNONCE</router-link>

    </div>
     
     <p class="no-result" v-if="filteredAds.length == 0">
        Il n'y a pas d'annonce, soyez le premier à en créer une !
      </p>
    <ul class="ads">
      <li class="ad" v-for="(ad, i) in filteredAds" :key="i">
        <figure>
          <img :src="ad.provider_id.avatar" alt="user picture" />
        </figure>
        
        <h2>{{ad.title}}</h2>
        <h3>{{ad.provider_id.username}}, annonce postée le {{ad.release_date | moment("DD/MM/YYYY") }}</h3>
        <p>{{ad.provider_id.children.length}} enfant<span v-if="ad.provider_id.children.length > 1">s</span></p>
        <p class="location">
          <span class="icon">
            <font-awesome-icon id="location" icon="map-marker-alt" size="1x" />
          </span>
          {{ad.provider_id.adress.city}}
        </p>
        <p>Besoin d'un babysitting le {{ad.date | moment("DD/MM/YYYY")}} de {{ad.starts_at}} à {{ad.ends_at}}</p>
        <router-link :to="'/ads/' + ad._id">EN SAVOIR PLUS</router-link>
      </li>
    </ul></section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ads: [],
      search: "",
    };
  },
  methods: {
    async getAds() {
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/ads/");
      this.ads = apiRes.data;
      console.log(apiRes);
    }
  },
   computed: {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
    filteredAds() {
  return this.ads.filter(ad => {
    if(ad.provider_id._id != this.currentUser._id){
        return (
          //Replace remplace les caracteres speciaux

          ad.provider_id.adress.city
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            ) ||
          ad.provider_id.adress.street
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            ) ||
          ad.title
            .toLowerCase()
            .replace("à", "a")
            .replace("â", "a")
            .replace("ä", "a")
            .replace("é", "e")
            .replace("è", "e")
            .replace("ê", "e")
            .replace("ë", "e")
            .replace("î", "i")
            .replace("ï", "i")
            .replace("ö", "o")
            .replace("ô", "o")
            .replace("û", "u")
            .replace("ü", "u")
            .replace("-", "")
            .includes(
              this.search
                .toLowerCase()
                .replace("à", "a")
                .replace("â", "a")
                .replace("ä", "a")
                .replace("é", "e")
                .replace("è", "e")
                .replace("ê", "e")
                .replace("ë", "e")
                .replace("î", "i")
                .replace("ï", "i")
                .replace("ö", "o")
                .replace("ô", "o")
                .replace("û", "u")
                .replace("ü", "u")
                .replace("-", "")
            )
        );}
      });}
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
  background: rgb(217,74,100);
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
  transition: 2s;
}
.ads {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.no-result{
 margin: auto;
 text-align: center;
  height: 150px;
  width: 320px;
 background: rgb(217,74,100);
  color: whitesmoke;
  padding: 50px 15px;
  box-shadow: 0px 14px 28px black;
}
.ad {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 320px;
  background: rgb(0,173,191);
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
  min-height: 100%;
  max-height: 100%;
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
