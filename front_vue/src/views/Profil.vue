<template>
  <main id="main-profil">
      <div class="all">
 
        <section class="header-ad">
          <figure class="avatar-ad">
                 <img :src="user.avatar" alt="photo de profil" />
          </figure>
          <article class="header-info">
            <h2>{{ user.username }}</h2>
            <p>
              <span class="icon">
                <font-awesome-icon
                  id="location"
                  icon="map-marker-alt"
                  size="1x"
                />
              </span>
              {{user.adress.city }}
            </p>
          </article>
    
        <!-- <section class="message">
          <span>
         
          </span>
          <FormCreateMessage :receiver_id="ad.provider_id._id" />
        </section> -->
      </section>
      <section><nav><ul><li>   <router-link class="link-message" :to="'/message/' + user._id" :receiver="user._id"> 
              <font-awesome-icon  icon="envelope" size="1x"  />
              Message
            </router-link></li>
            <li><font-awesome-icon  icon="flag" size="1x"  /></li></ul></nav></section>
      <section class="information">
        <!-- <h1>{{ ad.title }}</h1>
        <p>Annonce crée le {{ ad.release_date | moment("DD/MM/YYYY") }}</p>
        <article>
          <h2>
            Enfant<span v-if="ad.provider_id.children.length > 1">s</span>
          </h2>
          <p>
            Nombre: <span>{{ ad.provider_id.children.length }}</span>
          </p>
          <p>
            Age:
            <span v-for="(child, i) in ad.provider_id.children" :key="i">
              <span>{{ child.child_birthday }}</span></span
            >
          </p>
        </article>
        <article>
          <h2>Description</h2>
          <p>
            Besoin d'un babysitting le {{ ad.date | moment("DD/MM/YYYY") }} de
            {{ ad.starts_at }} à {{ ad.ends_at }}
          </p>
          <p>{{ ad.description }}</p>
        </article>
        <FormCreateMessage class="formMessage" :receiver_id="ad.provider_id._id" /> -->
      </section>
    </div>
    <!-- <figure class="header">
      <img src="./../assets/rose.jpg" alt="">
    </figure>
    <figure class="avatar">
      <img :src="user.avatar" alt="photo de profil" />
    </figure>
    <h1>{{ user.username }}</h1>
    <p>{{ user.adress.city }} {{ user.adress.country }}</p>
    <div class="icon" @submit.prevent="">
      <font-awesome-icon id="add" icon="user-plus" size="2x" />
      <p>Ajouter</p>
    </div>
    <span>
      <router-link :to="'/message/' + user._id">
        <font-awesome-icon id="add" icon="envelope" size="1x" />
        Message
      </router-link>
    </span> -->
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        adress: {}
      }
    };
  },
  methods: {
    // On affiche l'utilisateur
    async getUser(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.user = apiRes.data;
    }
  },
  mounted() {
    console.log(">>>>", this.$router); // accessible partout dans ton app
    this.userId = this.$route.params.id;
    try {
      this.getUser(this.userId);
    } catch (err) {
      console.error(err);
    }
  },
  computed: {
    // intéret de stocker les données dans computed plutôt que dans data
    //  quand elles changent, elle cause un re-render du composant ... ce qui permet de mettre à  jour la vue sans forceUpdate()
    // https://vuejs.org/v2/guide/computed.html
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style lang="scss" scoped>
.all {
  background: white;
}
#main-profil {
  margin: 100px 0 0;
}
.header-ad {
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(0, 173, 191);
  color: whitesmoke;
}
.icon {
  color: gold;
}

.message {
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.avatar-ad > img {
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
}
.information {
  display: flex;
  flex-direction: column;
  width: 100%;
}
h1 {
  text-transform: uppercase;
}
h2,
p {
  margin-bottom: 30px;
}
.formMessage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
@media screen and (min-width: 769px) {
  .all {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    margin: 50px auto;
  }
  #main-profil {
    margin: 100px 0 0;
    padding: 50px;
    background:  rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
     rgba(255, 255, 255, 1) 0%,
     rgba(0, 173, 191, 1)  100%
    );
  }
  .header-ad {
    flex-direction: row;
    padding: 50px 0;
    
  }
  // .header-ad {
  //   width: 60%;
  //   height: auto;
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  // }
  .avatar-ad {
    width: 150px;
    height: 150px;
    margin: 0 15px 0 50px;
    border: solid 5px whitesmoke;
    border-radius: 50%;
    overflow: hidden;
  }
  // .header-info{
  //   width: 100%;
  // }
  // .message {
  //   width: 40%;
  // }
  .information {
    padding: 50px;
  }
}
@media screen and (max-width: 768px) {
  .all {
    width: 100%;
  }
  #main-profil {
    margin: 100px 0 0;
  }
  .header-ad {
    flex-direction: column;
    padding: 30px 0;
  }
  .header-ad {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .avatar-ad {
    width: 120px;
    height: 120px;
    margin-bottom: 15px;
    border: solid 5px whitesmoke;
    border-radius: 50%;
    overflow: hidden;
  }
  // .message {
  //   width: 100%;
  // }
  .information {
    padding: 30px;
  }
}
</style>
