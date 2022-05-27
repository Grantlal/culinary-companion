<template>
  <div class="card-expansion">
    <router-link :to="{name: 'recipe', params:{id: this.id}}" id="ClickableRecipeCard">
      <md-card md-with-hover>
        <article class="card">
          <div class="thumb">
            <img :src="this.image" alt="People" style="no-repeat; center;" />
          </div>
          <h2 class="title basic-title">{{ this.title }}</h2>
          <div class="infos">
            <div class="txt" style="height:100%; overflow-y: auto; overflow-x: hidden;">
              <h2 class="title">{{ this.title }}</h2>
              <div v-bind:key="x" v-for="x in this.instructions">{{ x }}</div>
            </div>
          </div>
        </article>
      </md-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: ["title", "healthLabels", "instructions", "image", "id"]
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
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  text-shadow: none !important;
}
.card-expansion {
  max-height: auto;
}
img {
  width: 100%;
  height: 100%;
}
a[href] {
  position: relative;
}
a[href],
a[href]:link,
a[href]:visited,
a[href]:active {
  text-decoration: none;
  color: #d8276c;
  text-shadow: 2px 2px 2px #070c11;
  padding-bottom: 3px;
  font-weight: bold;
}
a[href]::after {
  content: "";
  position: absolute;
  left: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  width: 0;
  height: 1px;
  transition: 0.35s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}
a[href]:hover::after {
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
.note {
  margin-top: 30px;
  color: #fff;
  font-size: 1rem;
  font-family: "Merriweather", sans-serif;
  line-height: 1.5;
  text-align: center;
}
article.card {
  height: 350px;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
article.card .thumb {
  width: auto;
  height: 260px;
  background-size: cover;
  border-radius: 3px;
}
article.card .infos {
  width: auto;
  height: 350px;
  position: relative;
  padding: 14px 24px;
  background: #fff;
  transition: 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
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
.basic-title {
  overflow: hidden;
  height: 20px !important;
}
article.card .infos .flag {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 35px;
  height: 23px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/flag.png")
    no-repeat top right;
  background-size: 100% auto;
  display: inline-block;
}
article.card .infos .date,
article.card .infos .seats {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(21, 37, 54, 0.7);
  font-family: "Grotesque", sans-serif;
}
article.card .infos .seats {
  display: inline-block;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}
article.card .infos .txt {
  font-family: "Merriweather", sans-serif;
  line-height: 2;
  font-size: 0.95rem;
  color: rgba(21, 37, 54, 0.7);
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}
article.card .infos .details {
  position: absolute;
  left: 0;
  left: 0;
  bottom: 0;
  margin: 10px 0;
  padding: 20px 24px;
  letter-spacing: 1px;
  color: #4e958b;
  font-family: "Grotesque Black", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}
article.card:hover .infos {
  transform: translateY(-320px);
}
article.card:hover .infos .seats,
article.card:hover .infos .txt,
article.card:hover .infos .details {
  opacity: 1;
}
</style>
