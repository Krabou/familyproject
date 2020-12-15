<template>
  <form class="form" v-on:submit.prevent="editPassword">
    <h2>Mettez à jour votre mot de passe</h2>
    <label class="label" for="password">Mot de passe actuel</label>
    <input
      class="input"
      type="password"
      v-model="oldPassword"
      id="old-password"
    />
    <label class="label" for="password">Nouveau mot de passe</label>
    <input class="input" type="password" v-model="password" id="password" />
    <button class="btn">EDITER</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      oldPassword: "",
      password: ""
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["user/current"];
    }
  },
  methods: {
    //On édite le mot de passe
    async editPassword() {
      const { oldPassword, password } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL +
            "/users/formEditParameters/password/" +
            this.$store.getters["user/current"]._id,
          { oldPassword, password }
        );
         this.flashMessage.success({
          title: "Success",
          message: "Votre mot de passe a bien été modifié !",
          time: 5000
        })
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
//CSS AVATAR
.avatar {
  height: 60px;
  width: 60px;
}
.avatar > img {
  width: 100%;
}

//CSS FORM
.main-form {
  margin: 100px 0 0;
}
.form {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
.main-form p {
  margin-bottom: 30px;
}
.label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}
.input {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
}
.textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}
.btn {
  background: rgb(217,74,100);
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
  cursor: pointer;
}
.btn:hover {
  background: black;
  transition: 2s;
}
@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
  }
}
@media screen and (max-width: 768px) {
  .form {
    padding: 15px;
    width: 100;
  }
  .main-form {
    margin: 100px 0 0;
  }
}
// .hidden {
//   display: none;
// }
</style>