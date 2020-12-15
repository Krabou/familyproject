<template>
  <main class="main-form">
 
    <!-- <FormCreateMessage class="formMessage" :receiver="ad.provider._id" /> -->
    <FormCreateMessage
      class="formMessage"
      :receiver="user._id" 
      :id_ad="id_ad"
    />
    
  </main>
</template>

<script>
//mettre computed
import axios from "axios";
import FormCreateMessage from "@/components/messages/FormCreateMessage";
export default {
  components: {
    FormCreateMessage
  },
  data() {
    return {
      id_ad:"",
      user:{},
      ad: {
        provider: {
          adress: {},
          children: {}
        }
      }
    };
  },

  methods: {
    // Afficher toutes les annonces
    // async getAd(id) {
    //   const apiRes = await axios.get(
    //     process.env.VUE_APP_BACKEND_URL + "/ads/" + id
    //   );
    //   this.ad = apiRes.data;
    // },
        async getUser() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id
      );
      this.user = apiRes.data;
    }
  },
  mounted() {
    // this.adId = this.$route.params.id;
    this.id_ad = this.$route.query.id_ad
    console.log("ici quest ce quon a",this.id_ad)
    try {
      this.getUser()
      // this.getAd(this.adId);
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
@media screen and (min-width: 769px) {

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

  .main-form {
    margin: 100px 0 0;
  }
}
</style>
