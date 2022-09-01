import IProjeto from "./IProjeto";

export default interface Itarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}