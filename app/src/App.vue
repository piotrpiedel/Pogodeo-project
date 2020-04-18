<template>
  <div id="main-container">
    <AppHeader />
    <NavigationBar />
    <FindLocation />
    <PogodeoApp />
    <SiteFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
import FindLocation from "./components/FindLocation.vue";
import PogodeoApp from "./components/PogodeoApp.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    FindLocation,
    NavigationBar,
    PogodeoApp,
    SiteFooter
  }
};
</script>

<style>
#main-container {
  align-content: center;
  text-align: center;
  margin: 0px;
  height: 100%;
  color: #bfc1c8;
  background: #083c46;
}
</style>
