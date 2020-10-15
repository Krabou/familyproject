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
            {{ user.adress.city }}
          </p>
        </article>
      </section>
      <section>
        <nav class="navigation">
          <ul>
            <li>
              <router-link
                class="link-message"
                :to="'/message/' + user._id"
                :receiver="user._id"
              >
                <span><font-awesome-icon icon="envelope" size="1x"/></span>
                Message
              </router-link>
            </li>
            <li>
              <span><font-awesome-icon icon="flag" size="1x"/></span> Signaler
            </li>
          </ul>
        </nav>
      </section>
      <section class="information"></section>
      </div>
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
.formMessage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navigation ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
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
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(0, 173, 191, 1) 100%
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
