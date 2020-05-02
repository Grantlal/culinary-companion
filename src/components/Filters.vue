<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>

    <md-list class="bc-trans">
      <md-list-item md-expand>
        <span id="firstHamburger" class="md-list-item-text">Cuisines</span>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item v-for="cuisine in Cuisines" :key="cuisine.text">
            <md-checkbox v-bind:id="cuisine.id" v-model="cuisine.active">
              <label
                class="clickable"
                v-if="cuisine.active == false"
                v-bind:for="cuisine.id"
                @click="
                  cuisine.active = !cuisine.active;
                  getRecipeParams();
                "
                >{{ cuisine.text }}</label
              >
              <label
                class="clickable"
                v-if="cuisine.active == true"
                v-bind:for="cuisine.id"
                @click="
                  cuisine.active = !cuisine.active;
                  getRecipeParams();
                "
                >{{ cuisine.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <span id="secondHamburger" class="md-list-item-text">Diets</span>
        <md-list slot="md-expand" class="bc-trans hamburger-submenu">
          <md-list-item v-for="diet in Diets" :key="diet.text">
            <md-checkbox v-bind:id="diet.id" v-model="diet.active">
              <label
                class="clickable"
                v-if="diet.active == false"
                v-bind:for="diet.id"
                @click="
                  diet.active = !diet.active;
                  getRecipeParams();
                "
                >{{ diet.text }}</label
              >
              <label
                class="clickable"
                v-if="diet.active == true"
                v-bind:for="diet.id"
                @click="
                  diet.active = !diet.active;
                  getRecipeParams();
                "
                >{{ diet.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <span id="thirdHamburger" class="md-list-item-text">Intolerances</span>
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
                @click="
                  intolerance.active = !intolerance.active;
                  getRecipeParams();
                "
                >{{ intolerance.text }}</label
              >
              <label
                class="clickable"
                v-if="intolerance.active == true"
                v-bind:for="intolerance.id"
                @click="
                  intolerance.active = !intolerance.active;
                  getRecipeParams();
                "
                >{{ intolerance.text }}</label
              >
            </md-checkbox>
          </md-list-item>
        </md-list>
      </md-list-item>
<!--
      <md-list-item>
        <button v-on:click="getSavedFilters()">Save Filters</button>
      </md-list-item>
	  -->
    </md-list>
  </div>
</template>

<script>
export default {
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
    getRecipeParams: async function(event) {
      var cString = "";
      var dString = "";
      var iString = "";

      //for loop to collect all active filters
      this.Cuisines.forEach((x) => {
        if (x.active === true) {
          cString += x.text.toString() + ",";
        }
      });
      this.Diets.forEach((x) => {
        if (x.active === true) {
          dString += x.text.toString() + ",";
        }
      });
      this.Intolerances.forEach((x) => {
        if (x.active === true) {
          iString += x.text.toString() + ",";
        }
      });

      if (cString.substring(cString.length - 1, cString.length) == ",") {
        cString = cString.substring(0, cString.length - 1);
      }
      if (dString.substring(dString.length - 1, dString.length) == ",") {
        dString = dString.substring(0, dString.length - 1);
      }
      if (iString.substring(iString.length - 1, iString.length) == ",") {
        iString = iString.substring(0, iString.length - 1);
      }
      console.clear();
      this.$emit("cuisinesEmitted", cString);
      this.$emit("dietsEmitted", dString);
      this.$emit("intolerancesEmitted", iString);
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
  },
};
</script>

<style></style>
