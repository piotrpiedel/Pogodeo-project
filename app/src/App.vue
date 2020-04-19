<template>
  <div id="main-container">
    <AppHeader />
    <NavigationBar />
    <FindLocation />
    <router-view/>
    <SiteFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
import FindLocation from "./components/FindLocation.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    FindLocation,
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
  height: 100%;
  color: #bfc1c8;
  background: #083c46;
}
</style>
