<template>
  <ul>
    <li v-for="(message, i) in messages" :key="i">
      {{ message.text }}

    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    messages() {
      const type =
        this.$props.messages_type === "received" ? "receivedMessages" : "sentMessages";
      return this.$store.getters[`message/${type}`];
    }
  },
  props: ["messages_type"]
};
</script>

<style>
</style>