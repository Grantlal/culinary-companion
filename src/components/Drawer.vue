<template>
	<md-app>
		<md-app-toolbar>
			<NavBar v-bind:menuVisible="this.visible" v-on:toggleDrawer="toggleMenu" v-on:recipeString="getRecipe" />
		</md-app-toolbar>

		<md-app-drawer v-on:toggleDrawer="toggleMenu" :md-active.sync="visible">
			<filters v-bind:param="this.parameters" v-on:paramEmitted="getParams" />
		</md-app-drawer>
		<md-app-content id="cont">
			<div id="recipecards" v-for="rec in recipeJSON" v-bind:key="rec.calories">
				<RecipeCard2
					class="recipes"
					:title="rec.recipe.label"
					:dietLabels="rec.dietlabels"
					:instructions="rec.ingredientLines"
					:image="rec.recipe.image"
				/>
			</div>
		</md-app-content>
	</md-app>
</template>

<script>
import Filters from './Filters.vue';
import NavBar from './NavBar.vue';
import RecipeCard2 from './RecipeCard2.vue';
export default {
	components: {
		RecipeCard2,
		Filters,
		NavBar,
	},
	methods: {
		toggleMenu(value) {
			this.visible = value;
		},
		getParams(value) {
			this.parameters = value;
			console.log('params: ' + value);
		},
		getRecipe: async function(value) {
			console.log('getRecipe()');
			this.query = value;
			//bounce off of api
			var url = `https://culinary-companion-api.herokuapp.com/recipes/?search=${String(
				//var url = `http://localhost:8080/recipes/?search=${String(
				this.query
			)}${String(this.parameters)}`;
			url.replace(`%20`, '');
			var response = await fetch(url).then(resp => resp.json());
			this.recipeJSON = [];
			for (var index in response) {
				this.recipeJSON.push(response[index]);
			}
			console.log('Recipes:');
			console.log(this.recipeJSON);
		},
	},
	data: () => ({
		visible: false,
		parameters: '',
		query: '',
		recipeJSON: [],
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
.page-container {
	display: flex;
	flex-direction: column;
}
.md-drawer.md-theme-default {
	background-color: #F5F5F5;
}
</style>
