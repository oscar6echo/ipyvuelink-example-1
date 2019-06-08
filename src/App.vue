<template>
  <v-app id="my-app">
    <v-container fluid class="debug-border">
      <v-layout flex row ma-1 :style="style.total" class="debug-border">
        <v-flex :style="style.input">
          <v-text-field
            v-model="extend[0]"
            class="mr-2"
            hide-details
            single-line
            type="number"
            :step="config.step"
          ></v-text-field>
        </v-flex>

        <v-flex>
          <v-range-slider
            v-model="extend"
            :max="config.max"
            :min="config.min"
            :step="config.step"
          ></v-range-slider>
        </v-flex>

        <v-flex :style="style.input">
          <v-text-field
            v-model="extend[1]"
            class="ml-2"
            hide-details
            single-line
            type="number"
            :step="config.step"
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-divider />

      <!-- remove debug v-card before build -->
      <v-card>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h4 class="title mb-0">Debug Area</h4>
              <h4 class="ma-1">Remove before build</h4>
              <div>
                extend:
                {{ extend }}
              </div>
              <div>
                exposed:
                {{ exposed }}
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      // inputs
      config: { max: 500, min: 100, step: 5 },
      width_total: 400,
      width_input: 70,
      //local
      extend: [],
      // exposed
      exposed: {}
      // technical
      //   dataModel: null,
      //   dataAvailable: false
    };
  },
  computed: {
    style() {
      return {
        total: `width: ${this.width_total}px`,
        local: `width: ${this.width_input}px`
      };
    }
  },
  watch: {
    extend: {
      handler: function() {
        console.log(this.extend);
        this.exposed = {
          min: this.extend[0],
          max: this.extend[1]
        };
      },
      deep: true
    },
    exposed: function() {
      console.log(this.exposed);
      //   this.dataModel.set('exposed', this.exposed);
      //   this.dataModel.save_changes();
      //   this.dataModel.touch();
    }
  },
  created() {
    const shift = (this.config.max - this.config.min) / 4;

    this.extend = [this.config.min + shift, this.config.max - shift];
  },
  mounted() {
    // document.querySelector("#app").removeAttribute("style");
    // requestWidget("data1").then(widgetView => {
    //   const model = widgetView.model;
    //   this.dataModel = model;
    //   this.price = model.get("price");
    //   model.on("change:price", () => (this.price = model.get("price")));
    //   this.dataAvailable = true;
    // });
  }
};
</script>

<style scoped>
#my-app {
}
/* remove before build */
.debug-border {
  border: 1px solid red;
}

/* override vuetify defaults in the context of standalone ipywidgets */
/* scoped css */
.container {
  padding: 0px;
}
</style>

<style>
/* override vuetify defaults in the context of standalone ipywidgets */
/* global css */
.application--wrap {
  flex: 0;
  min-height: 0;
}
</style>
