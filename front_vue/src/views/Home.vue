<template>
<div>
<figure class="slider"><img src="./../assets/index/slider.jpg" alt="slider"></figure>
<main id="index">
   
    <section class="title">
        <h1 role="heading" >Bienvenue sur Kids@play</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis neque, aut quasi illum, obcaecati,
            nemo excepturi impedit odio ipsa adipisci maxime praesentium minima! Unde non doloremque suscipit ad fugiat.
        </p>
    </section>
    <section class="presentation">
        <article role="article">
            <figure><img src="./../assets/index/icons8-confiance.png" alt="confiance"></figure>
            <h2 role="heading"  class="indi">S&eacute;curit&eacute; et confiance</h2>
            <p class="indo">
                Vous cr&eacute;ez votre réseau personnel d'amis: de parents exp&eacute;riment&eacute;s de votre
                quartier, en qui vous avez confiance, que vos enfants connaissent.
            </p>
        </article>
        <article role="article">
            <figure><img src="./../assets/index/tuto3.png" alt="carnet"></figure>
            <h2 role="heading"  class="indi">D&eacute;veloppez votre r&eacute;seau</h2>
            <p class="indo">
                Rencontrez de nouveaux parents pr&egrave;s de chez vous, qui auront la possibilit&eacute; de garder
                vos enfants. De cette façon, vous pourrez &eacute;argir votre cercle d'amis et votre r&eacute;seau
                local. D&eacute;veloper votre r&eacute;seau.
            </p>
        </article>
        <article role="article">
            <figure><img src="./../assets/index//icons8-pouce-en-l'air.png" alt="pouce"></figure>
            <h2 role="heading"  class="indi">Bon pour les enfants</h2>
            <p class="indo">
                Ce type de garde mutuelle pr&eacute;sente des avantages consid&eacute;rables pour les enfants
                concern&eacute;s. Ils ont plus de possibilit&eacute;s, ont des rendez-vous avec d'autres enfants et
                ont le sentiment de faire partie d'une communaut&eacute; de quartier dynamique et solidaire.
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
  components: {
 
  }
};
</script>
<style lang="scss">
.slider{
  width: 100%;
}
.slider>img{
  width: 100%;
}
main#index {
    margin: 100px 10vh;
}

#index>.title>h1 {
    font-size: 30px;
    margin-bottom: 50px;
    line-height: 35px;
    text-align: center;
}

#index>.title>p {
    font-size: 20px;
    line-height: 25px;
    text-align: justify;
}

#index>.presentation {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px;
}

#index>.presentation article {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px auto;
    width: 320px;
}

#index>.presentation article img {
    height: 85px;
    width: 85px;
}

.indi {
    font-size: 25px;
    line-height: 30px;
    margin: 50px 0;
    text-align: center;
}

.indo {
    font-size: 20px;
    line-height: 25px;
    text-align: justify;
}
</style>