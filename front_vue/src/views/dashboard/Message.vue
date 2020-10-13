<template>
  <main id="message">
 <h1>Message</h1>

   <FormCreateMessage class="formMessage" :receiver="ad.provider._id" />
  </main>
</template>

<script>
import axios from "axios";
import FormCreateMessage from "@/components/messages/FormCreateMessage";
export default {
    components: {
      FormCreateMessage
    },
  data() {
    return {
      ad: {
        provider: {
          adress: {},
          children: {}
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
  },
};
</script>

<style lang="scss" scoped>

// body {
//   font: 13px Helvetica, Arial;
// }
// form {
//   background: #000;
//   padding: 3px;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
// }
// form input {
//   border: 0;
//   padding: 10px;
//   width: 90%;
//   margin-right: 0.5%;
// }
// form button {
//   width: 9%;
//   background: rgb(130, 224, 255);
//   border: none;
//   padding: 10px;
// }
// #messages {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
// }
// #messages li {
//   padding: 5px 10px;
// }
// #messages li:nth-child(odd) {
//   background: #eee;
// }
</style>
