<template>
  <main id="message">
  <FormCreateMessage :receiver_id="ad.provider_id._id" />
  </main>
</template>

<script>
import FormCreateMessage from "@/components/messages/FormCreateMessage";
export default {
  components: {
    FormCreateMessage
  }
}
</script>

<style lang="scss" scoped>

body {
  font: 13px Helvetica, Arial;
}
form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}
form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  padding: 5px 10px;
}
#messages li:nth-child(odd) {
  background: #eee;
}
</style>
