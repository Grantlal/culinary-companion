<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0" style="border-bottom: 1px solid black;">Filters</md-toolbar>

    <md-list class="bc-trans">
      <md-list-item md-expand>
        <span class="md-list-item-text">Diets</span>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item>
            <md-checkbox id="alcoholFreebox" v-model="OPT__AlcoholFree">
              <label
                @click="
									OPT__AlcoholFree = !OPT__AlcoholFree;
									getRecipeParams();
								"
                for="alcoholFreebox"
                v-if="OPT__AlcoholFree"
                class="clickable bold"
              >Alcohol-Free</label>
              <label
                @click="
									OPT__AlcoholFree = !OPT__AlcoholFree;
									getRecipeParams();
								"
                for="alcoholFreebox"
                v-if="!OPT__AlcoholFree"
                class="clickable"
              >Alcohol-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="balancedbox" v-model="OPT__Balanced">
              <label
                @click="
									OPT__Balanced = !OPT__Balanced;
									getRecipeParams();
								"
                for="balancedbox"
                v-if="OPT__Balanced"
                class="clickable bold"
              >Balanced</label>
              <label
                @click="
									OPT__Balanced = !OPT__Balanced;
									getRecipeParams();
								"
                for="balancedbox"
                v-if="!OPT__Balanced"
                class="clickable"
              >Balanced</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="fodmapbox" v-model="OPT__FodmapFree">
              <label
                @click="
									OPT__FodmapFree = !OPT__FodmapFree;
									getRecipeParams();
								"
                for="fodmapbox"
                v-if="OPT__FodmapFree"
                class="clickable bold"
              >Fodmap</label>
              <label
                @click="
									OPT__FodmapFree = !OPT__FodmapFree;
									getRecipeParams();
								"
                for="fodmapbox"
                v-if="!OPT__FodmapFree"
                class="clickable"
              >Fodmap</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="glutenfreebox" v-model="OPT__GlutenFree">
              <label
                @click="
									OPT__GlutenFree = !OPT__GlutenFree;
									getRecipeParams();
								"
                for="glutenfreebox"
                v-if="OPT__GlutenFree"
                class="clickable bold"
              >Gluten-Free</label>
              <label
                @click="
									OPT__GlutenFree = !OPT__GlutenFree;
									getRecipeParams();
								"
                for="glutenfreebox"
                v-if="!OPT__GlutenFree"
                class="clickable"
              >Gluten-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="highfiberbox" v-model="OPT__HighFiber">
              <label
                @click="
									OPT__HighFiber = !OPT__HighFiber;
									getRecipeParams();
								"
                for="highfiberbox"
                v-if="OPT__HighFiber"
                class="clickable bold"
              >High-Fiber</label>
              <label
                @click="
									OPT__HighFiber = !OPT__HighFiber;
									getRecipeParams();
								"
                for="highfiberbox"
                v-if="!OPT__HighFiber"
                class="clickable"
              >High-Fiber</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="highproteinbox" v-model="OPT__HighProtein">
              <label
                @click="
									OPT__HighProtein = !OPT__HighProtein;
									getRecipeParams();
								"
                for="highproteinbox"
                v-if="OPT__HighProtein"
                class="clickable bold"
              >High-Protein</label>
              <label
                @click="
									OPT__HighProtein = !OPT__HighProtein;
									getRecipeParams();
								"
                for="highproteinbox"
                v-if="!OPT__HighProtein"
                class="clickable"
              >High-Protein</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="ketobox" v-model="OPT__KetoFriendly">
              <label
                @click="
									OPT__KetoFriendly = !OPT__KetoFriendly;
									getRecipeParams();
								"
                for="ketobox"
                v-if="OPT__KetoFriendly"
                class="clickable bold"
              >Keto</label>
              <label
                @click="
									OPT__KetoFriendly = !OPT__KetoFriendly;
									getRecipeParams();
								"
                for="ketobox"
                v-if="!OPT__KetoFriendly"
                class="clickable"
              >Keto</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="kidneybox" v-model="OPT__kidneyFriendly">
              <label
                @click="
									OPT__kidneyFriendly = !OPT__kidneyFriendly;
									getRecipeParams();
								"
                for="kidneybox"
                v-if="OPT__kidneyFriendly"
                class="clickable bold"
              >Kidney Friendly</label>
              <label
                @click="
									OPT__kidneyFriendly = !OPT__kidneyFriendly;
									getRecipeParams();
								"
                for="kidneybox"
                v-if="!OPT__kidneyFriendly"
                class="clickable"
              >Kidney Friendly</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="kosherbox" v-model="OPT__Kosher">
              <label
                @click="
									OPT__Kosher = !OPT__Kosher;
									getRecipeParams();
								"
                for="kosherbox"
                v-if="OPT__Kosher"
                class="clickable bold"
              >Kosher</label>
              <label
                @click="
									OPT__Kosher = !OPT__Kosher;
									getRecipeParams();
								"
                for="kosherbox"
                v-if="!OPT__Kosher"
                class="clickable"
              >Kosher</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="lowfatbox" v-model="OPT__LowFat">
              <label
                @click="
									OPT__LowFat = !OPT__LowFat;
									getRecipeParams();
								"
                for="lowfatbox"
                v-if="OPT__LowFat"
                class="clickable bold"
              >Low-Fat</label>
              <label
                @click="
									OPT__LowFat = !OPT__LowFat;
									getRecipeParams();
								"
                for="lowfatbox"
                v-if="!OPT__LowFat"
                class="clickable"
              >Low-Fat</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="lowcarbbox" v-model="OPT__LowCarb">
              <label
                @click="
									OPT__LowCarb = !OPT__LowCarb;
									getRecipeParams();
								"
                for="lowcarbbox"
                v-if="OPT__LowCarb"
                class="clickable bold"
                F
              >Low-Sugar</label>
              <label
                @click="
									OPT__LowCarb = !OPT__LowCarb;
									getRecipeParams();
								"
                for="lowcarbbox"
                v-if="!OPT__LowCarb"
                class="clickable"
              >Low-Sugar</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="kbox" v-model="OPT__LowPotassium">
              <label
                @click="
									OPT__LowPotassium = !OPT__LowPotassium;
									getRecipeParams();
								"
                for="kbox"
                v-if="OPT__LowPotassium"
                class="clickable bold"
              >Low-Potassium</label>
              <label
                @click="
									OPT__LowPotassium = !OPT__LowPotassium;
									getRecipeParams();
								"
                for="kbox"
                v-if="!OPT__LowPotassium"
                class="clickable"
              >Low-Potassium</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="lowsodiumbox" v-model="OPT__LowSodium">
              <label
                @click="
									OPT__LowSodium = !OPT__LowSodium;
									getRecipeParams();
								"
                for="lowsodiumbox"
                v-if="OPT__LowSodium"
                class="clickable bold"
              >Low-Sodium</label>
              <label
                @click="
									OPT__LowSodium = !OPT__LowSodium;
									getRecipeParams();
								"
                for="lowsodiumbox"
                v-if="!OPT__LowSodium"
                class="clickable"
              >Low-Sodium</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="paleobox" v-model="OPT__Paleo">
              <label
                @click="
									OPT__Paleo = !OPT__Paleo;
									getRecipeParams();
								"
                for="paleobox"
                v-if="OPT__Paleo"
                class="clickable bold"
              >Paleo</label>
              <label
                @click="
									OPT__Paleo = !OPT__Paleo;
									getRecipeParams();
								"
                for="paleobox"
                v-if="!OPT__Paleo"
                class="clickable"
              >Paleo</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="peanutbox" v-model="OPT__PeanutFree">
              <label
                @click="
									OPT__PeanutFree = !OPT__PeanutFree;
									getRecipeParams();
								"
                for="peanutbox"
                v-if="OPT__PeanutFree"
                class="clickable bold"
              >Peanut-Free</label>
              <label
                @click="
									OPT__PeanutFree = !OPT__PeanutFree;
									getRecipeParams();
								"
                for="peanutbox"
                v-if="!OPT__PeanutFree"
                class="clickable"
              >Peanut-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="pecatarianbox" v-model="OPT__Pecatarian">
              <label
                @click="
									OPT__Pecatarian = !OPT__Pecatarian;
									getRecipeParams();
								"
                for="pecatarianbox"
                v-if="OPT__Pecatarian"
                class="clickable bold"
              >Pecatarian</label>
              <label
                @click="
									OPT__Pecatarian = !OPT__Pecatarian;
									getRecipeParams();
								"
                for="pecatarianbox"
                v-if="!OPT__Pecatarian"
                class="clickable"
              >Pecatarian</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="sesamebox" v-model="OPT__SesameFree">
              <label
                @click="
									OPT__SesameFree = !OPT__SesameFree;
									getRecipeParams();
								"
                for="sesamebox"
                v-if="OPT__SesameFree"
                class="clickable bold"
              >Sesame-Free</label>
              <label
                @click="
									OPT__SesameFree = !OPT__SesameFree;
									getRecipeParams();
								"
                for="sesamebox"
                v-if="!OPT__SesameFree"
                class="clickable"
              >Sesame-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="shellfishbox" v-model="OPT__ShellfishFree">
              <label
                @click="
									OPT__ShellfishFree = !OPT__ShellfishFree;
									getRecipeParams();
								"
                for="shellfishbox"
                v-if="OPT__ShellfishFree"
                class="clickable bold"
              >Shellfish-Free</label>
              <label
                @click="
									OPT__ShellfishFree = !OPT__ShellfishFree;
									getRecipeParams();
								"
                for="shellfishbox"
                v-if="!OPT__ShellfishFree"
                class="clickable"
              >Shellfish-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="Soybox" v-model="OPT__SoyFree">
              <label
                @click="
									OPT__SoyFree = !OPT__SoyFree;
									getRecipeParams();
								"
                for="Soybox"
                v-if="OPT__Pecatarian"
                class="clickable bold"
              >Soy-Free</label>
              <label
                @click="
									OPT__SoyFree = !OPT__SoyFree;
									getRecipeParams();
								"
                for="Soybox"
                v-if="!OPT__SoyFree"
                class="clickable"
              >Soy-Free</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="sugarcbox" v-model="OPT__SugarConscious">
              <label
                @click="
									OPT__SugarConscious = !OPT__SugarConscious;
									getRecipeParams();
								"
                for="sugarcbox"
                v-if="OPT__SugarConscious"
                class="clickable bold"
              >Sugar-Conscious</label>
              <label
                @click="
									OPT__SugarConscious = !OPT__SugarConscious;
									getRecipeParams();
								"
                for="sugarcbox"
                v-if="!OPT__SugarConscious"
                class="clickable"
              >Sugar-Conscious</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="veganbox" v-model="OPT__Vegan">
              <label
                @click="
									OPT__Vegan = !OPT__Vegan;
									getRecipeParams();
								"
                for="veganbox"
                v-if="OPT__Vegan"
                class="clickable bold"
              >Vegan</label>
              <label
                @click="
									OPT__Vegan = !OPT__Vegan;
									getRecipeParams();
								"
                for="veganbox"
                v-if="!OPT__Vegan"
                class="clickable"
              >Vegan</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="vegetabox" v-model="OPT__Vegetarian">
              <label
                @click="
									OPT__Vegetarian = !OPT__Vegetarian;
									getRecipeParams();
								"
                for="vegetabox"
                v-if="OPT__Vegetarian"
                class="clickable bold"
              >Vegetarian</label>
              <label
                @click="
									OPT__Vegetarian = !OPT__Vegetarian;
									getRecipeParams();
								"
                for="vegetabox"
                v-if="!OPT__Vegetarian"
                class="clickable"
              >Vegetarian</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="wheatbox" v-model="OPT__WheatFree">
              <label
                @click="
									OPT__WheatFree = !OPT__WheatFree;
									getRecipeParams();
								"
                for="wheatbox"
                v-if="OPT__WheatFree"
                class="clickable bold"
              >Wheat-Free</label>
              <label
                @click="
									OPT__WheatFree = !OPT__WheatFree;
									getRecipeParams();
								"
                for="wheatbox"
                v-if="!OPT__WheatFree"
                class="clickable"
              >Wheat-Free</label>
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <span class="md-list-item-text">Cuisines</span>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item>
            <md-checkbox id="beefbox" v-model="OPT__BeefFree">
              <label
                @click="
									OPT__BeefFree = !OPT__BeefFree;
									getRecipeParams();
								"
                for="beefbox"
                v-if="OPT__BeefFree"
                class="clickable strk-thru"
              >Beef</label>
              <label
                @click="
									OPT__BeefFree = !OPT__BeefFree;
									getRecipeParams();
								"
                for="beefbox"
                v-if="!OPT__BeefFree"
                class="clickable"
              >Beef</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="chickenbox" v-model="OPT__ChickenFree">
              <label
                @click="
									OPT__ChickenFree = !OPT__ChickenFree;
									getRecipeParams();
								"
                for="chickenbox"
                v-if="OPT__ChickenFree"
                class="clickable strk-thru"
              >Chicken</label>
              <label
                @click="
									OPT__ChickenFree = !OPT__ChickenFree;
									getRecipeParams();
								"
                for="chickenbox"
                v-if="!OPT__ChickenFree"
                class="clickable"
              >Chicken</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="porkbox" v-model="OPT__PorkFree">
              <label
                @click="
									OPT__PorkFree = !OPT__PorkFree;
									getRecipeParams();
								"
                for="porkbox"
                v-if="OPT__PorkFree"
                class="clickable strk-thru"
              >Pork</label>
              <label
                @click="
									OPT__PorkFree = !OPT__PorkFree;
									getRecipeParams();
								"
                for="porkbox"
                v-if="!OPT__PorkFree"
                class="clickable"
              >Pork</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="redmeatbox" v-model="OPT__RedMeatFree">
              <label
                @click="
									OPT__RedMeatFree = !OPT__RedMeatFree;
									getRecipeParams();
								"
                for="redmeatbox"
                v-if="OPT__RedMeatFree"
                class="clickable strk-thru"
              >Red Meats</label>
              <label
                @click="
									OPT__RedMeatFree = !OPT__RedMeatFree;
									getRecipeParams();
								"
                for="redmeatbox"
                v-if="!OPT__RedMeatFree"
                class="clickable"
              >Red Meats</label>
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>
      <md-list-item md-expand>
        <span class="md-list-item-text">Intolerances</span>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item>
            <md-checkbox id="peanutbox" v-model="OPT__PeanutFree">
              <label
                @click="
									OPT__PeanutFree = !OPT__PeanutFree;
									getRecipeParams();
								"
                for="peanutbox"
                v-if="OPT__PeanutFree"
                class="clickable strk-thru"
              >Peanuts</label>
              <label
                @click="
									OPT__PeanutFree = !OPT__PeanutFree;
									getRecipeParams();
								"
                for="peanutbox"
                v-if="!OPT__PeanutFree"
                class="clickable"
              >Peanuts</label>
            </md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox id="tnutbox" v-model="OPT__TreeNutFree">
              <label
                @click="
									OPT__TreeNutFree = !OPT__TreeNutFree;
									getRecipeParams();
								"
                for="tnutbox"
                v-if="OPT__TreeNutFree"
                class="clickable strk-thru"
              >Tree Nuts</label>
              <label
                @click="
									OPT__TreeNutFree = !OPT__TreeNutFree;
									getRecipeParams();
								"
                for="tnutbox"
                v-if="!OPT__TreeNutFree"
                class="clickable"
              >Tree Nuts</label>
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>


	  
      <md-list-item>
        <button v-on:click="getSavedFilters()">test</button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
