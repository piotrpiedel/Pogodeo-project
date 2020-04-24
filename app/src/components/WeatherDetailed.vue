<template>
  <div id="pages-container">
    <h3 class="title">Pogoda dla {{weatherData.name}}</h3>
    <div class="basic">
      <img v-bind:src="'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'" />
      <p class="temperature">{{weatherData.main.temp.toFixed(0)}}&#8451;</p>
      <p>{{weatherData.weather[0].description}}</p>
      <p></p>
    </div>
    <div class="basic">
      <p><b>Jakość powietrza:</b><br>PM10: {{airData.PM10}} µg/m3</p>
      <div class="very-good" v-if="airData.PM10 <= 20"><p>Stan powietrza:<br>Bardzo Dobry</p></div>
      <div class="good" v-else-if="airData.PM10 > 20 && airData.PM10 <= 50"><p>Stan powietrza:<br>Dobry</p></div>
      <div class="medium" v-else-if="airData.PM10 > 50 && airData.PM10 <= 80"><p>Stan powietrza:<br>Umiarkowany</p></div>
      <div class="mediocre" v-else-if="airData.PM10 > 80 && airData.PM10 <= 110">Stan powietrza:<br>Dostateczny</div>
      <div class="bad" v-else-if="airData.PM10 > 110 && airData.PM10 <= 150">Stan powietrza:<br>Zły</div>
      <div class="very-bad" v-else-if="airData.PM10 > 150">Stan powietrza:<br>Bardzo Zły</div>
    </div>
    <div class="details">
      <p>Temperatura minimalna: {{weatherData.main.temp_min.toFixed(0)}}&#8451;</p>
      <p>Temperatura maksymalna: {{weatherData.main.temp_max.toFixed(0)}}&#8451;</p>
      <p>Temperatura odczuwalna: {{weatherData.main.feels_like.toFixed(0)}}&#8451;</p>
      <p>Ciśnienie: {{weatherData.main.pressure}} hPa</p>
      <p>Wilgotność: {{weatherData.main.humidity}}%</p>
      <p>Wiatr: {{weatherData.wind.speed}} km/h</p>
    </div>
    <div class="details">
      <p>Współrzędne GPS: {{weatherData.coord.lon}}, {{weatherData.coord.lat}}</p>
    </div>
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
      weatherData: null,
      airData: {
        PM10: null,
      },
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

        navigator.geolocation.getCurrentPosition((position => {
          axios
              .get("https://api.waqi.info/feed/geo:" +
                  + position.coords.latitude + ";" + +
                  + position.coords.longitude + "/?token=cc55ead1478fa527512c51119185c65b98144654"
              )
              .then(response => (this.airData.PM10 = response.data.data.iaqi.pm10.v))
        }))

      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #pages-container {
    padding-bottom: 10vh;
    padding-top: 10vh;
    font-size: 25px;
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, .6);
    border-radius: 50px;
    margin-bottom: 50px;
  }

  .title {
    width: 100%;
  }

  .details {
    width: 60%;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1.5px solid rgb(158, 158, 158);
    font-size: 18px;
  }

  .basic {
    width: 300px;
  }

  .basic img {
    height: 120px;
  }

  .temperature {
    font-size: 50px;
    font-weight: 600;
    margin-top: -10px;
  }

  .very-good {
    background-image: linear-gradient( 135deg, rgb(169, 241, 0) 10%, #3CD500 100%);
    border-radius: 60px;
  }

  .good {
    background-image: linear-gradient( 135deg, #FFF720 10%, #3CD500 100%);
    border-radius: 60px;
  }

  .medium {
    background-image: linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%);
    border-radius: 60px;
  }

  .mediocre {
    background-image: linear-gradient( 135deg, #FCCF31 10%, rgb(245, 149, 85) 100%);;
    border-radius: 60px;
  }

  .bad {
    background-image: linear-gradient( 135deg, rgb(253, 116, 25) 10%, rgb(232, 5, 5) 100%);
    border-radius: 60px;
  }

  .very-bad {
    background-image: linear-gradient( 135deg, rgb(226, 35, 25) 10%, #40091a 100%);
    color: white;
    border-radius: 60px;
  }

</style>
