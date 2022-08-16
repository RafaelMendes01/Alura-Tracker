<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "box",
  data () {
    return {
      estilos: {
        backgroundColor: '#faf0ca'
      }
    }
  }
});
</script>
