<template>
  <div class="container">
    <h3 class="lead">Radar burz</h3>
    <iframe
      id="stormMap"
      src="https://www.rainviewer.com/map.html?loc=52.2159,19.1344,5&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=1&rmt=3&c=0&o=83&lm=0&th=0&sm=1&sn=1"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "StormMap",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lead {
  color: white;
}
#stormMap {
  min-width: 60%;
  height: 60vh;
}
</style>
