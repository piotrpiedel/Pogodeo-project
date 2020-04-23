<template>
  <div id="main-container">
    <AppHeader />
    <NavigationBar />
    <router-view/>
    <SiteFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NavigationBar,
    SiteFooter
  }
};
</script>

<style>
#main-container {
  align-content: center;
  text-align: center;
  margin: 0px;
  min-height: 100%;
  color: #3a3a44;
  background-color: #4158D0;
  background-image: linear-gradient(160deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}
</style>
