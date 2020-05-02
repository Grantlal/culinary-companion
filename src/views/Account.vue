<template>
  <div class="page-container" id="app">
    <div style="height: 100%">
      <img :src="$auth.user.picture" />
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
      <h1>{{ $auth.user.id }}</h1>
    </div>

    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

export default {
  methods: {
    getSavedFilters: async function() {
      var url = "https://cc-myaccount.azurewebsites.net/api/accounts/" + $auth.use.id;
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

            var json = [];
            for (var index in response) {
              json.push(response[index]);
            }
            console.log(json);
          });
        })
        .on("error", err => {
          console.log("Error: " + err.message);
        });
    }
  }
};
</script>

<style>
</style>