<template>
  <div>
    <RecipeInfo />
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import RecipeInfo from "../components/RecipeInfo.vue";

export default {
  name: "recipePage",
  components: {
    RecipeInfo
  }
};
</script>