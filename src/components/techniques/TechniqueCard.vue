<template>
  <div class="card-expansion">
      <md-card>
        <md-card-media md-big>
          <video-embed id="youtube-video" :src="this.url"></video-embed>
        </md-card-media>
        <md-card-header>
          <h2 class="title">{{ this.name }}</h2>
        </md-card-header>
      </md-card>
  </div>
</template>

<script>
import Vue from "vue";
import Embed from "v-video-embed";

// global register
Vue.use(Embed);

export default {
  name: "RecipeCard",
  props: ["name", "url"]
};
</script>

<style scoped>
@font-face {
  font-family: "Grotesque";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.eot"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.ttf"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Regular.woff");
  font-weight: normal;
}
@font-face {
  font-family: "Grotesque Black";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.eot"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.ttf"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/BrandonGrotesque-Black.woff");
  font-weight: bold;
}
* {
  box-sizing: border-box;
}
html,
body {
  font-size: 100%;
}
body {
  padding: 0;
  margin: 0;
  background: #152536;
}
.md-card {
  width: 320px;
  height: 280px;
  margin: 16px;
  display: inline-block;
  vertical-align: top;
  text-shadow: none !important;
}
.card-expansion {
  max-height: auto;
  max-width: auto;
  display: flex;
}
.title {
  text-align: center;
  position: relative;
  margin: 15px;
  letter-spacing: 3px;
  color: #152536;
  font-family: "Grotesque Black", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-shadow: 0 0 0px #32577f;
}
</style>