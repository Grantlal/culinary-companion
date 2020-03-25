<template>
  <div class="page-container">
    <h2>Recipes:</h2>
    <div id="recipecards" v-for="rec in recipes" v-bind:key="rec.calories">
      <RecipeCard
        class="recipes"
        :title="rec.recipe.label"
        :dietLabels="rec.dietlabels"
        :instructions="rec.ingredientLines"
        :image="rec.recipe.image"
      ></RecipeCard>
    </div>
    <div id="balls"></div>
    <div id="overlay">
      <div id="overlay_white" class="overlay bc-white">
        <div id="overlay_exit" @click="toggleOverlay" class="overlay">X</div>
        <div>
          <h1 id="overlay_title" class="overlay">This is a Title</h1>
          <br />
          <br />
          <br />
          <div id="youtube">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2 id="overlay_instructions"></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
export default {
  components: {
    RecipeCard
  },
  methods: {
    toggleOverlay() {
      this.overlay_on = !this.overlay_on;
      if (this.overlay_on) {
        document.getElementById("overlay").style.display = "block";
      } else {
        document.getElementById("overlay").style.display = "none";
      }
      console.log(this.overlay_on);
    }
  },
  data: () => ({
      recipes: [],
  })
};
</script>

<style>
#youtube {
  height: 500px;
}


#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
.overlay {
  z-index: 3;
}

#overlay_white {
  width: 50%;
  height: 80%;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, 10%); /* IE 9 */
  -webkit-transform: translate(-50%, 10%); /* Safari prior 9.0 */
  transform: translate(-50%, 10%); /* Standard syntax */
}
#overlay_exit {
  position: absolute;
  right: 10px;
  top: 10px;
}
#overlay_title {
  position: absolute;
  left: 30px;
  overflow: hidden;
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
table {
  width: 100%;
  table-layout: fixed;
}
table th {
  text-align: left;
}

</style>