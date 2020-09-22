<template>
  <main class="main-form" id="connexion">
    <!-- <section class="sectionTitle">
     
      <router-link to="/signup">CR&Eacute;ER UN COMPTE</router-link>
    </section>-->
    <!-- <section>  -->

    <form class="form" v-on:submit.prevent="signin">
      <h1>
        J'AI UN COMPTE |
        <span>
          <router-link to="/signup">CR&Eacute;ER UN COMPTE</router-link>
        </span>
      </h1>
      <label class="label" for="email">Adresse e-mail</label>
      <input class="input" type="email" id="email" v-model="email" />
      <label class="label" for="password">Mot de passe</label>
      <input class="input" type="password" id="password" v-model="password" />
      <button class="btn">CONNEXION</button>
      <router-link to="/reinitialisation">Mot de passe oubli&eacute;?</router-link>
    </form>
    <!-- </section> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "Karima.krachai@gmail.com",
      password: "lestat"
    };
  },
  methods: {
    signin() {
      this.$store
        .dispatch("user/signin", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }
};
</script>

<style lang="scss">
// .formCo {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid black;
//   width: 375px;
//   margin: auto;
//   margin-bottom: 100px;
//   padding: 30px 30px 0 30px;
// }
// .sectionBtnCo {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 375px;
//   margin: auto;
// }
// .btnCo.active,
// .btnCo:hover {
//   background: #17a2b8;
//   color: whitesmoke;
//   cursor: pointer;
// }
// .btnCo {
//   height: 35px;
//   width: 175px;
//   border: 1px solid #17a2b8;
//   color: #17a2b8;
//   background: whitesmoke;
//   border-radius: 5%;
//   margin: 50px 0;
//   font-size: 15px;
// }
// .btn {
//   height: 35px;
//   width: 175px;
//   border: 1px solid black;
//   background: black;
//   color: whitesmoke;
//   margin: 25px;
//   font-size: 15px;
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
</style>