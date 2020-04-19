<template>
  <div class="navigation-bar">
    <div class="container">
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link to="/">Aktualna pogoda</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/about">Pogoda długoterminowa</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/about">Pogoda szczegółowa</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/storm">Mapa okolicznych burz</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/about">Informacje o stronie</router-link>
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
  align-content: center;
  display: flex;
  text-align: left;
  max-width: 90%;
  color: #bfc1c8;
}

.navigation-bar .container {
  max-width: 90%;
}

.navigation-bar .list-inline {
  list-style: none;
  display: inline-block;
  padding: 20px;
}

.navigation-bar .list-inline .list-inline-item {
  display: inline-block;
  margin-left: 10px;
}

.navigation-bar .list-inline .list-inline-item a {
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
