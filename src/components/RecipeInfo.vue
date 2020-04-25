<template>
  <div class="basic" id="app">
    <h4 id="recipe-Name">{{recipeName()}}</h4>

    <md-card>
      <md-card-media style="max-width: 15%;">
        <img :src="recipeImage()">
      </md-card-media>

      <h1>Ingredients</h1>
      <md-card-content style="border-style: solid;">
        <md-card style="width: 10%; margin: 4px; display: inline-block;" v-for="ingredient in recipeIngredients()" :key="ingredient.id">
          <md-card-media md-medium>
            <img :src="getUrl(ingredient.image)">
          </md-card-media>

          <md-card-header>
            <div class="md-title" style="word-wrap: break-word;">{{ingredient.name}}</div>
          </md-card-header>

          <md-card-actions md-alignment="right">
            <md-button>Buy</md-button>
          </md-card-actions>
        </md-card>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

// Make sure to look at header.vue for reference to the linking. From there I am on my own and need to figure out how to send information from recipecard to recipeinfo
export default {
  name: "RecipeInfo",
  computed: {
    totalTvCount () {
      var recipe = this.findRecipe();
      return recipe;
    }
  },
  methods: {
    findRecipe(){
      var foo = this.$store.state.recipes;
      for(var i = 0; i < foo.length; i++) {
        if(foo[i].id == this.$route.params.id) {
          return foo[i];
        }
      }
      return "Nothing found";
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
      return "https://spoonacular.com/cdn/ingredients_500x500/"+ingredient;
    },
    buttonPress(){
      console.log(this.findRecipe());
    }
  }
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
h4{
  font-size: 200%;
  text-align: center;
}
.basic {
  font-size: 100%;
  padding: 0;
  margin: 0;
  background: white;
}
</style>