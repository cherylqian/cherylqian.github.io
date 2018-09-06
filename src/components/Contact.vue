<template>
  <div>
    <a href="https://github.com/cherylqian" target="_blank" v-html="iconGithub"></a>
    <a href="https://www.linkedin.com/in/chen-qian/" target="_blank" v-html="iconLinkedin"></a>
    <a href="mailto:chenq2@illinois.edu" v-html="iconMail"></a>
    <a href="/static/cv.pdf" v-html="iconFile"></a>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  name: 'Contact',
  computed: {
    iconGithub: function () {
      return feather.icons.github.toSvg({
        'stroke-width': 1
      })
    },
    iconMail: function () {
      return feather.icons.mail.toSvg({
        'stroke-width': 1
      })
    },
    iconLinkedin: function () {
      return feather.icons.linkedin.toSvg({
        'stroke-width': 1
      })
    },
    iconFile: function () {
      return feather.icons['file-text'].toSvg({
        'stroke-width': 1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5rem;
}

@media only screen and (min-width: 576px) {
  div {
    margin-top: 5rem;
    padding: 0;
  }
}
</style>
