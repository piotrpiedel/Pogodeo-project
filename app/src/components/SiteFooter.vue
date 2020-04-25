<template>
  <footer class="site-footer">
    <p>Copyright 2019 Pogodeo. Designed by Pogodeo.inc. All rights reserved</p>
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
  clear: both;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
}
</style>
