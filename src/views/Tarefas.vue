<template>
  <MeuFormulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia"> vocẽ não está muito produtivo hoje :( </Box>
  </div>
</template>

<script lang="ts">
import MeuFormulario from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import Itarefa from "../interfaces/ITarefa";
import Box from "../components/box.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    MeuFormulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as Itarefa[],
    };
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: Itarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>