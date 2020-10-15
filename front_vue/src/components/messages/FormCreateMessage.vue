<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="title">Envoyer un message</h1>
    <input type="text" v-model="title">
    <textarea class="textarea" v-model="text" id="" cols="30" rows="10"></textarea>
    <button class="btn">ENVOYER</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      title:""
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
   const type =  this.$props.titre ===  "ad.title"?  "ad.title" : this.title ;
     return this.$store.dispatch("message/send", {
          text: this.text,
          sender: this.currentUserId,
          receiver: this.receiver,
          title: type
      });
    }
  },
  props: ["receiver","titre"]
};
</script>

<style lang="scss" scoped>
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
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
</style>