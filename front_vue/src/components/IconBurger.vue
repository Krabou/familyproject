<template>
  <font-awesome-icon
    id="burger"
    icon="bars"
    @click="toggleNavMobile"
    size="2x"
  />
</template>

<script>
export default {
  name: "IconBurger",
  methods: {
    toggleNavMobile() {
      console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile");
    }
  }
};
</script>

<style lang="scss" scoped>
#burger {
  cursor: pointer;
}
</style>
