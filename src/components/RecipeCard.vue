<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img
          :src="this.image"
          alt="People"
        />
      </md-card-media>

      <md-card-header>
        <div class="md-title" style="overflow: hidden; height: 30px;">{{this.title}}</div>
        <div class="md-subhead">{{this.dietLabels}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button v-if="fav" v-model="favorite" @click="favorite">
              <md-icon>star_border</md-icon>
            </md-button>
            <md-button v-if="!fav" v-model="favorite" @click="favorite">
              <md-icon>star</md-icon>
            </md-button>
            <md-button>View</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content> 
          <md-card-content style="height:150px; overflow-y: auto; overflow-x: hidden;">
            <div v-for="x in this.instructions">{{x}}</div></md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "CardExpansion",
  props: ["title", "dietLabels", "healthLabels", "instructions", "image"],
  data() {
    return {
      fav: true
    };
  },
  methods: {
    favorite() {
      this.fav = !this.fav;
    }
  }
};
</script>

<style scoped>
.card-expansion {
  max-height: auto;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>