<template>
  <main id="inscription">
    <section class="sectionTitle">
      <router-link to="/signin">J'AI UN COMPTE</router-link>
      <h1>CR&Eacute;ER UN COMPTE</h1>
    </section>
    <section>
      <form class="formCo" @submit.prevent="signup">
        <label for="last_name">Nom</label>
        <input type="text" id="last_name" v-model="user.last_name" />
        <label for="first_name">Prénom</label>
        <input type="text" id="first_name" v-model="user.first_name" />
        <label for="email">Adresse e-mail</label>
        <input type="email" id="email" v-model="user.email" />
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="user.password" />
        <!-- <Avatar v-if="user.avatar" :avatar="user.avatar" /> -->
        <button class="btn">S'incrire</button>
        <p>
          Avez-vous déjà un compte ?
          <router-link to="/signin">Connectez-vous</router-link>
        </p>
      </form>
    </section>
  </main>
</template>

<script>
// import axios from "axios";
// export default {
//   data() {
//     return {
//       last_name: null,
//       first_name: null,
//       email: null,
//       password: null
//     };
//   },
//   methods: {
//     async subscribe() {
//       const { last_name, first_name, email, password } = this.$data;
//       // this.$data représente tout l'objet retourné par la fonction data()
//       try {
//         const apiRes = await axios.post(
//           process.env.VUE_APP_BACKEND_URL + "/auth/inscription",
//           {
//             last_name,
//             first_name,
//             email,
//             password
//           }
//         );
//         console.log(apiRes);
//       } catch (Err) {
//         console.error(Err);
//       }
//     }
//   }
// };
// import Avatar from "@/components/Avatar";
export default {
  data() {
    return {
      user: {
        // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
        last_name: null,
        first_name: null,
        email: null,
        password: null
      }
    };
  },
  // components: {
  //   Avatar
  // },
  methods: {
    // updateAvatar(image) {
    //   console.log(image);
    // },
    signup() {
      const fd = new FormData(); // form data nécessaire pour envoyer des fichiers images (files)
      fd.append("first_name", this.user.first_name);
      fd.append("last_name", this.user.last_name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);
      // if (this.user.avatar) fd.append("avatar", this.user.avatar);
      this.$store.dispatch("user/signup", fd); // on utilise
    }
  }
};
</script>

<style lang="scss"></style>
