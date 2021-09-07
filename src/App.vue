<script setup lang="ts">
import { RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="active">Go to Hello</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/bye" active-class="active">Go to Bye</router-link> 
      </li>
  </ul>
  <div class="my-3">

    <router-view ></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
