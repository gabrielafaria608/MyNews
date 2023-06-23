import { IsUrl } from "class-validator"

export class ImagemNoticiaDto{
    @IsUrl(null, { message: 'A foto deve ser uma URL válida' })
    url: string
}