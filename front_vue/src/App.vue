<template>
  <div id="app">
    <Header />
      <router-view />
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
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main{
  margin-top: 90px;
  min-height: 100vh;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
