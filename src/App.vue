<template>
  <div class="page-container" style="height:100%;">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary andrew-nav">
        <md-button
          style="float:left:"
          class="md-icon-button"
          @click="toggleMenu"
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
        class="md-scrollbar"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Filter Out</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list class="bc-trans">
          <md-list-item md-expand>
            <span class="md-list-item-text">Diets</span>
            <md-list slot="md-expand" class="bc-trans hamburger-submenu">
              <md-list-item>
                <md-checkbox id="alcoholFreebox" v-model="OPT__AlcoholFree">
                  <label
                    @click="OPT__AlcoholFree = !OPT__AlcoholFree"
                    for="alcoholFreebox"
                    v-if="OPT__AlcoholFree"
                    class="clickable bold"
                  >Alcohol-Free</label>
                  <label
                    @click="OPT__AlcoholFree = !OPT__AlcoholFree"
                    for="alcoholFreebox"
                    v-if="!OPT__AlcoholFree"
                    class="clickable"
                  >Alcohol-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="balancedbox" v-model="OPT__Balanced">
                  <label
                    @click="OPT__Balanced = !OPT__Balanced"
                    for="balancedbox"
                    v-if="OPT__Balanced"
                    class="clickable bold"
                  >Balanced</label>
                  <label
                    @click="OPT__Balanced = !OPT__Balanced"
                    for="balancedbox"
                    v-if="!OPT__Balanced"
                    class="clickable"
                  >Balanced</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="fodmapbox" v-model="OPT__FodmapFree">
                  <label
                    @click="OPT__FodmapFree = !OPT__FodmapFree"
                    for="fodmapbox"
                    v-if="OPT__FodmapFree"
                    class="clickable bold"
                  >Fodmap</label>
                  <label
                    @click="OPT__FodmapFree = !OPT__FodmapFree"
                    for="fodmapbox"
                    v-if="!OPT__FodmapFree"
                    class="clickable"
                  >Fodmap</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="glutenfreebox" v-model="OPT__GlutenFree">
                  <label
                    @click="OPT__GlutenFree = !OPT__GlutenFree"
                    for="glutenfreebox"
                    v-if="OPT__GlutenFree"
                    class="clickable bold"
                  >Gluten-Free</label>
                  <label
                    @click="OPT__GlutenFree = !OPT__GlutenFree"
                    for="glutenfreebox"
                    v-if="!OPT__GlutenFree"
                    class="clickable"
                  >Gluten-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="highfiberbox" v-model="OPT__HighFiber">
                  <label
                    @click="OPT__HighFiber = !OPT__HighFiber"
                    for="highfiberbox"
                    v-if="OPT__HighFiber"
                    class="clickable bold"
                  >High-Fiber</label>
                  <label
                    @click="OPT__HighFiber = !OPT__HighFiber"
                    for="highfiberbox"
                    v-if="!OPT__HighFiber"
                    class="clickable"
                  >High-Fiber</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="highproteinbox" v-model="OPT__HighProtein">
                  <label
                    @click="OPT__HighProtein = !OPT__HighProtein"
                    for="highproteinbox"
                    v-if="OPT__HighProtein"
                    class="clickable bold"
                  >High-Protein</label>
                  <label
                    @click="OPT__HighProtein = !OPT__HighProtein"
                    for="highproteinbox"
                    v-if="!OPT__HighProtein"
                    class="clickable"
                  >High-Protein</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="ketobox" v-model="OPT__KetoFriendly">
                  <label
                    @click="OPT__KetoFriendly = !OPT__KetoFriendly"
                    for="ketobox"
                    v-if="OPT__KetoFriendly"
                    class="clickable bold"
                  >Keto</label>
                  <label
                    @click="OPT__KetoFriendly = !OPT__KetoFriendly"
                    for="ketobox"
                    v-if="!OPT__KetoFriendly"
                    class="clickable"
                  >Keto</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kidneybox" v-model="OPT__kidneyFriendly">
                  <label
                    @click="OPT__kidneyFriendly = !OPT__kidneyFriendly"
                    for="kidneybox"
                    v-if="OPT__kidneyFriendly"
                    class="clickable bold"
                  >Kidney Friendly</label>
                  <label
                    @click="OPT__kidneyFriendly = !OPT__kidneyFriendly"
                    for="kidneybox"
                    v-if="!OPT__kidneyFriendly"
                    class="clickable"
                  >Kidney Friendly</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kosherbox" v-model="OPT__Kosher">
                  <label
                    @click="OPT__Kosher = !OPT__Kosher"
                    for="kosherbox"
                    v-if="OPT__Kosher"
                    class="clickable bold"
                  >Kosher</label>
                  <label
                    @click="OPT__Kosher = !OPT__Kosher"
                    for="kosherbox"
                    v-if="!OPT__Kosher"
                    class="clickable"
                  >Kosher</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowfatbox" v-model="OPT__LowFat">
                  <label
                    @click="OPT__LowFat = !OPT__LowFat"
                    for="lowfatbox"
                    v-if="OPT__LowFat"
                    class="clickable bold"
                  >Low-Fat</label>
                  <label
                    @click="OPT__LowFat = !OPT__LowFat"
                    for="lowfatbox"
                    v-if="!OPT__LowFat"
                    class="clickable"
                  >Low-Fat</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowcarbbox" v-model="OPT__LowCarb">
                  <label
                    @click="OPT__LowCarb = !OPT__LowCarb"
                    for="lowcarbbox"
                    v-if="OPT__LowCarb"
                    class="clickable bold"
                    F
                  >Low-Sugar</label>
                  <label
                    @click="OPT__LowCarb = !OPT__LowCarb"
                    for="lowcarbbox"
                    v-if="!OPT__LowCarb"
                    class="clickable"
                  >Low-Sugar</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="kbox" v-model="OPT__LowPotassium">
                  <label
                    @click="OPT__LowPotassium = !OPT__LowPotassium"
                    for="kbox"
                    v-if="OPT__LowPotassium"
                    class="clickable bold"
                  >Low-Potassium</label>
                  <label
                    @click="OPT__LowPotassium = !OPT__LowPotassium"
                    for="kbox"
                    v-if="!OPT__LowPotassium"
                    class="clickable"
                  >Low-Potassium</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="lowsodiumbox" v-model="OPT__LowSodium">
                  <label
                    @click="OPT__LowSodium = !OPT__LowSodium"
                    for="lowsodiumbox"
                    v-if="OPT__LowSodium"
                    class="clickable bold"
                  >Low-Sodium</label>
                  <label
                    @click="OPT__LowSodium = !OPT__LowSodium"
                    for="lowsodiumbox"
                    v-if="!OPT__LowSodium"
                    class="clickable"
                  >Low-Sodium</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="paleobox" v-model="OPT__Paleo">
                  <label
                    @click="OPT__Paleo = !OPT__Paleo"
                    for="paleobox"
                    v-if="OPT__Paleo"
                    class="clickable bold"
                  >Paleo</label>
                  <label
                    @click="OPT__Paleo = !OPT__Paleo"
                    for="paleobox"
                    v-if="!OPT__Paleo"
                    class="clickable"
                  >Paleo</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="peanutbox" v-model="OPT__PeanutFree">
                  <label
                    @click="OPT__PeanutFree = !OPT__PeanutFree"
                    for="peanutbox"
                    v-if="OPT__PeanutFree"
                    class="clickable bold"
                  >Peanut-Free</label>
                  <label
                    @click="OPT__PeanutFree = !OPT__PeanutFree"
                    for="peanutbox"
                    v-if="!OPT__PeanutFree"
                    class="clickable"
                  >Peanut-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="pecatarianbox" v-model="OPT__Pecatarian">
                  <label
                    @click="OPT__Pecatarian = !OPT__Pecatarian"
                    for="pecatarianbox"
                    v-if="OPT__Pecatarian"
                    class="clickable bold"
                  >Pecatarian</label>
                  <label
                    @click="OPT__Pecatarian = !OPT__Pecatarian"
                    for="pecatarianbox"
                    v-if="!OPT__Pecatarian"
                    class="clickable"
                  >Pecatarian</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="sesamebox" v-model="OPT__SesameFree">
                  <label
                    @click="OPT__SesameFree = !OPT__SesameFree"
                    for="sesamebox"
                    v-if="OPT__SesameFree"
                    class="clickable bold"
                  >Sesame-Free</label>
                  <label
                    @click="OPT__SesameFree = !OPT__SesameFree"
                    for="sesamebox"
                    v-if="!OPT__SesameFree"
                    class="clickable"
                  >Sesame-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="shellfishbox" v-model="OPT__ShellfishFree">
                  <label
                    @click="OPT__ShellfishFree = !OPT__ShellfishFree"
                    for="shellfishbox"
                    v-if="OPT__ShellfishFree"
                    class="clickable bold"
                  >Shellfish-Free</label>
                  <label
                    @click="OPT__ShellfishFree = !OPT__ShellfishFree"
                    for="shellfishbox"
                    v-if="!OPT__ShellfishFree"
                    class="clickable"
                  >Shellfish-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="Soybox" v-model="OPT__SoyFree">
                  <label
                    @click="OPT__SoyFree = !OPT__SoyFree"
                    for="Soybox"
                    v-if="OPT__Pecatarian"
                    class="clickable bold"
                  >Soy-Free</label>
                  <label
                    @click="OPT__SoyFree = !OPT__SoyFree"
                    for="Soybox"
                    v-if="!OPT__SoyFree"
                    class="clickable"
                  >Soy-Free</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="sugarcbox" v-model="OPT__SugarConscious">
                  <label
                    @click="OPT__SugarConscious = !OPT__SugarConscious"
                    for="sugarcbox"
                    v-if="OPT__SugarConscious"
                    class="clickable bold"
                  >Sugar-Conscious</label>
                  <label
                    @click="OPT__SugarConscious = !OPT__SugarConscious"
                    for="sugarcbox"
                    v-if="!OPT__SugarConscious"
                    class="clickable"
                  >Sugar-Conscious</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="veganbox" v-model="OPT__Vegan">
                  <label
                    @click="OPT__Vegan = !OPT__Vegan"
                    for="veganbox"
                    v-if="OPT__Vegan"
                    class="clickable bold"
                  >Vegan</label>
                  <label
                    @click="OPT__Vegan = !OPT__Vegan"
                    for="veganbox"
                    v-if="!OPT__Vegan"
                    class="clickable"
                  >Vegan</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="vegetabox" v-model="OPT__Vegetarian">
                  <label
                    @click="OPT__Vegetarian = !OPT__Vegetarian"
                    for="vegetabox"
                    v-if="OPT__Vegetarian"
                    class="clickable bold"
                  >Vegetarian</label>
                  <label
                    @click="OPT__Vegetarian = !OPT__Vegetarian"
                    for="vegetabox"
                    v-if="!OPT__Vegetarian"
                    class="clickable"
                  >Vegetarian</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="wheatbox" v-model="OPT__WheatFree">
                  <label
                    @click="OPT__WheatFree = !OPT__WheatFree"
                    for="wheatbox"
                    v-if="OPT__WheatFree"
                    class="clickable bold"
                  >Wheat-Free</label>
                  <label
                    @click="OPT__WheatFree = !OPT__WheatFree"
                    for="wheatbox"
                    v-if="!OPT__WheatFree"
                    class="clickable"
                  >Wheat-Free</label>
                </md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>

          <md-list-item md-expand>
            <span class="md-list-item-text">Meats</span>
            <md-list slot="md-expand" class="bc-trans hamburger-submenu">
              <md-list-item>
                <md-checkbox id="beefbox" v-model="OPT__BeefFree" class="md-primary">
                  <label
                    @click="OPT__BeefFree = !OPT__BeefFree"
                    for="beefbox"
                    v-if="OPT__BeefFree"
                    class="clickable strk-thru"
                  >Beef</label>
                  <label
                    @click="OPT__BeefFree = !OPT__BeefFree"
                    for="beefbox"
                    v-if="!OPT__BeefFree"
                    class="clickable"
                  >Beef</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="chickenbox" v-model="OPT__ChickenFree" class="md-primary">
                  <label
                    @click="OPT__ChickenFree = !OPT__ChickenFree"
                    for="chickenbox"
                    v-if="OPT__ChickenFree"
                    class="clickable strk-thru"
                  >Chicken</label>
                  <label
                    @click="OPT__ChickenFree = !OPT__ChickenFree"
                    for="chickenbox"
                    v-if="!OPT__ChickenFree"
                    class="clickable"
                  >Chicken</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="porkbox" v-model="OPT__PorkFree" class="md-primary">
                  <label
                    @click="OPT__PorkFree = !OPT__PorkFree"
                    for="porkbox"
                    v-if="OPT__PorkFree"
                    class="clickable strk-thru"
                  >Pork</label>
                  <label
                    @click="OPT__PorkFree = !OPT__PorkFree"
                    for="porkbox"
                    v-if="!OPT__PorkFree"
                    class="clickable"
                  >Pork</label>
                </md-checkbox>
              </md-list-item>

              <md-list-item>
                <md-checkbox id="redmeatbox" v-model="OPT__RedMeatFree" class="md-primary">
                  <label
                    @click="OPT__RedMeatFree = !OPT__RedMeatFree"
                    for="redmeatbox"
                    v-if="OPT__RedMeatFree"
                    class="clickable strk-thru"
                  >Red Meats</label>
                  <label
                    @click="OPT__RedMeatFree = !OPT__RedMeatFree"
                    for="redmeatbox"
                    v-if="!OPT__RedMeatFree"
                    class="clickable"
                  >Red Meats</label>
                </md-checkbox>
              </md-list-item>
            </md-list>
          </md-list-item>
          <md-list-item md-expand>
            <span class="md-list-item-text">Nuts</span>
            <md-list slot="md-expand" class="bc-trans hamburger-submenu">

            <md-list-item>
              <md-checkbox id="peanutbox" v-model="OPT__PeanutFree" class="md-primary">
                <label
                  @click="OPT__PeanutFree = !OPT__PeanutFree"
                  for="peanutbox"
                  v-if="OPT__PeanutFree"
                  class="clickable strk-thru"
                >Peanuts</label>
                <label
                  @click="OPT__PeanutFree = !OPT__PeanutFree"
                  for="peanutbox"
                  v-if="!OPT__PeanutFree"
                  class="clickable"
                >Peanuts</label>
              </md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox id="tnutbox" v-model="OPT__TreeNutFree" class="md-primary">
                <label
                  @click="OPT__TreeNutFree = !OPT__TreeNutFree"
                  for="tnutbox"
                  v-if="OPT__TreeNutFree"
                  class="clickable strk-thru"
                >Tree Nuts</label>
                <label
                  @click="OPT__TreeNutFree = !OPT__TreeNutFree"
                  for="tnutbox"
                  v-if="!OPT__TreeNutFree"
                  class="clickable"
                >Tree Nuts</label>
              </md-checkbox>
            </md-list-item>
			
            </md-list>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content id="cont">
        <div id="recipecards" v-for="rec in recipes" v-bind:key="rec.calories">
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
import { UriBuilder } from "uribuilder";
import RecipeCard from "./components/RecipeCard.vue";

