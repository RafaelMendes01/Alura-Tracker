<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || "tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>
<script lang="ts">
import Itarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import Box from "./box.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box,
  },
  props: {
    tarefa: {
      type: Object as PropType<Itarefa>,
      required: true,
    },
  },
});
</script>