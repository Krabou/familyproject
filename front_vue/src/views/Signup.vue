<template>
  <main class="main-form" id="inscription">
    <section>
      <!-- @submit.prevent: c'est un raccourci de vue qui permet d'empecher le rafraichissement de la page -->
      <form class="form" @submit.prevent="signup">
        <h1>
          CR&Eacute;ER UN COMPTE
        </h1>
        <label class="label" for="gender">Civilité</label>
        <select v-model="user.gender" id="gender" class="select">
          <option disabled value="">Sélectionner</option>
          <option value="female">Mme.</option>
          <option value="male">M.</option>
        </select>
        <label class="label" for="username">Nom d'utilisateur *</label>
        <input
          class="input"
          type="text"
          id="username"
          v-model="user.username"
        />
        <label class="label" for="last_name">Nom *</label>
        <input
          class="input"
          type="text"
          id="last_name"
          v-model="user.last_name"
        />
        <label class="label" for="first_name">Prénom *</label>
        <input
          class="input"
          type="text"
          id="first_name"
          v-model="user.first_name"
        />
        <label class="label" for="email">Adresse e-mail *</label>
        <input class="input" type="email" id="email" v-model="user.email" />
        <label class="label" for="birthdate">Date de naissance</label>
        <input
          class="input"
          type="date"
          id="birthdate"
          v-model="user.birthdate"
        />
        <label class="label" for="number">Numéro de rue *</label>
        <input
          class="input"
          type="number"
          id="number"
          v-model="user.adress.number"
          min="1"
        />
        <label class="label" for="street">Rue *</label>
        <input
          class="input"
          type="text"
          id="street"
          v-model="user.adress.street"
        />
        <label class="label" for="zipcode">Code postal *</label>
        <input
          class="input"
          type="number"
          id="zipcode"
          v-model="user.adress.zipCode"
          min="0"
        />
        <label class="label" for="city">Ville *</label>
        <input class="input" type="text" id="city" v-model="user.adress.city" />
        <label class="label" for="country">Pays *</label>
        <input
          class="input"
          type="text"
          id="country"
          v-model="user.adress.country"
        />
        <label class="label" for="password">Mot de passe *</label>
        <input
          class="input"
          type="password"
          id="password"
          v-model="user.password"
        />
        <div class="cgu">
        <input checked id="checkbox" type="checkbox" v-model="user.checkbox" ><label for="checkbox">
          <router-link to="/mentionsLegales">Conditions générales d'utilisations</router-link>
        </label>
        </div>
        <button class="btn">S'INSCRIRE</button>
        <p>
          Avez-vous déjà un compte ?
          <router-link to="/signin">Connectez-vous</router-link>
        </p>
      </form>
    </section>
  </main>
</template>

<script>

export default {
  data() {
    return {
      user: {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        checkbox:"",
        gender: "",
        username: "",
        last_name: "",
        first_name: "",
        email: "",
        password: "",
        birthdate: "",
        adress: {
          number: "",
          street: "",
          zipCode: "",
          city: "",
          country: ""
        }
      }
    };
  },
  methods: {
    signup() {
      if (!this.user.email || !this.user.password) {
        this.flashMessage.error({
          title: "Warning",
          message: "Merci de remplir tout les champs requis * !",
          time: 5000
        })} 
        else if(!this.user.checkbox){
           this.flashMessage.error({
          title: "Warning",
          message: "Merci d'accepter les conditions générales !",
          time: 5000
        })
      }
       else {
        // on utilise la fonction dispatch pour faire reference à une action du store
        this.$store.dispatch(
          "user/signup",
          { ...this.user }
        );
        this.$router.push("/signin");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
  margin-bottom: 30px;
  text-align: center;
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
  cursor: pointer;
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
.cgu{
  width: 100%;
}
.cgu input{
  margin-right: 15px;
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
.hidden {
  display: none;
}
</style>
