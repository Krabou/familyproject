<template>
  <form class="form" v-on:submit.prevent="editInfos">
    <h2>Mettez à jour vos informations</h2>
  <label class="label" for="gender">Civilité</label>
        <select  v-model="currentUser.gender" id="gender" class="select">
          <option disabled value="">Sélectionner</option>
          <option value="female">Mme.</option>
          <option value="male">M.</option>
        </select>
        <label class="label" for="last_name">Nom *</label>
        <input
          class="input"
          type="text"
          id="last_name"
          v-model="currentUser.last_name"
        />
        <label class="label" for="first_name">Prénom *</label>
        <input
          class="input"
          type="text"
          id="first_name"
          v-model="currentUser.first_name"
        />
        <label class="label" for="email">Adresse e-mail *</label>
        <input class="input" type="email" id="email" v-model="currentUser.email" />
        <label class="label" for="birthdate">Date de naissance</label>
        <input
          class="input"
          type="date"
          id="birthdate"
          v-model="currentUser.birthdate"
        />
        <label class="label" for="number">Numéro de rue *</label>
        <input
          class="input"
          type="number"
          id="number"
          v-model="currentUser.adress.number"
          min="1"
        />
        <label class="label" for="street">Rue *</label>
        <input
          class="input"
          type="text"
          id="street"
          v-model="currentUser.adress.street"
        />
        <label class="label" for="zipcode">Code postal *</label>
        <input
          class="input"
          type="number"
          id="zipcode"
          v-model="currentUser.adress.zipCode"
          min="0"
        />
        <label class="label" for="city">Ville *</label>
        <input class="input" type="text" id="city" v-model="currentUser.adress.city" />
        <label class="label" for="country">Pays *</label>
        <input
          class="input"
          type="text"
          id="country"
          v-model="currentUser.adress.country"
        />

    <button class="btn">EDITER</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
//   data() {
//     return {
//     currentUser:{}
//     };
//   },
  computed: {
    currentUser() {
      return this.$store.getters["user/current"];
    }
  },
  methods: {
    //On édite les infos
    async editInfos() {
    //   const { oldPassword, password } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL +
            "/users/editUser/" +
            this.$store.getters["user/current"]._id,
          { ...this.currentUser }
        );
        this.flashMessage.success({
          title: "Success",
          message: "Les informations ont bien été modifié !",
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
.select {
  align-self: flex-start;
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  color: black;
  font-size: 20px;
  height: 30px;
  margin-bottom: 15px;
  padding: 0 15px;
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

</style>