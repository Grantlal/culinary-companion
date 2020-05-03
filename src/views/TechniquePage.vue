<template>
  <tDrawer />
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Vue from "vue";
import Embed from "v-video-embed";
import tDrawer from "@/components/techniques/TechniqueDrawer.vue";

// global register
Vue.use(Embed);

export default {
  name: "techniquePage",
  components: {
    tDrawer
  },

  data: () => ({
    visible: false,
    searchString: ""
  }),

  data() {
    return {
      url: "",
      apiCall: ""
    };
  }
};
</script>

<style scoped>
</style>
