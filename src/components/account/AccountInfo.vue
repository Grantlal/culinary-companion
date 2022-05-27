<template>
  <div style="height: 100%;">
    <md-card class="md-elevation-10" id="card">
      <div class="user">
        <!--
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
        <md-divider></md-divider>
      <p>email: {{ $auth.user.email }}</p>
      <h1>user id: {{ $auth.user.id }}</h1>
        -->

        <img src="@/auth/an.png" />
        <h1>Andrew Nekowitsch</h1>
        <md-divider></md-divider>
        <p>email: anekowitsch@gmail.com</p>
        <p>user id: kalsjhdfkljasdfhklasdjhfalks</p>

        <md-divider></md-divider>
        <h2>Saved Filters</h2>
        <div>
          <md-chips v-model="filters" md-static></md-chips>
        </div>
        <br />
        <br />
        <md-button class="md-raised" v-on:click="loadSavedFilters()">Load Filters</md-button>
        <md-button class="md-raised" v-on:click="updateUserFilters()">Save Filters</md-button>
        <md-divider></md-divider>
      </div>
    </md-card>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
const https = require("https");

export default {
  mounted: function() {
    this.getSavedFilters();
  },
  data: () => ({
    filters: []
  }),
  methods: {
    loadSavedFilters: function() {
		// filters go to filters drawer
	},
    getSavedFilters: async function() {
		console.log(Vue.prototype)
      var url =
        //"https://cc-myaccount.azurewebsites.net/api/accounts/" + $auth.user.id;
        "https://cc-myaccount.azurewebsites.net/api/accounts/" + Vue.prototype.$auth.user.sub;
      let json = [];
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

            for (var index in response) {
              json.push(response[index]);
            }

            console.log(json[1]);
            this.filters = json[1];
            if (json[0] == "404") {
              this.createUser();
              this.filters = [];
            }
            console.log("Filters:");
            console.log(this.filters);
          });
        })
        .on("error", err => {
          console.log("Error: " + err.message);
          console.log("user not in db??");
        });
    },
    createUser: async function() {
      console.log("in createUser");
      // var id = this.$auth.user.sub;
      var url =
        //"https://cc-myaccount.azurewebsites.net/api/accounts/" + $auth.user.id;
        "https://cc-myaccount.azurewebsites.net/api/accounts" +
        "?id=" +
        Vue.prototype.$auth.user.sub +
        "&filters=" + this.filtersString;

      let response = await fetch(url, {
        method: "Post"
      });

      let data = await response;
      console.log(data);
      //response2 = JSON.parse(data2);
    },
    updateUserFilters: async function() {
		var json = [];
		// database gets updated
		var url =
        //"https://cc-myaccount.azurewebsites.net/api/accounts/" + $auth.user.id;
        "https://cc-myaccount.azurewebsites.net/api/accounts" +
        "?id=" +
        Vue.prototype.$auth.user.sub +
        "&filters=" + this.filters;

      let response = await fetch(url, {
        method: "Put"
      });

      let data = await response;
      console.log(data);
      //response2 = JSON.parse(data2);
	},
  },
};
</script>

<style>
#card {
  height: 100%;
  width: 80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.user {
  height: 100%;
  padding: 50px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>