<template>
  <div class="page-container" id="app">
	<div style="height: 100%">
      <img :src="$auth.user.picture">
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

}
</script>

<style>

</style>