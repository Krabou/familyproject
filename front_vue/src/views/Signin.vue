<template>
  <main id="connexion">
    <section class="sectionTitle">
      <h1>J'AI UN COMPTE</h1>
      <router-link to="/signup">CR&Eacute;ER UN COMPTE</router-link>
    </section>
    <section>
      <form class="formCo" v-on:submit.prevent="signin">
        <label for="email">Adresse e-mail</label>
        <input type="email" id="email" v-model="email" />
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" />
          <button class="btn">Connexion</button>
        <router-link to="/reinitialisation">Mot de passe oubli&eacute;?</router-link>
      </form>
    </section>
  </main>
</template>

<script>

export default {
  data() {
    return {
       email: "Kari@gmail.com",
      password: "12345"
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
          console.log(err.message);
        });
    }
  }
};
</script>

<style lang="scss" >
.formCo {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 375px;
  margin: auto;
  margin-bottom: 100px;
  padding: 30px 30px 0 30px;
}
.sectionBtnCo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 375px;
  margin: auto;
}
.btnCo.active,
.btnCo:hover {
  background: #17a2b8;
  color: whitesmoke;
  cursor: pointer;
}
.btnCo {
  height: 35px;
  width: 175px;
  border: 1px solid #17a2b8;
  color: #17a2b8;
  background: whitesmoke;
  border-radius: 5%;
  margin: 50px 0;
  font-size: 15px;
}
.btn {
  height: 35px;
  width: 175px;
  border: 1px solid black;
  background: black;
  color: whitesmoke;
  margin: 25px;
  font-size: 15px;
}
</style>