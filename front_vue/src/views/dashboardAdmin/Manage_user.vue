<template>
  <ul>
    <li v-for="(user, i) in users" :key="i">{{user.username}}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" 
      );
      this.users = apiRes.data;
    }
  },
  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
</style>