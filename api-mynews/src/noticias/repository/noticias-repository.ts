import { Injectable } from "@nestjs/common";
import { NoticiasEntity } from "../entity/noticias-entity";

@Injectable()
export class NoticiasRepository{
    private readonly _noticias: NoticiasEntity[] = []

    async createNoticia(noticia: NoticiasEntity){
        this._noticias.push(noticia);
        return{
            message: 'Noticia cadastrada com sucesso',
            data:noticia,
        };
    }

    async listNoticias(){
        return this._noticias
    }

    async findByID(id:string){
        const noticia: NoticiasEntity = this._noticias.find(
            (a: NoticiasEntity) => a.id === id,
        );
        return noticia;
    }

    private _getIndex(id:string){
        const index: number = this._noticias.findIndex(
            (a: NoticiasEntity) => a.id === id,
          );
      
          return index;
    }

    async update(id: string, noticia: NoticiasEntity) {
        let index = this._getIndex(id);
    
        if (index < 0) {
          return {
            message: 'Aluno(a) não encontrado(a)',
          };
        }
    
        noticia.id = id;
    
        this._noticias[index] = noticia;
    
        return {
          message: 'Noticia atualizada com sucesso',
          data: this._noticias[index],
        };
      }

    async removeNoticia(id:string){
        const endereco = this._noticias.findIndex(
            (a: NoticiasEntity) => a.id === id,
        );
        this._noticias.splice(endereco,1)
        return {message:`Noticia com o id ${id} removida com sucesso`}
    }

    
}