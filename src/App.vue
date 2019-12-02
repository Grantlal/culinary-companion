
<template>
  <div class="page-container" style="height:100%;">
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary andrew-nav">
        <md-button
          style="float:left:"
          class="md-icon-button"
          v-on:click.native="toggleMenu()"
          v-if="!menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <md-button class="md-icon-button" v-if="menuVisible">
          <md-icon style="opacity: 0;">menu</md-icon>
        </md-button>
        <span id="title">Culinary Companion</span>

        <md-menu class="bc-trans" style="margin-left: 10px;" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Recipes</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Techniques</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button md-menu-trigger>Favorites</md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Advanced Search</md-menu-item>
            <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'">Browse</md-menu-item>
            <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
          </md-menu-content>
        </md-menu>

        <div style="margin-left: auto; min-width: 300px; max-width:500px;">
          <md-field style="min-width: 300px; max-width:500px;">
            <label>Search Recipes</label>
            <md-input v-model="query"></md-input>
          </md-field>
        </div>

        <md-button
          class="md-raised"
          v-on:click.native="getRecipe()"
          style="background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197));"
        >GO!</md-button>

        <md-menu class="bc-trans" md-size="medium" md-align-trigger>
          <md-button style="width: 100%;" md-menu-trigger>
            <md-icon
              style="border: 1px solid black; border-radius: 100%; height: 100%; width: 100%;"
            >person</md-icon>
          </md-button>
          <md-menu-content>
            <md-menu-item class="bc-white">Account Settings</md-menu-item>
            <md-menu-item class="bc-white">Logout</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-app-toolbar>

      <md-app-drawer
        :md-active.sync="menuVisible"
        md-persistent="full"
        style="width: 15%; min-width: min-content; max-width: 400px; background-image: linear-gradient(to bottom left, rgb(229, 247, 228), rgb(201, 250, 197)); max-height:100%;"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Filters</span>
          
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="bc-trans">
          <md-list-item>
            <md-checkbox id="lactosebox" v-model="opt1">
              <label
                @click="opt1=!opt1"
                for="lactosebox"
                v-if="opt1"
                style="cursor:pointer; text-decoration: line-through;"
              >Lactose</label>
              <label
                @click="opt1=!opt1"
                for="lactosebox"
                v-if="!opt1"
                style="cursor:pointer;"
              >Lactose</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item md-expand>
            <span class="md-list-item-text">Meats</span>

            <md-list slot="md-expand" style="margin-left: 50px;" class="bc-trans">
              <md-checkbox id="porkbox" v-model="optpork">
                <label
                  @click="optpork=!optpork"
                  for="porkbox"
                  v-if="optpork"
                  style="cursor:pointer; text-decoration: line-through;"
                >Pork</label>
                <label
                  @click="optpork=!optpork"
                  for="porkbox"
                  v-if="!optpork"
                  style="cursor:pointer;"
                >Pork</label>
              </md-checkbox>
              <md-checkbox id="beefbox" v-model="optbeef">
                <label
                  @click="optbeef=!optbeef"
                  for="beefbox"
                  v-if="optbeef"
                  style="cursor:pointer; text-decoration: line-through;"
                >Beef</label>
                <label
                  @click="optbeef=!optbeef"
                  for="beefbox"
                  v-if="!optbeef"
                  style="cursor:pointer;"
                >Beef</label>
              </md-checkbox>
              <md-checkbox id="chickenbox" v-model="optchicken">
                <label
                  @click="optchicken=!optchicken"
                  for="chickenbox"
                  v-if="optchicken"
                  style="cursor:pointer; text-decoration: line-through;"
                >Chicken</label>
                <label
                  @click="optchicken=!optchicken"
                  for="chickenbox"
                  v-if="!optchicken"
                  style="cursor:pointer;"
                >Chicken</label>
              </md-checkbox>
            </md-list>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="peanutbox" v-model="opt3">
              <label
                @click="opt3=!opt3"
                for="peanutbox"
                v-if="opt3"
                style="cursor:pointer; text-decoration: line-through;"
              >Nuts</label>
              <label @click="opt3=!opt3" for="peanutbox" v-if="!opt3" style="cursor:pointer;">Nuts</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="diabeticbox" v-model="opt4">
              <label
                @click="opt4=!opt4"
                for="diabeticbox"
                v-if="opt4"
                style="cursor:pointer; text-decoration: line-through;"
              >Diabetic</label>
              <label
                @click="opt4=!opt4"
                for="diabeticbox"
                v-if="!opt4"
                style="cursor:pointer;"
              >Diabetic</label>
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="cont">
        <div id="recipecards" v-for="rec in recipes" v-bind:key="rec.calories" >
              <RecipeCard
                class="recipes"
                :title="rec.recipe.label"
                :dietLabels="rec.dietlabels"
                :instructions="rec.ingredientLines"
                :image="rec.recipe.image"
              ></RecipeCard>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import RecipeCard from "./components/RecipeCard.vue";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';


export default {
  data() {
    return {
      opt1: null,
      optpork: null,
      optbeef: null,
      optchicken: null,
      opt3: null,
      opt4: null,
      query: null,

      recipeExample: null,
      recipes: [],
      menuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    getRecipe: async function(event) { 
      try {
        if (this.query !== null) {
          //this.query = this.query.replace(/\s+/g, '');
          var url = `https://culinary-companion-api.herokuapp.com/recipes/?search=${String(
            this.query
          )}`;
          const response = await fetch(url).then(resp => resp.json());
          this.recipes = [];
          for (var index in response) {
            this.recipes.push(response[index]);
          }
          console.log("Recipes:");
          console.log(this.recipes);
        } else {
          this.recipeExample = "Search is null";
        }
      } catch (error) {
        this.recipeExample = "Error connecting to database.";
        console.error(error);
      }
    }
  },
  name: "app",
  components: {
    RecipeCard
  }
};
</script>

<style>
.bc-trans {
  background-color: transparent !important;
}
.bc-white {
  background-color: white !important;
}

.md-menu {
  background-color: white;
}

#recipecards {
	display: inline-block;
}

.recipes {
  display: inline-block;
  margin: 10px;
}

.recipes:hover {
  cursor: pointer;
}

.andrew-nav {
  display: flex;
  background-image: linear-gradient(
    to right,
    rgb(229, 247, 228),
    rgb(201, 250, 197)
  );
}

.md-theme-default {
  color: black !important;
  background-color: transparent;
}
#title {
  min-height: 70px;
  font-size: 50px;
  line-height: 70px;
}
.md-checkbox {
  display: flex;
}

table {
  width: 100%;
  table-layout: fixed;

  th {
    text-align: left;
  }
}
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
  width: 100%;
  height: 100%;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
body,
html {
  height: 100%;
}

.wrapper {
  position: relative;
}

footer,
div {
  display: block;
}

.container {
  padding-top: 70px;
  flex: 1;
}

.container,
.wrapper {
  height: 100%;
}

.menu {
  height: 100%;
  background-color: #eef1f6;
}

.content {
  padding-top: 25px;
  padding-right: 25px;
  padding-bottom: 125px;
  padding-left: 25px;
}

.footer {
  height: 120px;
  background-color: #324057;
  color: #a4aebd;
  width: 100%;
  z-index: 1000;
  margin-top: -120px;
  line-height: 1;
  font-size: 22px;
}
</style>