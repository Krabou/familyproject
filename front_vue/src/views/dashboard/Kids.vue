<template>
  <main class="main-form" id="add-kids">
    <form class="form" @submit.prevent="addKid(userId)">
      <h1>
        Ajouter un enfant
      </h1>
      <label for="childGender" class="label">Sexe</label>
      <!-- <select v-model="child_gender" id="gender" class="select">
        <option disabled value="">Sélectionner</option>
        <option value="female">fille</option>
        <option value="male">garçon</option>
      </select> -->
      <label for="childFirstname" class="label">Prénom</label>
      <input
        type="text"
        v-model="child_firstname"
        id="childFirstname"
        class="input"
      />
      <label for="childBirthday" class="label">Date de naissance</label>
      <input type="date" v-model="child_birthdate" class="input" />
      <button class="btn">AJOUTER</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      // child_gender: "",
      child_firstname: "",
      child_birthdate: ""
    };
  },
  methods: {
    // On affiche l'utilisateur
    // async getUser(id) {
    //   const apiRes = await axios.get(
    //     process.env.VUE_APP_BACKEND_URL + "/users/" + id
    //   );
    //   this.user = apiRes.data;
    // },
    // On édite l'utilisateur
    async addKid(id) {
      const { child_firstname, child_birthdate } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/edit_user/" + id,
          {
            $push: {
              children: { child_firstname, child_birthdate }
            }
          }
        );
        console.log(apiRes);
      } catch (Err) {
        console.error(Err);
      }
    }
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  mounted() {
    //on utilise l'id du currentuser comme parametre de la fonction ad kid
    this.userId = this.$store.getters["user/current"]._id;
    try {
      this.addKid(this.userId);
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>
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
.select {
  align-self: flex-start;
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  color: black;
  font-size: 20px;
  height: 30px;
  margin-bottom: 15px;
  padding: 0 15px;
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
}

.hidden {
  display: none;
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
    background: radial-gradient(
      circle,
      rgba(217, 74, 100, 1) 0%,
      rgba(255, 255, 255, 1) 100%
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