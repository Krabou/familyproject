<template>
  <main>
    <h1 role="heading">Nous contacter par email</h1>
    <form action="/contact" method="post">
      <input role="textbox" type="text" placeholder="Nom" name="name" />
      <input role="textbox" type="email" placeholder="Mail" name="mail" />
      <input role="textbox" type="text" placeholder="Sujet" name="subject" />
      <textarea role="textbox" rows="4" cols="50" placeholder="Message" name="message"></textarea>
      <button role="button" class="is-clickable" type="submit">Envoyer</button>
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>