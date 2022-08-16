<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <MeuFormulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia"> vocẽ não está muito produtivo hoje :( </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import BarraLateral from "@/components/BarraLateral.vue";
import MeuFormulario from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import Itarefa from "./interfaces/ITarefa";
import Box from "./components/box.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    MeuFormulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as Itarefa[],
      modoEscuroAtivo: false
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
    trocarTema(modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #dddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
