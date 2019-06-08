<template>
  <v-app id="my-app">
    <v-container fluid class="debug-border">
      <v-layout flex row ma-1 :style="style.total" class="debug-border">
        <div :style="style.input">
          <v-text-field
            v-model="extent[0]"
            class="mr-2 my-dense"
            hide-details
            single-line
            type="number"
            :step="config.step"
          ></v-text-field>
        </div>

        <v-range-slider
          class="my-dense"
          v-model="extent"
          :max="config.max"
          :min="config.min"
          :step="config.step"
        ></v-range-slider>

        <div :style="style.input">
          <v-text-field
            v-model="extent[1]"
            class="ml-2 my-dense"
            hide-details
            single-line
            type="number"
            :step="config.step"
          ></v-text-field>
        </div>
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
                extent:
                {{ extent }}
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
      width: { total: 400, input: 70 },
      //local
      extent: [],
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
        total: `width: ${this.width.total}px`,
        input: `width: ${this.width.input}px`
      };
    }
  },
  watch: {
    extent: {
      handler: function() {
        console.log(this.extent);
        this.exposed = {
          min: this.extent[0],
          max: this.extent[1]
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

    this.extent = [this.config.min + shift, this.config.max - shift];
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
/* remove before build */
.debug-border {
  border: 1px solid red;
}

/* override vuetify defaults in the context of standalone ipywidgets */
/* scoped css */
.container {
  padding: 0px;
}
.my-dense {
  margin: 0px;
  padding: 0px;
}
.v-input--range-slider >>> .v-messages {
  /* background-color: red; */
  display: none;
}
.v-text-field >>> {
  font-size: 18px;
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
