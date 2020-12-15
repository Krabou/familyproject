<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="title">Envoyer un message</h1>
    <textarea class="textarea" v-model="text" id="" cols="30" rows="10"></textarea>
    <button class="btn">ENVOYER</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      title: this.titre
    };
  },
  computed: {
    currentUserId() {
      return (
        this.$store.getters["user/current"] &&
        this.$store.getters["user/current"]._id
      );
    }
  },
  methods: {
    
    handleSubmit() {
      console.log(this.titre)
  //  const type =  this.$props.titre ===  "titre"?  "titre" : this.title ;
     return this.$store.dispatch("message/send", {
       //On cree un objet que l'on envoie a notre store
          text: this.text,
          sender: this.currentUserId,
          receiver: this.receiver,
          id_ad: this.id_ad
      });
    }
  },
  props: ["receiver","id_ad"]
};
</script>

<style lang="scss" scoped>
.form {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
}
.label {
  color: black;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
}
.input {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
}
.textarea {
  background: rgba($color: #e9d1d1, $alpha: 0.3);
  border: none;
  border-bottom: black 1px solid;
  color: black;
  font-size: 20px;
  height: auto;
  line-height: 25px;
  padding: 15px;
  text-size-adjust: none;
  width: 100%;
}
.btn {
  background: rgb(217,74,100);
  border: 3px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  letter-spacing: 1px;
  margin: 30px 0 15px;
  outline: 1px solid black;
  width: 200px;
}
.btn:hover {
  background: black;
  transition: 2s;
}
@media screen and (min-width: 769px) {
  .form {
    box-shadow: 0px 14px 28px black;
    width: 60vw;
    padding: 50px;
  }
  
}
@media screen and (max-width: 768px) {
  .form {
    padding: 15px;
    width: 100;
  }
 
}
</style>