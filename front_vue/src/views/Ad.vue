<template>
  <main id="ad">
    <div class="all">
      <section class="header">
        <section class="header-ad">
          <figure class="avatar-ad">
            <img :src="ad.provider.avatar" alt="avatar" />
          </figure>
          <article>
            <h2>{{ ad.provider.username }}</h2>
            <p>
              <span class="icon">
                <font-awesome-icon
                  id="location"
                  icon="map-marker-alt"
                  size="1x"
                />
              </span>
              {{ ad.provider.adress.city }}
            </p>
          </article>
        </section>
        <section class="message">
          <span>
            <router-link class="link-message" :to="'/message/' + ad.provider._id" :receiver="ad.provider._id" :title="ad.title">
              <font-awesome-icon id="add" icon="envelope" size="1x"  />
              MESSAGE
            </router-link>
          </span>
          <!-- <FormCreateMessage :receiver="ad.provider._id" /> -->
        </section>
      </section>
      <section class="information">
        <h1>{{ ad.title }}</h1>
        <p>Annonce crée le {{ ad.release_date | moment("DD/MM/YYYY") }}</p>
        <article>
          <h2>
            Enfant<span v-if="ad.provider.children.length > 1">s</span>
          </h2>
          <p>
            Nombre: <span>{{ ad.provider.children.length }}</span>
          </p>
          <p>
            Age:
            <span v-for="(child, i) in ad.provider.children" :key="i">
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
        <!-- <FormCreateMessage class="formMessage" :receiver_id="ad.provider_id._id" /> -->
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
// import FormCreateMessage from "@/components/messages/FormCreateMessage";
export default {
    // components: {
    //   FormCreateMessage
    // },
  data() {
    return {
      ad: {
        provider: {
          adress: {},
          children: {}
        }
      }
    };
  },
  methods: {
    //Afficher toutes les annonces
    async getAd(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/ads/" + id
      );
      this.ad = apiRes.data;
    }
  },
  mounted() {
    this.adId = this.$route.params.id;
    try {
      this.getAd(this.adId);
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style lang="scss" scoped>
.link-message {
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
}

.link-message:hover {
  background: black;
  color: whitesmoke;
  transition: 2s;
}
.all {
  background: white;
}
main#ad {
  margin: 100px 0 0;
}
.header {
  display: flex;
  justify-content: space-between;
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
@media screen and (min-width: 1024px) {
  .all {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    margin: 50px auto;
  }
  main#ad {
    margin: 100px 0 0;
    padding: 50px;
      background:  rgba(255, 255, 255, 1);
    background: radial-gradient(
      circle,
     rgba(255, 255, 255, 1) 0%,
     rgba(0, 173, 191, 1)  100%
    );
  }
  .header {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 0;
  }
  .header-ad {
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .avatar-ad {
    width: 150px;
    height: 150px;
    margin: 0 15px 0 50px;
    border: solid 5px whitesmoke;
    border-radius: 50%;
    overflow: hidden;
  }
  .link-message{
    margin-right: 50px;
  }
  // .message {
  //   width: 40%;
  // }
  .information {
    padding: 50px;
  }
}
@media screen and (max-width: 1023px) {
  .all {
    width: 100%;
  }
  main#ad {
    margin: 100px 0 0;
  }
  .header {
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
