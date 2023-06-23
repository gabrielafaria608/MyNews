import { NoticiasImagensEntity } from "./noticias-imagem-entity"

export class NoticiasEntity {
    id: string
    titulo: string
    subtitulo: string
    autor: string
    data: string
    imagens: NoticiasImagensEntity[]
    destaque: string
    resumo: string
    texto: string
}