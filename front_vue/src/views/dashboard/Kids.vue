<template>
  <main class="main-form" id="add-kids">
    <form class="form" @submit.prevent="addKid(userId)">
      <h1>
       Ajouter un enfant
      </h1>
     
      <div class="input-radio-list">
        <div>
          <input
            class="input-radio"
            type="radio"
            id="user"
            v-model="role"
            value="user"
          />
          <label class="label-radio" for="user">User</label>
        </div>
        <div>
          <input
            class="input-radio"
            type="radio"
            id="admin"
            v-model="role"
            value="admin"
          />
          <label class="label-radio" for="admin">Admin</label>
        </div>
      </div>
      <button class="btn">Editer !</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    userId:""
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

.input-radio {
  margin: 15px;
}

.input-radio-list {
  left: 0;
}

.input-radio-list {
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