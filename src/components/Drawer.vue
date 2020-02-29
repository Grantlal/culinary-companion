<template>
  <md-app>
    <md-app-toolbar>
      <NavBar :menuVisible="this.menuVisible"/>
    </md-app-toolbar>

    <md-app-drawer v-show="menuVisible" :md-active.sync="menuVisible">
      <filters />
    </md-app-drawer>
  </md-app>
</template>

<script>
import Filters from "./Filters.vue";
import NavBar from "./NavBar.vue";
export default {
  components: {
    Filters,
    NavBar
  },
  data: () => ({
    menuVisible: false
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
</style>
