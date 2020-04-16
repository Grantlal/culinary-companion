<template>
  <div
    class="page-container"
    id="app"
  >{{$route.params.id}}</div>
</template>

<script>
// Make sure to look at header.vue for reference to the linking. From there I am on my own and need to figure out how to send information from recipecard to recipeinfo
export default {
  name: "RecipeInfo"
};
</script>

<style>
html,
body {
  font-size: 100%;
}
body {
  padding: 0;
  margin: 0;
  background: white;
}
</style>