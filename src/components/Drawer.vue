<template>
  <md-app>
    <md-app-toolbar>
      <NavBar
        v-bind:menuVisible="this.visible"
        v-on:toggleDrawer="toggleMenu"
        v-on:recipeString="getRecipe"
      />
    </md-app-toolbar>

    <md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
      <filters v-on:cuisinesEmitted="getCuisines" v-on:dietsEmitted="getDiets" v-on:intolerancesEmitted="getIntolerances" />
    </md-app-drawer>
    <md-app-content id="cont">
      <div id="recipecards" v-for="recipe in recipeJSON" v-bind:key="recipe.id">
        <!-- This is where the information is being populated -->
        <RecipeCard2
          class="recipes"
          :title="recipe.title"
          :instructions="recipe.IngredientsInString"
          :image="recipe.image"
          :id="recipe.id"
        />
      </div>
    </md-app-content>
  </md-app>
</template>

<script>
import filters from "./Filters.vue";
import NavBar from "./NavBar.vue";
import RecipeCard2 from "./RecipeCard2.vue";

export default {
  components: {
    RecipeCard2,
    filters,
    NavBar,
  },
  methods: {
    toggleMenu(value) {
      this.visible = value;
    },
    getCuisines(value) {
      this.cuisines = value;
      console.log("Cuisines: " + value);
    },
    getDiets(value) {
      this.diets = value;
      console.log("Diets: " + value);
    },
    getIntolerances(value) {
      this.intolerances = value;
      console.log("Intolerances: " + value);
    },
    getRecipe: async function(value) {
      console.log("getRecipe()");
	  var url = "https://culinarycompanionhome.azurewebsites.net/recipehome";
	  console.log("Drawer cuisines: " + this.cuisines);
	  console.log("Drawer diets: " + this.diets);
	  console.log("Drawer intolerances: " + this.intolerances);
      var searchBod = {
        query: value,
		cuisine: this.cuisines,
        excludeCuisine: "",
        diet: this.diets,
        intolerances: this.intolerances,
        equipment: "",
        includeIngredients: "",
        excludeIngredients: "",
        type: "",
        maxReadyTime: "",
        minCarbs: "",
        maxCarbs: "",
        minProtein: "",
        maxProtein: "",
        minCalories: "",
        maxCalories: "",
        minFat: "",
        maxFat: "",
        minCaffeine: "",
        maxCaffeine: "",
        minCopper: "",
        maxCopper: "",
        minCalcium: "",
        maxCalcium: "",
        minCholesterol: "",
        maxCholesterol: "",
        minSaturatedFat: "",
        maxSaturatedFat: "",
        minVitaminA: "",
        maxVitaminA: "",
        minVitaminC: "",
        maxVitaminC: "",
        minVitaminD: "",
        maxVitaminD: "",
        minVitaminE: "",
        maxVitaminE: "",
        minVitaminK: "",
        maxVitaminK: "",
        minVitaminB1: "",
        maxVitaminB1: "",
        minVitaminB2: "",
        maxVitaminB2: "",
        minVitaminB5: "",
        maxVitaminB5: "",
        minVitaminB3: "",
        maxVitaminB3: "",
        minVitaminB6: "",
        maxVitaminB6: "",
        minVitaminB12: "",
        maxVitaminB12: "",
        minFiber: "",
        maxFIber: "",
        minIron: "",
        maxIron: "",
        minMagnesium: "",
        maxMagnesium: "",
        minPotassium: "",
        maxPotassium: "",
        minSodium: "",
        maxSodium: "",
        minSugar: "",
        maxSugar: "",
        minZinc: "",
        maxZinc: "",
      };

      const removeEmptyOrNull = (obj) => {
        Object.keys(obj).forEach(
          (k) =>
            (obj[k] &&
              typeof obj[k] === "object" &&
              removeEmptyOrNull(obj[k])) ||
            (!obj[k] && obj[k] !== undefined && delete obj[k])
        );
        return obj;
      };

      let searchBody = removeEmptyOrNull(searchBod);

      let response = await fetch(url, {
        method: "Post",
        body: JSON.stringify(searchBody),
      });

	  let data = await response.text();
	  console.log(data);
      response = JSON.parse(data);

      this.recipeJSON = [];
      for (var index in response) {
        for (let i = 0; i < 3; i++) { //change the 3 here
          this.recipeJSON.push(response[index][i]);
        }
      }

      for (let i = 0; i < 3; i++) { //change the 3 here
        this.recipeJSON.pop();
      }

      console.log("Recipes:");
      console.log(this.recipeJSON);

      this.$store.state.recipes = this.recipeJSON;
    },
  },
  data: () => ({
    visible: false,
    intolerances: "",
	cuisines: "", 
	diets: "",
    recipeJSON: [],
  }), 
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
</style>
