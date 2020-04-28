<template>
  <div>
     <Drawer />
    <md-card style="margin: 4px; display: inline-block; width: 24.4%;">
      <md-card-media md-big>
        <video-embed
          src="https://www.youtube.com/embed/ZJy1ajvMU1k"
        ></video-embed>
      </md-card-media>
      <md-card-header>
        5 Basic Cooking Techniques
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Vue from "vue";
import Embed from "v-video-embed";
import Drawer from "@/components/TechniqueDrawer.vue";

// global register
Vue.use(Embed);

export default {
  name: "techniquePage",
  components: {
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
html,
body {
  font-size: 100%;
  padding: 0;
  margin: 0;
  background: white;
}
h4 {
  font-size: 200%;
  text-align: center;
}
.basic {
  font-size: 100%;
  padding: 0;
  margin: 0;
  background: white;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
h1 {
  text-align: center;
}
</style>