export default {
  data() {
    return {
      OPT__AlcoholFree: false, //
      OPT__PorkFree: false, //
      OPT__BeefFree: false, //
      OPT__ChickenFree: false, //
      OPT__RedMeatFree: false, //
      OPT__CeleryFree: false,
      OPT__crustaceanFree: false,
      OPT__DairyFree: false,
      OPT__EggFree: false,
      OPT__FishFree: false,
      OPT__FodmapFree: false, //
      OPT__GlutenFree: false, //
      OPT__KetoFriendly: false, //
      OPT__kidneyFriendly: false, //
      OPT__Kosher: false, //
      OPT__LowPotassium: false, //
      OPT__LupineFree: false,
      OPT__MustardFree: false,
      OPT__LowFat: false, //
      OPT__NoOilAdded: false,
      OPT__LowSugar: false, //
      OPT__Paleo: false, //
      OPT__PeanutFree: false, //
      OPT__Pecatarian: false, //
      OPT__SesameFree: false, //
      OPT__ShellfishFree: false, //
      OPT__SoyFree: false, //
      OPT__SugarConscious: false, //
      OPT__TreeNutFree: false, //
      OPT__Vegan: false, //
      OPT__Vegetarian: false, //
      OPT__WheatFree: false, //
      OPT__Balanced: false, //
      OPT__HighFiber: false, //
      OPT__HighProtein: false, //
      OPT__LowCarb: false, //
      OPT__LowFat: false, //
      OPT__LowSodium: false, //

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
          var param = "";
          if (this.OPT__AlcoholFree) param += `&health=alcohol-free`;
          if (this.OPT__PorkFree) param += `&excluded=pork`;
          if (this.OPT__BeefFree) param += `&excluded=beef`;
          if (this.OPT__ChickenFree) param += `&excluded=chicken`;
          if (this.OPT__CeleryFree) param += `&health=celery-free`;
          if (this.OPT__crustaceanFree) param += `&health=crustacean-free`;
          if (this.OPT__DairyFree) param += `&health=dairy-free`;
          if (this.OPT__EggFree) param += `&health=egg-free`;
          if (this.OPT__FishFree) param += `&health=fish-free`;
          if (this.OPT__FodmapFree) param += `&health=fodmap-free`;
          if (this.OPT__GlutenFree) param += `&health=gluten-free`;
          if (this.OPT__KetoFriendly) param += `&health=keto-friendly`;
          if (this.OPT__kidneyFriendly) param += `&health=kidney-friendly`;
          if (this.OPT__Kosher) param += `&health=kosher`;
          if (this.OPT__LowPotassium) param += `&health=low-potassium`;
          if (this.OPT__LupineFree) param += `&health=lupine-free`;
          if (this.OPT__MustardFree) param += `&health=mustard-free`;
          if (this.OPT__LowFat) param += `&health=low-fat`;
          if (this.OPT__NoOilAdded) param += `&health=no-oil-added`;
          if (this.OPT__LowSugar) param += `&health=low-sugar`;
          if (this.OPT__Paleo) param += `&health=paleo`;
          if (this.OPT__PeanutFree) param += `&health=peanut-free`;
          if (this.OPT__Pecatarian) param += `&health=pecatarian`;
          if (this.OPT__PorkFree) param += `&health=pork-free`;
          if (this.OPT__RedMeatFree) param += `&health=red-meat-free`;
          if (this.OPT__SesameFree) param += `&health=sesame-free`;
          if (this.OPT__ShellfishFree) param += `&health=shellfish-free`;
          if (this.OPT__SoyFree) param += `&health=soy-free`;
          if (this.OPT__SugarConscious) param += `&health=sugar-conscious`;
          if (this.OPT__TreeNutFree) param += `&health=tree-nut-free`;
          if (this.OPT__Vegan) param += `&health=vegan`;
          if (this.OPT__Vegetarian) param += `&health=vegetarian`;
          if (this.OPT__WheatFree) param += `&health=wheat-free`;
          if (this.OPT__Balanced) param += `&health=balanced`;
          if (this.OPT__HighFiber) param += `&health=high-fiber`;
          if (this.OPT__HighProtein) param += `&health=high-protein`;
          if (this.OPT__LowCarb) param += `&health=low-carb`;
          if (this.OPT__LowFat) param += `&health=low-fat-abs`;
          if (this.OPT__LowSodium) param += `&health=low-sodium`;
          //this.query = this.query.replace(/\s+/g, '');
          var url = `http://localhost:8080/recipes/?search=${String(
            this.query
          )}${String(param)}`;

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
.bold {
  font-weight: bold;
}

.strk-thru {
  text-decoration: line-through;
}

.clickable {
  cursor: pointer;
}

.hamburger-submenu {
  margin-left: 25px !important;
}

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
