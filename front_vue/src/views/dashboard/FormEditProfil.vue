<template>
  <main class="main-form" id="editUser">
    <form class="form" @submit.prevent="editUser(currentUser._id)">
       <h1 v-if="currentUser">Editer votre profil {{ currentUser.username }}</h1>
          <label class="label" for="username">Pseudo</label>
          <input
            class="input"
            type="test"
            id="username"
            v-model="currentUser.username"
          />
    <label class="label" for="description">Description</label>
     <textarea
        class="textarea"
        role="textbox"
        id="message"
        rows="4"
        cols="50"
        v-model="currentUser.description"
      ></textarea>
      <button class="btn">EDITER</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    };
  },

  computed:   {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  methods:{
      // On édite l'utilisateur
   async editUser(id) {
        try {
          const apiRes = await axios.patch(
            process.env.VUE_APP_BACKEND_URL + "/users/editUser/" + id,
            {
              ...this.currentUser
            }
          );
          this.$router.push("/profil/"+ id);
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