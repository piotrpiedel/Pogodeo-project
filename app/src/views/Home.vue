<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <WeatherBasic />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherBasic from '@/components/WeatherBasic.vue'

export default {
  name: 'Home',
  components: {
    WeatherBasic
  }
}
</script>
