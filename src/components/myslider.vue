<template>
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
  </v-container>
</template>

<script>
export default {
  name: 'MySlider',
  props: {
    exposed: Object
  },

  data() {
    return {
      config: { max: 500, min: 100, step: 5 },
      width: { total: 400, input: 70 },
      extent: []
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
      handler: function(v) {
        const obj = { min: v[0], max: v[1] };
        console.log('up', obj);
        this.$emit('exposed', obj);
        this.updateParent();
      },
      deep: true
    },
    exposed: function(v) {
      console.log('down', v);
      this.extent = [v.min, v.max];
    }
  },
  created() {
    const shift = (this.config.max - this.config.min) / 4;
    this.extent = [
      (this.exposed && this.exposed.min) || this.config.min + shift,
      (this.exposed && this.exposed.max) || this.config.max - shift
    ];
    this.updateParent();
  },
  methods: {
    updateParent() {
      const exposed = { min: v[0], max: v[1] };
      const data = {
        config: this.config,
        width: this.width,
        exposed: exposed
      };
      this.$emit('update', data);
    }
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
