<template>
  <main>
    <section>
      <button>J'AI UN COMPTE</button>
      <router-link to="/connexion">
        <button>CR&Eacute;ER UN COMPTE</button>
      </router-link>
    </section>
    <section>
      <form action>
        <label for="email">Adresse e-mail</label>
        <input type="text" id="email" name="mail" />
        <label for="password">Mot de passe</label>
        <input type="text" id="password" name="password" />
        <button>S'incrire</button>
    
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdc3c7;
  width: 500px;
}
</style>