<template>
  <footer class="site-footer">
    <div class="container">
      <p class="colophon">Copyright 2019 Pogodeo. Designed by Pogodeo.inc. All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
