<template>
  <main class="main-form" id="editUser">
    <form @submit.prevent="editUser(userId)">
      <h1>
        Editer le profil de {{ user.last_name }} {{ user.first_name }}
      </h1>
      <div>
        <figure class="avatar"><img :src="user.avatar" alt="avatar"></figure>
       <label class="label" for="avatar"><font-awesome-icon icon="camera" size="2x" /></label>
        <input class="hidden" type="file" :v-model="user.avatar" id="avatar">
      <button class="btn">Editer !</button></div>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      role: "",
      user: "",
      avatar:""
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
    // On édite l'utilisateur
    async editUser(id) {
      const { role } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/edit_user/" + id,
          {
            role
          }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    },
        signup() {
      const fd = new FormData(); // form data nécessaire pour envoyer des fichiers images (files)
      // fd.append("username", this.user.username);
      // fd.append("first_name", this.user.first_name);
      // fd.append("last_name", this.user.last_name);
      // fd.append("email", this.user.email);
      // fd.append("password", this.user.password);
      // fd.append("birthdate", this.user.birthdate);
      // fd.append("number", this.user.adress.number);
      // fd.append("street", this.user.adress.street);
      // fd.append("zipcode", this.user.adress.zipCode);
      // fd.append("city", this.user.adress.city);
      // fd.append("country", this.user.adress.country);
      if (this.user.avatar) fd.append("avatar", this.user.avatar);

      this.$store.dispatch(
        "user/signup",
        fd

        // { ...this.user }
      ); // on utilise
      this.$router.push("/signin");
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
//CSS AVATAR
.avatar{
  height: 60px;
  width: 60px;
}
.avatar>img{
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
  background: rosybrown;
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