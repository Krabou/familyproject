<template>
<main class="main-form">
  <form class="form" @submit.prevent="editAvatar(userId)">
    <h1>Modifier votre avatar</h1>
    <label class="label" for="avatar"
      >
      <font-awesome-icon icon="camera" size="2x"
        /> Choisissez une photo 
    </label>
    <input
      class="hidden"
      type="file"
      @change="handleAvatar"
      id="avatar"
      accept="image/*"
    />
    <button class="btn">MODIFIER</button>
  </form></main>
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
         this.$router.push("/profil/"+ id);
           this.flashMessage.success({
          title: "Success",
          message: "La photo a bien été modifié !",
          time: 5000
        })
      } catch (Err) {
        console.error(Err);
         this.$router.push("/profil/"+ id);
           this.flashMessage.error({
          title: "Warning",
          message: "La photo n'a  pas bien été modifié !",
          time: 5000
        })
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
a {
  color: black;
  cursor: pointer;
}
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
  text-align: center;
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
.select {
  align-self: flex-start;
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  color: black;
  font-size: 20px;
  height: 30px;
  margin-bottom: 15px;
  padding: 0 15px;
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
  background: rgb(217, 74, 100);
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
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
    background: rgb(217, 74, 100);
    background: linear-gradient(
      0deg,
      rgba(217, 74, 100, 1) 0%,
      rgba(19, 17, 17, 1) 100%
    );
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
    // background: url("./../assets/sakura.jpg");
    // background-size: 100%;
    // background-attachment: fixed;
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
.hidden {
  display: none;
}
</style>