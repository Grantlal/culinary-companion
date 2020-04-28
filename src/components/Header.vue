<template>
  <router-link to="/" id="linkless">
    <span id="title">Culinary Companion</span>
  </router-link>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
export default {};
</script>

<style>
#title {
  display: flex;
  min-height: 70px;
  font-size: 50px;
  line-height: 70px;
  width: 100%;
  max-height: 100px;
  background-color: var(--md-theme-default-toolbarvariant, #f5f5f5);
  padding-left: 20px;
}
#linkless:hover {
  color: black;
  text-decoration: none;
}
</style>
