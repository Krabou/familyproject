<template>
  <main id="plan">
    
    <section>
      <h1>Plan du site</h1>
      <ul>
         <li>
           <router-link to="/">Accueil</router-link>
        </li>
         <li>
           <router-link to="/about">A propos</router-link>
        </li>
         <li>
           <router-link to="/signin">Connexion</router-link>
        </li>
         <li>
           <router-link to="/signup">Inscription</router-link>
        </li>
        <li>
           <router-link to="/contact">Contact</router-link>
        </li>
        <li>
           <router-link to="/mentionsLegales">CGU</router-link
          >
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

a:hover {
color: rgb(217, 74, 100);
  transition: 2s;
}

a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
}
main#plan {
  margin: 100px 0 0;
}
h1 {
  font-size: 35px;
}
h2 {
  font-size: 30px;
  margin-bottom: 25px;
}

ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  
}
li{
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  margin: 15px 0;
  padding: 15px;
}
p {
  font-size: 16px;
  margin: 35px auto;
}
section {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
@media screen and (min-width: 769px) {
  section {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  main#plan {
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
  section {
    padding: 15px;
    width: 100;
  }
  main#plan {
    margin: 100px 0 0;
  }
}
</style>
