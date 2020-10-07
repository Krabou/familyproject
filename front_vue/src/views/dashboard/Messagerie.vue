<template>
  <main id="messagerie">
    <h1>Messagerie</h1>
    <h2 class="title">MEssages reçus</h2>
    <ListMessages messages_type="received" />
    <h2 class="title">MEssages envoyes</h2>
    <ListMessages messages_type="sent" />
  </main>
</template>

<script>
import ListMessages from "@/components/messages/ListMessages.vue";
export default {
  components: {
    ListMessages
  }
};
</script>

<style lang="scss"></style>
