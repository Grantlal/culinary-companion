<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>

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
  </div>
</template>

<script>
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
      OPT__LowSodium: false, //
    };
  }
};
</script>

<style>
</style>