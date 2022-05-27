<template>
  <md-app>
    <md-app-toolbar>
      <tNavBar
        v-bind:menuVisible="this.visible"
        v-on:toggleDrawer="toggleMenu"
        v-on:techniqueString="getTechnique"
      />
    </md-app-toolbar>

    <md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
      <filters />
    </md-app-drawer>

    <md-app-content id="cont">
      <div id="techniqueCards" v-for="technique in techniqueJSON" v-bind:key="technique.name">
        <TechniqueCard class="techniques" :name="technique.name" :url="technique.url" />
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
import Filters from "./../Filters.vue";
import tNavBar from "./TechniqueNavBar.vue";
import TechniqueCard from "./TechniqueCard.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

export default {
  components: {
    Filters,
    tNavBar,
    TechniqueCard
  },
  methods: {
    toggleMenu(value) {
      this.visible = value;
    },
    getTechnique: async function(searchName) {
      this.startCheckApiCall();
      var techniqueUrl =
        "https://culinarycompanionhome.azurewebsites.net/techniquehome?keyword=";
      techniqueUrl += searchName;

      let techniqueResponse = await fetch(techniqueUrl);
      let techniqueData = await techniqueResponse.text();

      return this.techniqueParse(techniqueData);
    },

    techniqueParse(technique) {
      let response = JSON.parse(technique);
      //console.log(response);

      this.techniqueJSON = [];
      for (var index in response) {
        this.techniqueJSON.push({
          [response[index][0].Name]: response[index][0].Value,
          [response[index][1].Name]: response[index][1].Value,
          [response[index][2].Name]: response[index][2].Value,
          [response[index][3].Name]: response[index][3].Value
        });
      }
      this.endCheckApiCall();
      return this.techniqueJSON;
    },

    startCheckApiCall() {
      this.apiCall = false;
    },
    endCheckApiCall() {
      this.apiCall = true;
    }
  },
  data: () => ({
    visible: false,
    techniqueJSON: [],
    searchString: ""
  })
};
</script>

<style scoped>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.nav-title {
  color: black !important;
  font-size: 18px;
  line-height: 26px;
}
.page-container {
  display: flex;
  flex-direction: column;
}
.md-drawer.md-theme-default {
  background-color: #f5f5f5;
}
#cont {
	display: flex;
}
</style>
