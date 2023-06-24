import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, isArray, MinLength, ValidateNested, Min } from "class-validator"
import { ImagemNoticiaDto } from "./noticias-imagem.dto"
import { Type } from "class-transformer"

export class NoticiasCadastroDto {
    @IsString({message: "O campo titulo deve ser do tipo string"})
    @IsNotEmpty({message: "O campo titulo não pode ser vazio"})
    @MinLength(3, {message: "O titulo data deve ter no mínimo 5 dígitos"})
    titulo: string

    @IsString({message: "O campo subtitulo deve ser do tipo string"})
    @IsNotEmpty({message: "O campo subtitulo não pode ser vazio"})
    @MinLength(5, {message: "O subtitulo data deve ter no mínimo 5 dígitos"})
    subtitulo: string

    @IsString({message: "O campo autor deve ser do tipo string"})
    @IsNotEmpty({message: "O campo autor não pode ser vazio"})
    @MinLength(3, {message: "O campo autor deve ter no mínimo 3 dígitos"})
    autor: string

    @IsString({message: "O campo data deve ser do tipo string"})
    @IsNotEmpty({message: "O campo data não pode ser vazio"})
    @MinLength(10, {message: "O campo data deve ter no mínimo 10 dígitos"})
    data: string

    @Min(1, { message: 'Cadastre no mínimo 1 foto'})
    @Type(() => ImagemNoticiaDto)
    imagens: ImagemNoticiaDto[]

    @IsString({message: "O campo destaque deve ser do tipo string"})
    @IsNotEmpty({message: "O campo destaque não pode ser vazio"})
    @MinLength(10, {message: "O destaque data deve ter no mínimo 10 dígitos"})
    destaque: string

    @IsString({message: "O campo resumo deve ser do tipo string"})
    @IsNotEmpty({message: "O campo resumo não pode ser vazio"})
    @MinLength(20, {message: "O campo resumo deve ter no mínimo 20 dígitos"})
    resumo: string

    @IsString({message: "O campo texto deve ser do tipo string"})
    @IsNotEmpty({message: "O campo texto não pode ser vazio"})
    @MinLength(100, {message: "O campo texto deve ter no mínimo 100 dígitos"})
    texto: string

}