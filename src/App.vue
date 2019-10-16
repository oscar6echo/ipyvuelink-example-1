<template>
  <v-app id="my-app">
    <SliderMinMax @update="compData = $event" />

    <!-- remove debug v-card before build -->
    <v-card class="ma-2">
      <v-card-title primary-title>
        <div>
          <h4 class="title mb-0">Debug Area</h4>
          <h4 class="ma-1">outside component to expose</h4>
          <div>
            config:
            {{ compData.config }}
            <br />
            width:
            {{ compData.width }}
            <br />
            extrema:
            {{ compData.extrema }}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
import SliderMinMax from './components/slider-min-max';

export default {
  name: 'App',
  components: {
    SliderMinMax
  },

  data() {
    return {
      compData: {
        config: {},
        width: {},
        extrema: {}
      }
    };
  }
};
</script>

<style scoped>
#my-app {
  background-color: white;
}
</style>
