<template>
  <div class="basic" id="app">
    <h4 id="recipe-Name" style="text-align: center;">{{ recipeName() }}</h4>
    <md-card>
      <md-card-media class="center">
        <img :src="recipeImage()" />
      </md-card-media>

      <h1>Ingredients</h1>
      <md-card-content style="border-style: solid;">
        <md-card
          style="margin: 4px; display: inline-block; width: 24.4%;"
          v-for="ingredient in recipeIngredients()"
          :key="ingredient.id"
        >
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ ingredient.name }}</div>
              <div class="md-subhead">
                You can buy this from
                <div>{{ "Amazon" }}</div>
              </div>
            </md-card-header-text>

            <md-card-media md-big>
              <img
                style="width: auto; height: auto; max-height: 200px;"
                :src="getUrl(ingredient.image)"
                alt="People"
              />
            </md-card-media>
          </md-card-header>

          <md-card-actions>
            <md-button v-on:click.native="getSingleGrocery(ingredient.name)">Buy</md-button>
          </md-card-actions>
        </md-card>
      </md-card-content>

      <h1>Instructions</h1>
      <md-card-content style="border-style: solid;">
        <md-card
          style="margin: 4px; display: inline-block; width: 100%;"
          v-for="step in getAnalyzedInstructionsSteps()"
          :key="step.number"
        >
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Step Number {{ step.number }}</div>
              <div class="md-subhead">
                <b style="font-size: 18px;">Ingredients</b>
                <div
                  v-for="ingredients in step.ingredients"
                  :key="mathRandom(ingredients)"
                >
                  {{ ingredients.name }}
                </div>
              </div>
            </md-card-header-text>

            <md-menu md-size="big" md-direction="bottom-end">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>
                  <span>Buy Ingredients</span>
                  <md-icon>food</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-card-header>

          <md-card-content>
            <div class="md-subhead">
              <b style="font-size: 18px;">Step Instructions</b>
            </div>
            <div>{{ step.step }}</div>
          </md-card-content>
        </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

// Make sure to look at header.vue for reference to the linking. From there I am on my own and need to figure out how to send information from recipecard to recipeinfo
export default {
  name: "RecipeInfo",
  computed: {
    totalTvCount() {
      var recipe = this.findRecipe();
      return recipe;
    },
  },
  methods: {
    findRecipe() {
      var foo = this.$store.state.recipes;
      for (var i = 0; i < foo.length; i++) {
        if (foo[i].id == this.$route.params.id) {
          return foo[i];
        }
      }
      return "Nothing found";
    },
    getTechnique: async function(searchName) {
		console.log("TechniqueGet");
    var techniqueUrl = "https://culinarycompaniontechniques20200427203903.azurewebsites.net/Techniques?search=";
    techniqueUrl += searchName;
    console.log(techniqueUrl);

		let techniqueResponse = await fetch(techniqueUrl, {
		method: "Get",
		});

        console.log(techniqueResponse);
        return techniqueResponse
		},
    recipeName() {
      var foo = this.findRecipe();
      return foo.title;
    },
    recipeImage() {
      var foo = this.findRecipe();
      return foo.image;
    },
    recipeIngredients() {
      var foo = this.findRecipe();
      return foo.Ingredients;
    },
    getUrl(ingredient) {
      return "https://spoonacular.com/cdn/ingredients_500x500/" + ingredient;
    },
    getAnalyzedInstructionsSteps() {
      var foo = this.findRecipe();
      console.log(foo.analyzedInstructions[0].steps);
      console.log(foo.analyzedInstructions[0].steps[0].ingredients[0].id);
      return foo.analyzedInstructions[0].steps;
    },
    mathRandom(i) {
      return Math.random();
    },
    buttonPress() {
      console.log(this.findRecipe());
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
h4 {
  font-size: 200%;
  text-align: center;
}
.basic {
  font-size: 100%;
  padding: 0;
  margin: 0;
  background: white;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
h1 {
  text-align: center;
}
</style>
