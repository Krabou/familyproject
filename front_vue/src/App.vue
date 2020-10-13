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
      this.$store.dispatch("user/getUserByToken");
    }
  }
};
</script>
<style lang="scss">
@import url("./styles/reset.css");

main {
  margin-top: 90px;
  min-height: calc(100vh - 90px);
}
</style>
