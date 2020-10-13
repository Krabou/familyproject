<template>
  <main id="manage-ad">
    <h1>Toutes les annonces</h1>
    <table class="table Computer">
      <thead class="head">
        <tr class="row">
          <th class="cell">Crée le</th>
          <th class="cell">Date</th>
          <th class="cell">Début</th>
          <th class="cell">Fin</th>
          <th class="cell">Titre</th>
          <th class="cell">Editer</th>
          <th class="cell">Supprimer</th>
        </tr>
      </thead>
      <tbody v-for="(ad, i) in ads" :key="i">
        <tr class="row">
          <td class="cell">{{ ad.release_date | moment("DD/MM/YYYY") }}</td>
          <td class="cell">{{ ad.date | moment("DD/MM/YYYY") }}</td>
          <td class="cell">{{ ad.starts_at }}</td>
          <td class="cell">{{ ad.ends_at }}</td>
          <td class="cell">{{ ad.title }}</td>
          <td class="cell">
            <router-link :to="'/form_edit_ad/' + ad._id">
              <font-awesome-icon :icon="['fas', 'edit']" size="1x" />
            </router-link>
          </td>
          <td class="cell" @click.prevent="deleteAd(ad._id)">
            <font-awesome-icon :icon="['fas', 'trash-alt']" size="1x" />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- TABLE TABLET & MOBILE -->
    <div class="tableList">
      <table v-for="(ad, i) in ads" :key="i" class="table Mobile">
        <th class="cell">Crée le</th>
        <td class="cell">{{ ad.release_date | moment("DD/MM/YYYY") }}</td>
        <th class="cell">Date</th>
        <td class="cell">{{ ad.date | moment("DD/MM/YYYY") }}</td>
        <th class="cell">Début</th>
        <td class="cell">{{ ad.starts_at }}</td>
        <th class="cell">Fin</th>
        <td class="cell">{{ ad.ends_at }}</td>
        <th class="cell">Titre</th>
        <td class="cell">{{ ad.title }}</td>
        <tr class="last-row">
          <td>
            <router-link :to="'/form_edit_ad/' + ad._id" class="btn">
              Editer
              <font-awesome-icon :icon="['fas', 'edit']" size="1x" />
            </router-link>
          </td>
          <td @click.prevent="deleteAd(ad._id)">
            Supprimer
            <font-awesome-icon
              :icon="['fas', 'trash-alt']"
              size="1x"
              class="btn"
            />
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ads: []
    };
  },
  methods: {
    //Afficher toutes les annonces
    async getAds() {
      const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/ads");
      this.ads = apiRes.data;
    },
    //Supprimer une annonce
    async deleteAd(id) {
      await axios.delete(process.env.VUE_APP_BACKEND_URL + "/ads/" + id);
      this.getAds();
    }
  },
  created() {
    try {
      this.getAds();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style lang="scss" scoped>
#manage-ad {
  margin: 100px 20px;
}

.avatar img {
  width: 60px;
}

td {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
}

.table {
  border-collapse: collapse;
  margin: auto;
  width: 90%;
}

.row,
.cell {
  border-bottom: 1px solid black;
  height: 50px;
  text-align: center;
}

.head .cell,
.table.Mobile th {
  font-size: 20px;
  font-weight: bold;
}

.cell {
  font-size: 18px;
  font-weight: 400;
}
@media screen and (min-width: 1025px) {
  .table.Mobile {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .table.Computer {
    display: none;
  }

  .tableList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .table.Mobile {
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 35px;
  }

  .last-row > td {
    width: 160px;
    border: 1px solid black;
    height: 50px;
    text-align: center;
  }
}
</style>