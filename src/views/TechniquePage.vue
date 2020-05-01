<template>
  <div>
    <Drawer />
    <div style="margin-left: auto; min-width: 300px; max-width:500px;">
      <md-field style="min-width: 300px; max-width:500px;">
        <label>Search For A Technique</label>
        <md-input v-model="searchString"></md-input>
      </md-field>
      <md-button
        class="md-raised"
        style="margin-right: 40px;"
        v-on:click.native="getTechnique(searchString)"
        >SEARCH</md-button
      >
    </div>
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
    Drawer,
  },

  methods: {
    getTechnique: async function(searchName) {
      console.log("TechniqueGet");
      console.log(searchName);
      var techniqueUrl =
        "https://culinarycompanionhome.azurewebsites.net/techniquehome?keyword=";
      techniqueUrl += searchName;
      console.log(techniqueUrl);

      let techniqueResponse = await fetch(techniqueUrl);
      let techniqueData = await techniqueResponse.text();

      console.log(techniqueData);
      
      return this.techniqueParse(techniqueData);
    },

    techniqueParse(technique) {
      let response = JSON.parse(technique);
      console.log(response);

      this.techniqueJSON = [];
      for (var index in response) {
        this.techniqueJSON.push({
          [response[index][0].Name]: response[index][0].Value,
          [response[index][1].Name]: response[index][1].Value,
          [response[index][2].Name]: response[index][2].Value,
          [response[index][3].Name]: response[index][3].Value,
        });
      }

      console.log("this.techniqueJSON");
      for (let j = 0; j < this.techniqueJSON.length; j++) {
        console.log(this.techniqueJSON[j]._id);
        console.log(this.techniqueJSON[j].name);
        console.log(this.techniqueJSON[j].url);
        console.log(this.techniqueJSON[j].tag);
      }
      return this.techniqueJSON;
    },
  },
  data: () => ({
    visible: false,
    searchString: "",
  }),

  data() {
    return {
      query: null,
      recipeExample: null,
      recipes: [],
      techniqueurl: [],
      menuVisible: false,
      overlay_on: false,
      url: "",
    };
  },
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
