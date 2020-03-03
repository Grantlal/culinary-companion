<template>
  <md-app>
    <md-app-toolbar>
      <NavBar v-bind:menuVisible="this.visible" v-on:toggleDrawer="toggleMenu" v-on:recipeString="getRecipe" />
    </md-app-toolbar>

    <md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
      <filters v-bind:param="this.parameters" v-on:emitParam="getParams" />
    </md-app-drawer>
    <md-app-content id="cont">
		<Recipes />
    </md-app-content>
  </md-app>
</template>

<script>
import Filters from "./Filters.vue";
import NavBar from "./NavBar.vue";
import Recipes from "./Recipes.vue";
export default {
  components: {
    Filters,
    NavBar,
	Recipes
  },
  methods: {
    toggleMenu(value) {
      this.visible = value;
	},
	getParams(value) {
		this.parameters = value;
	},
	getRecipe(value) {
		this.query = value;
	}
  },
  data: () => ({
	visible: false,
	parameters: "",
	query: "",
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
</style>
