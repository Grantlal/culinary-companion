<template>
  <div class="andrew-nav md-toolbar">
    <md-button class="md-icon-button" v-on:click.native="emitToggle">
      <md-icon md-light>menu</md-icon>
    </md-button>

    <md-menu
      class="bc-trans"
      style="margin-left: 10px;"
      md-size="medium"
      md-align-trigger
    >
      <md-button md-menu-trigger>Recipe</md-button>
      <md-menu-content>
        <md-menu-item class="bc-white">Advanced Search</md-menu-item>
        <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'"
          >Browse</md-menu-item
        >
        <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu class="bc-trans" md-size="medium" md-align-trigger>
      <router-link :to="{ name: 'technique', params: { id: 'search' } }">
        <md-button>Techniques</md-button>
      </router-link>
    </md-menu>

    <md-menu class="bc-trans" md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>Favorites</md-button>
      <md-menu-content>
        <md-menu-item class="bc-white">Advanced Search</md-menu-item>
        <md-menu-item class="bc-white" v-on:click.native="data = 'asdf'"
          >Browse</md-menu-item
        >
        <md-menu-item class="bc-white">Surprise Me!</md-menu-item>
      </md-menu-content>
    </md-menu>

    <div style="margin-left: auto; min-width: 300px; max-width:500px;">
      <md-field style="min-width: 300px; max-width:500px;">
        <label>Search Recipes</label>
        <md-input
          v-on:keydown.enter="emitRecipe"
          @focus="$event.target.select()"
          v-model="searchString"
        ></md-input>
      </md-field>
    </div>

    <md-button
      class="md-raised"
      style="margin-right: 40px;"
      v-on:click.native="emitRecipe"
      >SEARCH</md-button
    >

    <md-menu class="bc-trans" md-size="medium" md-align-trigger>
      <md-button class="md-icon-button" style="width: 100%;" md-menu-trigger>
        <md-icon>person</md-icon>
      </md-button>
      <md-menu-content v-if="!$auth.loading">
        <router-link v-if="$auth.isAuthenticated" to="/account">
          <md-menu-item class="bc-white">Account Settings</md-menu-item>
        </router-link>
        <!-- show login when not authenticated -->
        <md-menu-item
          class="bc-white"
          v-if="!$auth.isAuthenticated"
          @click="login"
          >Log in</md-menu-item
        >
        <!-- show logout when authenticated -->
        <md-menu-item
          class="bc-white"
          v-if="$auth.isAuthenticated"
          @click="logout"
          >Log out</md-menu-item
        >
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

export default {
  props: {
    menuVisible: Boolean,
  },
  methods: {
    emitToggle(event) {
      this.visible = !this.menuVisible;
      this.$emit("toggleDrawer", this.visible);
    },
    emitRecipe() {
      console.log("Search String: " + this.searchString);
      this.$emit("recipeString", this.searchString);
    },
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
  data: () => ({
    visible: false,
    searchString: "",
  }),
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
</style>
