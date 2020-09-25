<template>
  <nav class="mainNav" role="navigation">
    <ul role="list">
      <router-link :to="'/dashboard/' + '5f3faab075da6d03181092b3'"
        >Dashboard</router-link
      >
      <router-link to="/amis">Amis</router-link>
      <router-link to="/ads">Annonces</router-link>
      <router-link to="/messagerie">Messagerie</router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavDashboard"
};
</script>

<style lang="scss" scoped>
</style>
