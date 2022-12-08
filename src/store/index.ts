import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { ADICIONA_TAREFA,  ALTERA_TAREFA,  DEFINIR_TAREFAS, NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import {ALTERAR_TAREFAS,  CADASTRAR_TAREFAS,  OBTER_TAREFAS, } from "./tipo-acoes";
import http from "@/http"
import ITarefa from "@/interfaces/ITarefa";
import { estadoProjeto, projeto } from "./modulos/projetos";

export interface Estado {
    notificacoes: INotificacao[],
    tarefas: ITarefa[]
    projeto: estadoProjeto
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        notificacoes: [],
        tarefas: [],
        projeto: {
            projetos: []
        }
    },
    mutations: {
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },
        [ADICIONA_TAREFA](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },
        [ALTERA_TAREFA](state, tarefa: ITarefa) {
            const index = state.tarefas.findIndex(t => t.id == tarefa.id)
            state.tarefas[index] = tarefa
        },
        [NOTIFICAR](state, novaNotificacao: INotificacao) {

            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    },
    actions: {
         [OBTER_TAREFAS] ({ commit }, filtro: string){
            let url = "tarefas"

            if(filtro){
                url += "?descricao=" + filtro
            }

            http.get(url).then(resposta => commit(DEFINIR_TAREFAS, resposta.data))
         },
         [CADASTRAR_TAREFAS] ({ commit }, tarefa: ITarefa){
            return http.post('/tarefas', tarefa)
            .then(resposta => commit(ADICIONA_TAREFA, resposta.data))
         },
         [ALTERAR_TAREFAS] ({ commit }, tarefa: ITarefa){
            return http.put(`/tarefas/${tarefa.id}`, tarefa)
            .then(() => commit(ALTERA_TAREFA, tarefa))
         },
    },
    modules: {
        projeto
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}