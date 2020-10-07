<template>
  <main class="main-form" id="connexion">
    <form class="form" v-on:submit.prevent="signin">
      <h1>
        <span class="title"> J'AI UN COMPTE </span>
        <!-- <span>
        | <router-link to="/signup">CR&Eacute;ER UN COMPTE</router-link>
        </span> -->
      </h1>
      <label class="label" for="email">Adresse e-mail</label>
      <input
        class="input"
        type="email"
        id="email"
        autocomplete="email"
        v-model="email"
      />
      <label class="label" for="password">Mot de passe</label>
      <input
        class="input"
        type="password"
        id="password"
        autocomplete="current-password"
        v-model="password"
      />
      <button class="btn">CONNEXION</button>
      <p>
        Vous n'avez pas de compte ?
        <router-link to="/signup">Créer un compte</router-link>
      </p>
      <p>
        <router-link to="/reinitialisation"
          >Mot de passe oubli&eacute;?</router-link
        >
      </p>
    </form>
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
      if (!this.email || !this.password) {
        this.flashMessage.error({
          title: "Warning",
          message: "Attention, email et mot de passe sont requis !",
          time: 5000
        });
      } else {
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
            // alert("mauvais identifiant")
            this.flashMessage.error({
              title: "Warning",
              message: "Identifiants incorrects !",
              time: 5000
            });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped >
a {
  color: black;
  cursor: pointer;
}
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
  margin-bottom: 10px;
  text-align: center;
}
.main-form p:last-of-type {
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
@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  .main-form {
    margin: 100px 0 0;
    padding: 50px;
    //       background: rgb(217,74,100);
    // background: linear-gradient(0deg, rgba(217,74,100,1) 0%, rgba(19,17,17,1) 100%);
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