<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <MeuFormulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import BarraLateral from '@/components/BarraLateral.vue';
import MeuFormulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import Itarefa from './interfaces/ITarefa';
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    MeuFormulario,
    Tarefa
  },
  data () {
    return {
      tarefas: [] as Itarefa[]
    }
  },
  methods: {
    salvarTarefa (tarefa: Itarefa){
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
</style>