const https = require("https");
export default {
  data: () => ({
    param: "",
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
    OPT__LowSodium: false //
  }),
  methods: {
    getRecipeParams: async function(event) {
      this.param = "";
      if (this.OPT__AlcoholFree) this.param += `&health=alcohol-free`;
      if (this.OPT__PorkFree) this.param += `&excluded=pork`;
      if (this.OPT__BeefFree) this.param += `&excluded=beef`;
      if (this.OPT__ChickenFree) this.param += `&excluded=chicken`;
      if (this.OPT__CeleryFree) this.param += `&health=celery-free`;
      if (this.OPT__crustaceanFree) this.param += `&health=crustacean-free`;
      if (this.OPT__DairyFree) this.param += `&health=dairy-free`;
      if (this.OPT__EggFree) this.param += `&health=egg-free`;
      if (this.OPT__FishFree) this.param += `&health=fish-free`;
      if (this.OPT__FodmapFree) this.param += `&health=fodmap-free`;
      if (this.OPT__GlutenFree) this.param += `&health=gluten-free`;
      if (this.OPT__KetoFriendly) this.param += `&health=keto-friendly`;
      if (this.OPT__kidneyFriendly) this.param += `&health=kidney-friendly`;
      if (this.OPT__Kosher) this.param += `&health=kosher`;
      if (this.OPT__LowPotassium) this.param += `&health=low-potassium`;
      if (this.OPT__LupineFree) this.param += `&health=lupine-free`;
      if (this.OPT__MustardFree) this.param += `&health=mustard-free`;
      if (this.OPT__LowFat) this.param += `&health=low-fat`;
      if (this.OPT__NoOilAdded) this.param += `&health=no-oil-added`;
      if (this.OPT__LowSugar) this.param += `&health=low-sugar`;
      if (this.OPT__Paleo) this.param += `&health=paleo`;
      if (this.OPT__PeanutFree) this.param += `&health=peanut-free`;
      if (this.OPT__Pecatarian) this.param += `&health=pecatarian`;
      if (this.OPT__PorkFree) this.param += `&health=pork-free`;
      if (this.OPT__RedMeatFree) this.param += `&health=red-meat-free`;
      if (this.OPT__SesameFree) this.param += `&health=sesame-free`;
      if (this.OPT__ShellfishFree) this.param += `&health=shellfish-free`;
      if (this.OPT__SoyFree) this.param += `&health=soy-free`;
      if (this.OPT__SugarConscious) this.param += `&health=sugar-conscious`;
      if (this.OPT__TreeNutFree) this.param += `&health=tree-nut-free`;
      if (this.OPT__Vegan) this.param += `&health=vegan`;
      if (this.OPT__Vegetarian) this.param += `&health=vegetarian`;
      if (this.OPT__WheatFree) this.param += `&health=wheat-free`;
      if (this.OPT__Balanced) this.param += `&health=balanced`;
      if (this.OPT__HighFiber) this.param += `&health=high-fiber`;
      if (this.OPT__HighProtein) this.param += `&health=high-protein`;
      if (this.OPT__LowCarb) this.param += `&health=low-carb`;
      if (this.OPT__LowFat) this.param += `&health=low-fat-abs`;
      if (this.OPT__LowSodium) this.param += `&health=low-sodium`;
      console.log(this.param);
      this.$emit("paramEmitted", this.param);
    },
    getSavedFilters: async function() {
      var url = "https://cc-myaccount.azurewebsites.net/api/accounts/1";
      https
        .get(url, resp => {
          let data = "";

          // A chunk of data has been recieved.
          resp.on("data", chunk => {
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
        .on("error", err => {
          console.log("Error: " + err.message);
        });
    },
    emitParam(event) {
      getRecipeParams();
      console.log(this.param);
      this.$emit("paramEmitted", this.param);
    }
  }
};
</script>

<style>
</style>
