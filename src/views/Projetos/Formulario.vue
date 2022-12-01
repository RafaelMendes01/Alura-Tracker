<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang='ts'>
import { TipoNotificacao } from "@/interfaces/Notificacao";
import { useStore } from "@/store";
import { ALTERA_PROJETO, ADICIONA_PROJETO, NOTIFICAR } from "@/store/tipo-mutacoes";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.store.commit(NOTIFICAR, {
        titulo: 'novo projeto foi salvo',
        texto: 'Prontinho ;) seu projeto já esta disponivel',
        tipo: TipoNotificacao.SUCESSO
      })
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>