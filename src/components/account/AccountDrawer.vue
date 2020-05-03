<template>
  <md-app>
    <md-app-toolbar>
      <NavBar
        v-bind:menuVisible="this.visible"
        v-on:toggleDrawer="toggleMenu"
      />
    </md-app-toolbar>

    <md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
      <Filters
        v-on:cuisinesEmitted="getCuisines"
        v-on:dietsEmitted="getDiets"
        v-on:intolerancesEmitted="getIntolerances"
      />
    </md-app-drawer>
    <md-app-content id="cont">
		<AccountInfo />
    </md-app-content>
  </md-app>
</template>

<script>
import Filters from "@/components/Filters.vue";
import NavBar from "@/components/account/AccountNavbar.vue";
import AccountInfo from "@/components/account/AccountInfo.vue";

export default {
  components: {
	Filters,
	NavBar,
	AccountInfo
  },
  methods: {
    toggleMenu(value) {
      this.visible = value;
    },
    getCuisines(value) {
      this.cuisines = value;
      //console.log("Cuisines: " + value);
    },
    getDiets(value) {
      this.diets = value;
      //console.log("Diets: " + value);
    },
    getIntolerances(value) {
      this.intolerances = value;
      //console.log("Intolerances: " + value);
    }
  },
  data: () => ({
    visible: false,
    intolerances: "",
    cuisines: "",
    diets: ""
  })
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
