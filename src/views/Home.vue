<template>
  <div class="page-container" id="app">
    <Drawer />
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
// @ is an alias to /src

export default {
  name: "home",
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
}
</script>
