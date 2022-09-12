export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface Inotificacao {
    titulo: string
    texto: string
    tipo: TipoNotificacao
    id: number
}