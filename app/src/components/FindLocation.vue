<template>
  <div class="location">
    <div class="container">
      <div class="row">
        <form action="#" class="find-location col-sm-4">
          <input type="text" placeholder="Find your location..." />
          <input type="submit" value="Find" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindLocation",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
