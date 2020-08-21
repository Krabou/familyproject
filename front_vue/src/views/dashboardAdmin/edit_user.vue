<template>
  <main>
  <h1>Editer un utilisateur</h1>
      <form action>
        <label for="email">Adresse e-mail</label>
        <input type="text" id="email" name="mail">
      </form>
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