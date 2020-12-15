y<template>
  <main id="error">
    <section>
      <h1>Page 404</h1>
      <p>Vous pouvez retourner à l'accueil en cliquant sur le bouton.</p>
      <div class="btn"><router-link to="/">Accueil</router-link></div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main#error {
  margin: 100px 0 0;
}
h1 {
  font-size: 35px;
}
a {
  text-decoration: none;
  color: white;
}
.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  text-decoration: none;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  background: black;
  transition: 2s;
}
p {
  font-size: 25px;
  text-align: center;
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
  main#error {
    margin: 100px 0 0;
    padding: 50px;
    background: darkcyan;
  }
}
@media screen and (max-width: 768px) {
  section {
    padding: 15px;
    width: 100;
  }
  main#error {
    margin: 100px 0 0;
  }
}
</style>
