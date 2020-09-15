<template>
  <header role="banner" id="header">
    <a role="link" href="/">
      <figure role="figure" class="logoHeader">
        <img role="img" src="./../assets/logo.gif" alt="logo" />
      </figure>
    </a>
    <NavMain />
    <NavMobile />
  </header>
</template>

<script>
import NavMain from "@/components/NavMain";
import NavMobile from "@/components/NavMobile";
export default {
  created() {
    console.log(process.env);
  },
  components: {
    NavMain,
    NavMobile
  }
};
</script>

<style  scoped>
header {
  position: fixed;
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  height: 90px;
  justify-content: space-between;
  padding: 0 4vw;
  top: 0;
  width: 100%;
  z-index: 10;
}

.header-active {
  border-bottom: gray 1px solid;
  height: 80px;
  position: fixed;
  top: 0;
}

header > a {
  align-items: center;
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.logoHeader > img {
  width: 100%;
}

body {
  overflow-x: hidden;
}

.logoHeader {
  height: 10vh;
  margin-right: 30px;
  width: 10vh;
}

.header-active > a > .logoHeader {
  height: 8vh;
  width: 8vh;
}
</style>