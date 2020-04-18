<template>
  <div class="navigation-bar">
    <div class="container">
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="index.html">Aktualna pogoda</a>
          </li>
          <li class="list-inline-item">
            <a href="news.html">Pogoda długoterminowa</a>
          </li>
          <li class="list-inline-item">
            <a href="live-cameras.html">Pogoda szczegółowa</a>
          </li>
          <li class="list-inline-item">
            <a href="photos.html">Mapa okolicznych burz</a>
          </li>
          <li class="list-inline-item">
            <a href="contact.html">Informacje o stronie</a>
          </li>
        </ul>
      </div>
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
.navigation-bar {
  max-width: 90%;
  color: #bfc1c8;
}

.navigation-bar .container {
  max-width: 90%;
}

.navigation-bar .list-inline {
  list-style: none;
  display: inline-block;
  padding-top: 20px;
}

.navigation-bar .list-inline .list-inline-item {
  float: left;
  margin-left: 10px;
}
.navigation-bar .list-inline .list-inline-item a {
  padding: 5px 25px;
  color: #bfc1c8;
  font-size: x-large;
  border: 2px solid transparent;
  border-radius: 30px;
  font-weight: 400;
}
.navigation-bar .list-inline .list-inline-item:hover a {
  border-color: #009ad8;
  color: #bfc1c8;
}
</style>
