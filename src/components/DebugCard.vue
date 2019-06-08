<template>
  <div>
    <v-layout id="my-slider" class="ma-2" row>
      <v-flex shrink style="width: 100px">
        <v-text-field
          v-model="price[0]"
          class="mr-2"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-range-slider
          style="max-width: 500px"
          v-model="price"
          :max="600"
          :min="20"
          :step="10"
        ></v-range-slider>
      </v-flex>

      <v-flex shrink style="width: 100px">
        <v-text-field
          v-model="price[1]"
          class="ml-2"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn color="primary" dark>Min {{ price[0] }}</v-btn>
    <v-btn color="warning" dark>Max {{ price[1] }}</v-btn>
  </div>
</template>

<script>
// import requestWidget from "ipyVue";

export default {
  name: 'Example',
  props: {},
  data() {
    return {
      slider: 45,
      volume: 10,
      price: [110, 440],
      dataModel: null,
      dataAvailable: false
    };
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
  },
  watch: {
    // price(v) {
    //   this.dataModel.set("price", v);
    //   this.dataModel.save_changes();
    //   this.dataModel.touch();
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#my-slider {
  width: 500px;
}
</style>
