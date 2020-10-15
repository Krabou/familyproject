<template>
  <main id="about">
    <h1>Comment ça marche ?</h1>
    <section class="tutoriel">
    <ul class="tutolist">
      <li>
        <figure>
          <img src="./../assets/apropos/dossier.png" alt="dossier" />
        </figure>
        <h2>Mettez votre profil à jour</h2>
        <p>
          Mettez votre profil à jour avec une petite description pour que les
          autres utilisateurs puissent apprendre à vous connaître
        </p>
      </li>
      <li>
        <figure><img src="./../assets/apropos/maps.png" alt="maps" /></figure>
        <h2>Trouvez des utilisateurs</h2>
        <p>
          Trouvez des utilisateurs dans votre quartier et demandez les en amis.
        </p>
      </li>
      <li>
        <figure>
          <img src="./../assets/apropos/carnet.png" alt="carnet d'adresse" />
        </figure>
        <h2>Entrez en contact avec les autres</h2>
        <p>
          Vous retrouvez les annonces postés par vos amis et pourrez ainsi leur
          venir en aide.
        </p>
      </li>
      <li>
        <figure>
          <img src="./../assets/apropos/poussette.png" alt="poussette" />
        </figure>
        <h2>Postez une annonce</h2>
        <p>
          Postez une annonce afin de trouver une personne pour garder vos
          enfants. N'oubliez pas de les rajouter dans votre dashboard afin de
          pouvoir poster une annonce.
        </p>
      </li>
    </ul>
    <span class="link">
    <router-link :to="'/signup/'" class="btn">A VOUS DE JOUER</router-link>
    </span>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
main#about {
  margin-top: 90px;
  min-height: calc(100vh - 90px);
}
.tutoriel{
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tutolist {
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
}
main#about figure{
  margin-bottom: 50px;
}
.tutolist>li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  width: 320px;
  min-width: 320px;
  text-align: center;
}
.link{
 text-align: center;
 margin-top: 50px;
}
.btn {
  background: rgb(217, 74, 100);
  border: 3px solid white;
  color: whitesmoke;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 15px;
  outline: 1px solid black;
  width: auto;
  text-align: center;
  text-decoration: none;
  margin: 50px auto;
}
.btn:hover {
  background: black;
  color: whitesmoke;
  transition: 2s;
}
</style>
