<template>
  <div>
    <figure class="slider">
      <img src="./../assets/index/slider.jpg" alt="slider" />
    </figure>
    <main id="index">
      <section class="introduction">
        <h1 role="heading">Bienvenue sur Kinderkeepers</h1>
        <p>
         De nos jours de nombreuses solutions s’offrent aux parents pour faire garder leurs enfants.
Les crèches, les garderies, le baby-sitting ou encore les gardes partagés. Mais encore faut-il
pouvoir trouver une place pour son enfant ou bien avoir les moyens de se payer ce type de
service. En effet le coût d’une heure de baby-sitting varie entre 10 et 20 euros de l’heure. 
De plus, même si ces solutions existent il est parfois difficile de leur faire confiance à 
100%. C’est pourquoi nous avons pu voir naître des systemes de surveillance permettant
d’espionner sa baby-sitteur. 
        </p>
        <p>Kinderkeepers est une application web C to C. Elle permettra de répondre aux problématiques de prix, confiance, et culpabilité que
rencontrent souvent les parents. En effet, mon site mettra en relation  des parents habitant dans le même quartier.
Ils pourront s’aider en babyssitant les enfants des autres et partager leurs expériences. Ils créeront donc leur réseau d’amis, rencontreront de nouveaux parents. Et permettront à 
leur enfant de se faire des amis.</p>
      </section>
      <section class="presentation">
        <article role="article">
          <figure>
            <img src="./../assets/index/icons8-confiance.png" alt="confiance" />
          </figure>
          <h2 role="heading">Sécurité et confiance</h2>
          <p class="detail">
            Vous créez votre réseau personnel d'amis: de parents expérimentés de
            votre quartier, en qui vous avez confiance, que vos enfants
            connaissent.
          </p>
        </article>
        <article role="article">
          <figure>
            <img src="./../assets/index/tuto3.png" alt="carnet" />
          </figure>
          <h2 role="heading">Développez votre réseau</h2>
          <p class="detail">
            Rencontrez de nouveaux parents près de chez vous, qui auront la
            possibilité de garder vos enfants. De cette façon, vous pourrez
            élargir votre cercle d'amis et votre réseau local. Déveloper votre
            réseau.
          </p>
        </article>
        <article role="article">
          <figure>
            <img
              src="./../assets/index//icons8-pouce-en-l'air.png"
              alt="pouce"
            />
          </figure>
          <h2 role="heading">Bon pour les enfants</h2>
          <p class="detail">
            Ce type de garde mutuelle présente des avantages considérables pour
            les enfants concernés. Ils ont plus de possibilités, ont des
            rendez-vous avec d'autres enfants et ont le sentiment de faire
            partie d'une communauté de quartier dynamique et solidaire.
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.slider {
  margin-top: 90px;
  width: 100%;
}
.slider > img {
  width: 100%;
}


h1 {
  margin-bottom: 50px;
  text-align: center;
}

.introduction{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#index > .introduction > p {
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
  margin: 25px 0;
}

#index > .presentation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

#index > .presentation article {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 320px;
}

#index > .presentation article img {
  height: 85px;
  width: 85px;
}

h2 {
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  margin: 25px 0;
}

.detail {
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
}

@media screen and (min-width: 1025px) {


  h1 {
    font-size: 64px;
    line-height: 64px;
  }
}
@media screen and (max-width: 1024px) {
  h1 {
    font-size: 35px;
    line-height: 35px;
  }

}
@media screen and (min-width: 769px) {
main#index {
  margin: 100px;
}

}
@media screen and (max-width: 768px) {

  main#index {
  margin: 100px 25px;
}
}
</style>