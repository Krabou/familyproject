<template>
  <div id="app">
    <Header />
    <router-view />
    <FlashMessage :position="'right bottom'" />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import auth from "@/auth";

export default {
  components: {
    Header,
    Footer
  },
  beforeCreate() {
    const currentUser = this.$store.getters["user/current"];
    const token = auth.getLocalAuthToken();

    if (token && !currentUser) {
      // on utilise la fonction dispatch pour faire reference à une action du store
      this.$store.dispatch("user/getUserByToken");
    }
  }
};
</script>
<style lang="scss">
@import url("./styles/reset.scss");

main {
  margin-top: 90px;
  min-height: calc(100vh - 90px);
}
h1 {
  margin-bottom: 50px;
  text-align: center;
  font-size: 35px;
}
h1,
h2,
h3 {
  font-family: Montserrat;
}
p,
div {
  font-family: MyriadPro;
}
</style>
