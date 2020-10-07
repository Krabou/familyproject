<template>
  <main class="main-form" id="editUser">
    <form class="form" @submit.prevent="editUser(userId)">
      <h1>
        Editer le rôle de {{ user.last_name }} {{ user.first_name }} :
        {{ user.role }}
      </h1>
      <!-- <label class="label" for="role">Choisissez un rôle</label>
      <select v-model="role" id="role" class="label">
        <option disabled value>Choisissez un role</option>
        <option>User</option>
        <option>Admin</option>
      </select> -->
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
      role: "",
      user: ""
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

.input-radio {
  margin: 15px;
}

.input-radio-list {
  left: 0;
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
