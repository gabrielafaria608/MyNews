import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NoticiasRepository } from './repository/noticias-repository';
import { NoticiasCadastroDto } from './dto/noticias-cadastro.dto';
import { NoticiasEntity} from './entity/noticias-entity';
import { v4 as uuid } from 'uuid';


@Controller('noticias')
export class NoticiasController {
    constructor(
        private readonly _repository: NoticiasRepository
    ){}

    @Post()
    createNoticia(@Body() noticia: NoticiasCadastroDto){
        let noticiaEntity = new NoticiasEntity()


        noticiaEntity.id = uuid()
        noticiaEntity.titulo = noticia.titulo
        noticiaEntity.subtitulo = noticia.subtitulo
        noticiaEntity.autor = noticia.autor
        noticiaEntity.data = noticia.data
        noticiaEntity.imagens = noticia.imagens
        noticiaEntity.destaque = noticia.destaque
        noticiaEntity.resumo = noticia.resumo
        noticiaEntity.texto = noticia.texto

        this._repository.createNoticia(noticiaEntity)

        return{
            mensagem: 'Cadastro de noticias',
            data: noticiaEntity
        }

    }


    @Get()
    getNoticias(){
        return this._repository.listNoticias()
    }

    @Get(':id')
    getNoticia(@Param() param: any){
        return this._repository.findByID(param.id)        
    }

    @Delete(':id')
    removeNoticia(@Param() param: any){
        return this._repository.removeNoticia(param.id)
    }
}
