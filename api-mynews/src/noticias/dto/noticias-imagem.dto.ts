import { IsUrl } from "class-validator"

export class ImagemNoticiaDto{
    @IsUrl({protocols:["http","https"]}, { message: 'A foto deve ser uma URL válida' })
    url: string
}