<template>
  <div>
    <md-field style="margin-left: 25%; width: 42%;">
      <label>Search Recipes</label>
      <md-input></md-input>
      <md-button
        class="md-raised"
        style="margin-right: -15%;"
        v-on:click.native="Hi"
        >SEARCH</md-button
      >
    </md-field>

    <md-card
      id="IncludeIngredients"
      style="margin: 0.5%; display: inline-block; width: 48.2%;"
    >
      <md-card-header>Ingredient to Include</md-card-header>
      <md-card-content> </md-card-content>
    </md-card>

    <md-card
      id="ExcludeIngredients"
      style="margin: 0.5%; display: inline-block; width: 48.2%;"
    >
      <md-card-header>Ingredient to Exclude</md-card-header>
      <md-card-content> </md-card-content>
    </md-card>

    <md-card
      id="Cuisines-Include"
      style="margin: 0.5%; display: inline-block; width: 23.6%;"
    >
      <md-card-header>Cuisines to Include</md-card-header>
      <md-card-content
        ><md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item v-for="cuisine in Cuisines" :key="cuisine.text">
            <md-checkbox v-bind:id="cuisine.id" v-model="cuisine.active">
              <label
                class="clickable"
                v-if="cuisine.active == false"
                v-bind:for="cuisine.id"
                @click="cuisine.active = true"
                >{{ cuisine.text }}</label
              >
              <label
                class="clickable"
                v-if="cuisine.active == true"
                v-bind:for="cuisine.id"
                @click="cuisine.active = false"
                >{{ cuisine.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>

    <md-card
      id="ExcludeIngredients"
      style="margin: 0.5%; display: inline-block; width: 23.6%;"
    >
      <md-card-header>Cuisines to Exclude</md-card-header>
      <md-card-content
        ><md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item v-for="cuisine in Cuisines" :key="cuisine.text">
            <md-checkbox v-bind:id="cuisine.id" v-model="cuisine.active">
              <label
                class="clickable"
                v-if="cuisine.active == false"
                v-bind:for="cuisine.id"
                @click="cuisine.active = true"
                >{{ cuisine.text }}</label
              >
              <label
                class="clickable"
                v-if="cuisine.active == true"
                v-bind:for="cuisine.id"
                @click="cuisine.active = false"
                >{{ cuisine.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>

    <md-card
      id="Intolerances-Exclude"
      style="margin: 0.5%; display: inline-block; width: 23.6%;"
    >
      <md-card-header>Intolerances to Exclude</md-card-header>
      <md-card-content>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item
            v-for="intolerance in Intolerances"
            :key="intolerance.text"
          >
            <md-checkbox
              v-bind:id="intolerance.id"
              v-model="intolerance.active"
            >
              <label
                class="clickable"
                v-if="intolerance.active == false"
                v-bind:for="intolerance.id"
                @click="intolerance.active = !intolerance.active"
                >{{ intolerance.text }}</label
              >
              <label
                class="clickable"
                v-if="intolerance.active == true"
                v-bind:for="intolerance.id"
                @click="intolerance.active = !intolerance.active"
                >{{ intolerance.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list></md-card-content
      >
    </md-card>

    <md-card
      id="Diet-Include"
      style="margin: 4px; display: inline-block; width: 23.6%;"
    >
      <md-card-header>Diet to Include</md-card-header>
      <md-card-content
        ><md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item v-for="diet in Diets" :key="diet.text">
            <md-checkbox v-bind:id="diet.id" v-model="diet.active">
              <label
                class="clickable"
                v-if="diet.active == false"
                v-bind:for="diet.id"
                @click="diet.active = true"
                >{{ diet.text }}</label
              >
              <label
                class="clickable"
                v-if="diet.active == true"
                v-bind:for="diet.id"
                @click="diet.active = false"
                >{{ diet.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

const https = require("https");

export default {
  name: "advancedSearch",
  components: {},
  data: () => ({
    param: "",
    Cuisines: [
      { id: "1", text: "African", active: false },
      { id: "2", text: "American", active: false },
      { id: "3", text: "British", active: false },
      { id: "4", text: "Cajun", active: false },
      { id: "5", text: "Caribbean", active: false },
      { id: "6", text: "Chinese", active: false },
      { id: "7", text: "Eastern European", active: false },
      { id: "8", text: "European", active: false },
      { id: "9", text: "French", active: false },
      { id: "10", text: "German", active: false },
      { id: "11", text: "Greek", active: false },
      { id: "12", text: "Indian", active: false },
      { id: "13", text: "Irish", active: false },
      { id: "14", text: "Italian", active: false },
      { id: "15", text: "Japanese", active: false },
      { id: "16", text: "Jewish", active: false },
      { id: "17", text: "Korean", active: false },
      { id: "18", text: "Latin American", active: false },
      { id: "19", text: "Mediterranean", active: false },
      { id: "20", text: "Mexican", active: false },
      { id: "21", text: "Middle Eastern", active: false },
      { id: "22", text: "Nordic", active: false },
      { id: "23", text: "Southern", active: false },
      { id: "24", text: "Spanish", active: false },
      { id: "25", text: "Thai", active: false },
      { id: "26", text: "Vietnamese", active: false },
    ],
    Diets: [
      { id: "1", text: "Gluten Free", active: false },
      { id: "2", text: "Vegetarian", active: false },
      { id: "3", text: "Lacto-Vegetarian", active: false },
      { id: "4", text: "Ovo-Vegetarian", active: false },
      { id: "5", text: "Vegan", active: false },
      { id: "6", text: "Pescetarian", active: false },
      { id: "7", text: "Paleo", active: false },
      { id: "8", text: "Primal", active: false },
      { id: "9", text: "Whole30", active: false },
    ],
    Intolerances: [
      { id: "1", text: "Dairy", active: false },
      { id: "2", text: "Egg", active: false },
      { id: "3", text: "Gluten", active: false },
      { id: "4", text: "Grain", active: false },
      { id: "5", text: "Peanut", active: false },
      { id: "6", text: "Seafood", active: false },
      { id: "7", text: "Sesame", active: false },
      { id: "8", text: "Shellfish", active: false },
      { id: "9", text: "Soy", active: false },
      { id: "10", text: "Sulfite", active: false },
      { id: "11", text: "Tree Nut", active: false },
      { id: "12", text: "Wheat", active: false },
    ],
  }),
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
    getRecipeParams: async function(event) {
      this.param = "";
      //for loop to collect all active filters
      for (x in Cuisines) {
        if (x.active) {
          this.param += "";
        }
      }
      if (this.OPT__AlcoholFree) this.param += `&health=alcohol-free`;
      console.log(this.param);
      this.$emit("paramEmitted", this.param);
    },
    getSavedFilters: async function() {
      var url = "https://cc-myaccount.azurewebsites.net/api/accounts/" + 1;
      https
        .get(url, (resp) => {
          let data = "";

          // A chunk of data has been recieved.
          resp.on("data", (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            //console.log(JSON.parse(data).explanation);
            var response = JSON.parse(data);

            var json = [];
            for (var index in response) {
              json.push(response[index]);
            }
            console.log(json);
          });
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
        });
    },
    emitParam(event) {
      getRecipeParams();
      console.log(this.param);
      this.$emit("paramEmitted", this.param);
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
