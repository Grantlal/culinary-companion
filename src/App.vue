<template>
  <div class="page-container" id="app">
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
    />
    <CCHeader />
    <Drawer />
  </div>
</template>

<script>
import CCHeader from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

export default {
  name: "app",

  components: {
    CCHeader,
    Drawer
  },

  data() {
    return {
      query: null,
      recipeExample: null,
      recipes: [],
      techniqueurl: [],
      menuVisible: false,
      overlay_on: false,
      url: ""
    };
  }
};
</script>

<style>
html {
  background-color: #9ff !important;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.page-container {
  display: flex;
  flex-flow: column;
  height: 100%;
}

#youtube {
  height: 500px;
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
.overlay {
  z-index: 3;
}
#overlay_white {
  width: 50%;
  height: 80%;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 10%); /* IE 9 */
  -webkit-transform: translate(-50%, 10%); /* Safari prior 9.0 */
  transform: translate(-50%, 10%); /* Standard syntax */
}
#overlay_exit {
  position: absolute;
  right: 10px;
  top: 10px;
}
#overlay_title {
  position: absolute;
  left: 30px;
  overflow: hidden;
}

.bc-trans {
  background-color: transparent !important;
}
.bc-white {
  background-color: white !important;
}

.md-menu {
  background-color: white;
}

#recipecards {
  display: inline-block;
}

.recipes {
  display: inline-block;
  margin: 10px;
}

.recipes:hover {
  cursor: pointer;
}

.md-theme-default {
  color: black !important;
  background-color: transparent;
}
.md-checkbox {
  display: flex;
}

table {
  width: 100%;
  table-layout: fixed;
}
table th {
  text-align: left;
}

.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
  width: 100%;
  height: 100%;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
body,
html {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.wrapper {
  position: relative;
}

footer,
div {
  display: block;
}

.container {
  padding-top: 70px;
  flex: 1;
}

.container,
.wrapper {
  height: 100%;
}

.menu {
  height: 100%;
  background-color: #eef1f6;
}

.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}

.footer {
  height: 120px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
  z-index: 1000;
  margin-top: -120px;
  line-height: 1;
  font-size: 22px;
}
</style>