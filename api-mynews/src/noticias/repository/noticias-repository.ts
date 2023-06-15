import { Injectable } from "@nestjs/common";
import { NoticiasEntity } from "../entity/noticias-entity";

@Injectable()
export class NoticiasRepository{
    private readonly _noticias: NoticiasEntity[] = []

    async createNoticia(noticia: NoticiasEntity){
        this._noticias.push(noticia)
    }

    async listNoticias(){
        return this._noticias
    }

    async findByID(id:string){
        const noticia = this._noticias.find(
            (a: NoticiasEntity) => a.id === id
        )
        return noticia
    }

    async removeNoticia(id:string){
        const endereco = this._noticias.findIndex(
            (a: NoticiasEntity) => a.id === id
        )
        this._noticias.splice(endereco,1)
        return {message:`Noticia com o id ${id} removida com sucesso`}
    }

    
}