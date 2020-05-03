<template>
  <div style="height: 100%;">
    <md-card :md-elevation="10" id="card">
      <div class="user">
        <!--
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
      <h1>{{ $auth.user.id }}</h1>
        -->

        <img src="@/auth/an.png" />
        <h1>Andrew Nekowitsch</h1>
        <md-divider></md-divider>
        <p>email: anekowitsch@gmail.com</p>
        <p>user id: kalsjhdfkljasdfhklasdjhfalks</p>

        <md-divider></md-divider>
        <h2>Saved Filters</h2>
        <div>
          <md-chip class="md-elevation-1" md-deletable>Filter 1</md-chip>
          <md-chip class="md-elevation-1" md-deletable>Filter 2</md-chip>
          <md-chip class="md-elevation-1" md-deletable>Filter 3</md-chip>
          <md-chip class="md-elevation-1" md-deletable>Filter 4</md-chip>
        </div>
        <br />
        <br />
        <md-button class="md-raised" v-on:click="getSavedFilters()">Load Filters</md-button>
        <md-divider></md-divider>
      </div>
    </md-card>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
const https = require("https");
const axios = require("axios");

export default {
  data: () => ({
    filters: []
  }),
  methods: {
    getSavedFilters: async function() {
      var url =
        //"https://cc-myaccount.azurewebsites.net/api/accounts/" + $auth.user.id;
        "https://cc-myaccount.azurewebsites.net/api/accounts/" + "8";
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
            console.log(response);

            var json = [];
            for (var index in response) {
              json.push(response[index]);
            }
            console.log("json");
            console.log(json);

            if (json[0] == "404") {
              const data = JSON.stringify({
                id: "8",
                filters: "asdf,asdf,asdf"
              });
              axios
                .post("https://cc-myaccount.azurewebsites.net/api/accounts/", {
                  id: "8",
                  filters: "asdf,asdf,asdf,asdf"
                })
                .then(function(response) {
                  console.log(response);
                });
            }
          });
        })
        .on("error", err => {
          console.log("Error: " + err.message);
          console.log("user not in db??");
        });
    }
  }
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