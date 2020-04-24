<template>
  <div class="navigation-bar">
    <div class="container">
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item">
            <router-link to="/">Aktualna pogoda</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/fivedays">Pogoda długoterminowa</router-link>
          </li>
          <li class="list-inline-item">
            <router-link to="/detailed">Pogoda szczegółowa</router-link>
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
    max-width: 100%;
}

.navigation-bar .list-inline .list-inline-item {
  display: inline-block;
  margin-left: 10px;

}

.navigation-bar .list-inline .list-inline-item a {
  font-size: x-large;
  border-radius: 30px;
  font-weight: 400;
  text-decoration: none;
  transition: background-color 0.6s ease;
  transition: color 0.6s ease;
  color: white;
  padding-bottom: 3px;
  padding-left: 8px;
  padding-right: 8px;
}

.navigation-bar .list-inline .list-inline-item:hover a {
  background-color: white;
  color: #920cb3;
}
</style>
