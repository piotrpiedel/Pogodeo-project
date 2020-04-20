<template>
  <div id="pages-container">
      <img v-bind:src="'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'" />
      <p>{{weatherData.main.temp.toFixed(0)}}&#8451;</p>
      <p>{{weatherData.weather[0].description}}</p>
      <p>{{weatherData}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: "WeatherBasic",
  props: {
  },
  data () {
    return {
      weatherData: null
    }
  },
  mounted () {
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position => {
            axios
                .get("http://api.openweathermap.org/data/2.5/weather?lat=" +
                    + position.coords.latitude + "&lon=" +
                    + position.coords.longitude + "&lang=pl&units=metric&appid=5ce9c91cdbf3285b727852725527d751"
                )
                .then(response => (this.weatherData = response.data))
          }))
        console.log(this.weatherData.data)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
