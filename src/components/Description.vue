<template>
  <div class="container">
    <img class="profile" alt="profile" src="../assets/profile.jpg">
    <div class="text">
      <p>Computer Science</p>
      <p>Art + Design</p>
      <p>Web dev specialized</p>
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from './Contact.vue'
export default {
  name: 'Description',
  components: {
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  width: 65%;
  border-radius: 5px;
}
.text {
}

@media only screen and (min-width: 576px) {
  .container {
    display: flex;
    justify-content: center;
  }

  .profile {
    max-height: 300px;
    width: auto;
    margin-right: 5rem;
  }

  .text {
    margin-top: auto;
    margin-bottom: auto;
    text-align: left;
  }
}
</style>
