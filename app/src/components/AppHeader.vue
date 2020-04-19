<template>
  <div class="app-header">
    <div class="container">
      <h1>Pogodeo</h1>
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
  padding: 25px;
  align-self: center;
}
</style>
