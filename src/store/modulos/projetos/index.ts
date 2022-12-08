import http from "@/http";
import IProjeto from "@/interfaces/IProjeto";
import { Estado } from "@/store";
import { OBTER_PROJETOS, CADASTRAR_PROJETOS, ALTERAR_PROJETOS, REMOVER_PROJETOS } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, DEFINIR_PROJETO } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface estadoProjeto {
    projetos: IProjeto[]
}

export const projeto: Module<estadoProjeto, Estado> = {
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [DEFINIR_PROJETO](state, projetos: IProjeto[]) {
            state.projetos = projetos
        },
    },
    actions: {
        [OBTER_PROJETOS]({ commit }) {
            http.get('projetos').then(resposta => commit(DEFINIR_PROJETO, resposta.data))
        },
        [CADASTRAR_PROJETOS] (contexto, nomeDoProjeto: string){
           return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETOS] (contexto, projeto: IProjeto){
            return http.put(`/projetos/${projeto.id}`, projeto)
         },
         [REMOVER_PROJETOS] ({commit}, id: string){
            return http.delete(`/projetos/${id}`)
            .then(() => commit(EXCLUIR_PROJETO, id))
         },
    }
}
export default projeto