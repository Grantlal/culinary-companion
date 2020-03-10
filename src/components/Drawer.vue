<template>
  <md-app>
    <md-app-toolbar>
      <NavBar v-bind:menuVisible="this.visible" v-on:toggleDrawer="toggleMenu" v-on:recipeString="getRecipe" />
    </md-app-toolbar>

    <md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
      <filters v-bind:param="this.parameters" v-on:emitParam="getParams" />
    </md-app-drawer>
    <md-app-content id="cont">
		<div id="recipecards" v-for="rec in recipeJSON" v-bind:key="rec.calories">
          <RecipeCard
            class="recipes"
            :title="rec.recipe.label"
            :dietLabels="rec.dietlabels"
            :instructions="rec.ingredientLines"
            :image="rec.recipe.image"
          ></RecipeCard>
		   <div id="balls"></div>
		   <div id="overlay">
          <div id="overlay_white" class="overlay bc-white">
            <div id="overlay_exit" @click="toggleOverlay" class="overlay">X</div>
            <div>
              <h1 id="overlay_title" class="overlay">This is a Title</h1>
              <br />
              <br />
              <br />
              <div id="youtube">
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  width="560"
                  height="315"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h2 id="overlay_instructions"></h2>
              </div>
            </div>
          </div>
        </div>
        </div>
    </md-app-content>
  </md-app>
</template>

<script>
import Filters from "./Filters.vue";
import NavBar from "./NavBar.vue";
import RecipeCard from "./RecipeCard.vue";
export default {
  components: {
	  RecipeCard,
    Filters,
    NavBar,
  },
  methods: {
    toggleMenu(value) {
      this.visible = value;
	},
	getParams(value) {
		this.parameters = value;
	},
	getRecipe: async function(value) {
		console.log("getRecipe()");
		this.query = value;
		//bounce off of api
		 var url = `https://culinary-companion-api.herokuapp.com/recipes/?search=${String(
            //var url = `http://localhost:8080/recipes/?search=${String(
            this.query
          )}${String(this.parameters)}`;
          url.replace("%20", "");
          var response = await fetch(url).then(resp => resp.json());
          this.recipeJSON = [];
          for (var index in response) {
            this.recipeJSON.push(response[index]);
          }
          console.log("Recipes:");
          console.log(this.recipeJSON);
	}
  },
  data: () => ({
	visible: false,
	parameters: "",
	query: "",
	recipeJSON: []
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
