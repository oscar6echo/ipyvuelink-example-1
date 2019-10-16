<template>
  <v-app id="my-app">
    <MySlider @update="compData = $event" />

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
            exposed:
            {{ compData.exposed }}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
import MySlider from './components/myslider';

export default {
  name: 'App',
  components: {
    MySlider
  },

  data() {
    return {
      compData: {
        config: {},
        width: {},
        exposed: {}
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
