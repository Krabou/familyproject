<template>
  <main class="main-form" id="editUser">
    <form class="form" @submit.prevent="editUser(userId)">
      <h1>Editer le rôle de {{ user.last_name }} {{ user.first_name }} : {{user.role}}</h1>
<div>
      <input class="input-radio" type="radio" id="role" v-model="role" value="user" />
      <label class="label-radio" for="role">User</label>
</div>
<div>
      <input class="input-radio" type="radio" id="role" v-model="role" value="admin" />
      <label class="label-radio" for="role">Admin</label>
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
      // this.$data représente tout l'objet retourné par la fonction data()
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

<style lang="scss">
// form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid #bdc3c7;
//   width: 500px;
// }
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
.btn {
  background: rosybrown;
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  // margin-right: 0;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
.btn:hover {
  background: black;
}
@media screen and (min-width: 769px) {
  // main#contact
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
  }
}
@media screen and (max-width: 768px) {
  // main#contact
  .form {
    padding: 15px;
    width: 100;
  }
  // main#contact
  .main-form {
    margin: 100px 0 0;
  }
}
.hidden {
  display: none;
}
</style>
