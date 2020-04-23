<template>
  <div class="app-header">
    <div class="container">
      <img class="logo" src="@/assets/images/pogodeo_logo.png"/>
    </div>
  </div>

  <!-- .site-header -->
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-header {
  padding-top: 25px;
  align-self: center;
}

.logo {
  max-width: 80%;
  max-height: 75px;
}
</style>
