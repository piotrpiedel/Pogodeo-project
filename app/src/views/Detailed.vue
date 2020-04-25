<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <WeatherDetailed />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherDetailed from '@/components/WeatherDetailed.vue'

export default {
  name: 'Detailed',
  components: {
    WeatherDetailed
  }
}
</script>
