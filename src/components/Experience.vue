<template>
  <div class="container">
    <ul>
      <li v-for="item in data" :key="item.title">
        <h2>{{ item.title }}</h2>

        <small>{{ item.time }}</small>
        <p v-html="item.content"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../assets/data.json'
export default {
  name: 'Experience',
  data: function () {
    return {
      data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
small {
  display: block;
  width: 100%;
  text-align: right;
}

ul {
  margin: 0 2%;
  padding: 0;
  list-style: none;
}

li {
  border-bottom: 1px solid black;
  padding: 0 4%;
  &:last-child {
    border-bottom: none;
  }
}

li p {
  text-align: left;
}
@media only screen and (min-width: 576px) {
  ul {
    margin: 0 10%;
  }
}
</style>
