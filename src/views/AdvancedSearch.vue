<template>
  <div>
    <md-field style="margin-left: 25%; margin-right: 25%; width: auto; max-width:500px;">
      <label>Search Recipes</label>
      <md-input></md-input>
    </md-field>

    <md-card
      id="Cuisines-Include"
      style="margin: 4px; display: inline-block; width: 32%;"
    >
    <md-card-header>Cuisines to Include</md-card-header>
      <md-card-content> </md-card-content>
    </md-card>

    <md-card id="Cuisines-Exclude" style="margin: 4px; display: inline-block; width: 32%;">
      <md-card-header>Cuisines to Exclude</md-card-header>
      <md-card-content> </md-card-content>
    </md-card>

    <md-card id="Intolerances" style="margin: 4px; display: inline-block; width: 32%;">
      <md-card-content> </md-card-content>
    </md-card>

    <md-card id="IncludeIngredients" style="margin: 4px; display: inline-block; width: 48.2%;">
      <md-card-content> </md-card-content>
    </md-card>

    <md-card id="ExcludeIngredients" style="margin: 4px; display: inline-block; width: 48.2%;">
      <md-card-content> </md-card-content>
    </md-card>

  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

export default {
  name: "advancedSearch",
  components: {},
  methods: {
    getRecipe: async function() {
      console.log("getRecipe()");
      var url = "https://culinarycompanionhome.azurewebsites.net/recipehome";
      var searchBod = {
        query: "",
        cuisine: "",
        excludeCuisine: "",
        diet: "",
        intolerances: "",
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
      response = JSON.parse(data);

      this.recipeJSON = [];
      for (var index in response) {
        for (let i = 0; i < 3; i++) {
          //change the 3 here
          this.recipeJSON.push(response[index][i]);
        }
      }

      for (let i = 0; i < 3; i++) {
        //change the 3 here
        this.recipeJSON.pop();
      }

      console.log("Recipes:");
      console.log(this.recipeJSON);

      this.$store.state.recipes = this.recipeJSON;
    },
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
</style>
