<template>
  <form @submit.prevent="editAvatar(userId)">
    <h2>Avatar</h2>
    <figure class="avatar"><img :src="user.avatar" alt="avatar" /></figure>
    <label class="label" for="avatar"
      >avatar
      <!-- <font-awesome-icon icon="camera" size="2x"
        /> -->
    </label>
    <input
      class="hidden"
      type="file"
      @change="handleAvatar"
      id="avatar"
      accept="image/*"
    />
    <button class="btn">MODIFIER</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      user: "",
      selectedAvatar: ""
    };
  },
  methods: {
    // On affiche l'utilisateur
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.user = apiRes.data;
    },
    // on cible l'input
    handleAvatar(e) {
      this.selectedAvatar = e.target.files[0];
    },
    // On édite l'utilisateur
    async editAvatar(id) {
      const fd = new FormData();
      if (this.selectedAvatar) fd.append("avatar", this.selectedAvatar);
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL +
            "/users/formEditProfil/" +
            id +
            "/avatar",
          fd
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },
  mounted() {
    console.log(">>>>", this.$router); // accessible partout dans ton app
    this.userId = this.$route.params.id;
    try {
      this.getUser(this.userId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  height: 150px;
  width: 150px;
}
.avatar img {
  width: 100%;
}
</style>