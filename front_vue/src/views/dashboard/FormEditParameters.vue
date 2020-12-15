<template>
  <main class="main-form" id="editUser">
      <h1 v-if="currentUser">Mes informations personnelles</h1>
     <Password />
     <Infos />
  </main>
</template>

<script>
import Password from "@/components/Password";
import Infos from "@/components/infos";

export default {
  data() {
    return {
    };
  },
  components: {
    Password,
    Infos
  },
  computed:   {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};


// import axios from "axios";

// export default {
//   data() {
//     return {
//       userId: "",
//       user: "",
//       selectedAvatar: ""
//     };
//   },
//   methods: {
  
//     // On affiche l'utilisateur
//     async getUser(id) {
//       const apiRes = await axios.get(
//         process.env.VUE_APP_BACKEND_URL + "/users/" + id
//       );
//       this.user = apiRes.data;
//     },
//     // on cible l'input
//   handleAvatar(e) {
//       this.selectedAvatar = e.target.files[0];
//     },
//     // On édite l'utilisateur
//     async editAvatar(id) {
//       const fd = new FormData();
//       if (this.selectedAvatar) fd.append("avatar", this.selectedAvatar);
//       try {
//         const apiRes = await axios.patch(
//           process.env.VUE_APP_BACKEND_URL +
//             "/users/form_edit_profil/" +
//             id +
//             "/avatar",
//           fd
//         );
//         console.log(apiRes);
//       } catch (Err) {
//         console.error(Err);
//       }
//     }
//   },
//   mounted() {
//     console.log(">>>>", this.$router); // accessible partout dans ton app
//     this.userId = this.$route.params.id;
//     try {
//       this.getUser(this.userId);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// };
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