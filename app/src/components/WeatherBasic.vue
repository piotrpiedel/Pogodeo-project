<template>
  <div id="pages-container">
    <div class="basic">
      <img v-bind:src="'http://openweathermap.org/img/wn/'+weatherData.weather[0].icon+'@2x.png'" />
      <p class="temperature">{{weatherData.main.temp.toFixed(0)}}&#8451;</p>
      <p>{{weatherData.weather[0].description}}</p>
    </div>
    <div class="basic">
      <p><b>Jakość powietrza:</b><br>PM10: {{airData.PM10}}</p>
      <div class="very-good" v-if="airData.PM10 <= 20"><p>Stan powietrza: Bardzo Dobry</p></div>
      <div class="good" v-else-if="airData.PM10 > 20 && airData.PM10 <= 50"><p>Stan powietrza: Dobry</p></div>
      <div class="medium" v-else-if="airData.PM10 > 50 && airData.PM10 <= 80"><p>Stan powietrza: Umiarkowany</p></div>
      <div class="mediocre" v-else-if="airData.PM10 > 80 && airData.PM10 <= 110">Stan powietrza: Dostateczny</div>
      <div class="bad" v-else-if="airData.PM10 > 110 && airData.PM10 <= 150">Stan powietrza: Zły</div>
      <div class="very-bad" v-else-if="airData.PM10 > 150">Stan powietrza: Bardzo Zły</div>
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

        let i = 0;
        do {
          axios
            .get("https://cors-anywhere.herokuapp.com/" + "http://api.gios.gov.pl/pjp-api/rest/data/getData/92")
            .then(response => (this.airData.PM10 = response.data.values[i].value))
          i++
        } while (this.airData.PM10 != null)

      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #pages-container {
    padding-bottom: 10%;
    padding-top: 10%;
    font-size: 25px;
    width:60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .basic {
    width: 300px;
  }

  .basic img {
    height: 120px;
  }

  .temperature {
    font-size: 50px;
    margin-top: -10px;
  }

  .very-good {
    background-color: green;
    color: black;
    border-radius: 30px;
  }

  .good {
    background-color: greenyellow;
    color: black;
    border-radius: 30px;
  }

  .medium {
    background-color: yellow;
    color: black;
    border-radius: 30px;
  }

  .mediocre {
    background-color: orange;
    color: black;
    border-radius: 30px;
  }

  .bad {
    background-color: orangered;
    color: black;
    border-radius: 30px;
  }

  .very-bad {
    background-color: red;
    color: black;
    border-radius: 30px;
  }

</style>
