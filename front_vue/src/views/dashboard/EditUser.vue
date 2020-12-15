<template>
  <main class="main-form" id="editUser">
    <form class="form" @submit.prevent="editUser(userId)">
      <h1>
        Editer le rôle de {{ user.last_name }} {{ user.first_name }}
      </h1>
        <label for="role" class="label">Statut de l'annonce</label>
      <select v-model="user.role" id="role" class="input">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button class="btn">EDITER</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      user: {}
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
        try {
          const apiRes = await axios.patch(
            process.env.VUE_APP_BACKEND_URL + "/users/editUser/" + id,
            {
              ...this.user
            }
          );
          this.$router.push("/manageUser");
            console.log(apiRes);
            this.flashMessage.success({
          title: "Success",
          message: "Le rôle a bien été modifié !",
          time: 5000
        })
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

.hidden {
  display: none;
}

@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    padding: 50px;
    width: 60vw;
  }

  .main-form {
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgb(217, 74, 100) 100%
    );
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
