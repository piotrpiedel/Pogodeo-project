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
  background-color: #FF3CAC;
  background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
}
</style>
