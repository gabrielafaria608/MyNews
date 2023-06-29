import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from '../services/noticia/noticia.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Imagem{
  url: string
}
interface Noticia{
    titulo: string
    subtitulo: string
    autor: string
    data: string
    imagens: Imagem[]
    destaque: string
    resumo: string
    texto: string
}

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.page.html',
  styleUrls: ['./editar-noticia.page.scss'],
})
export class EditarNoticiaPage implements OnInit {
  logo: string = '/assets/icon/logo.svg'
  id: string
  noticia: Noticia
  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly service: NoticiaService,
    private readonly router: Router,
    private readonly alert: AlertController
  ) {
    this.noticia = {} as Noticia
    this.id = ""

    if(this.activeRoute.snapshot.params['id'] !== undefined){
      this.buscar()
    }
    else{
      this.irParaHome()
    }
   }

  ngOnInit() {
  }

  buscar() {
    this.id = this.activeRoute.snapshot.params['id']
    this.service.buscarUmaNoticia(this.id).subscribe({
      next: (dados: any) => {
        console.log(this.noticia)

        this.noticia = {
          titulo: dados.titulo,
          subtitulo: dados.subtitulo,
          autor: dados.autor,
          data: dados.data,
          imagens: dados.imagens,
          destaque: dados.destaque,
          resumo: dados.resumo,
          texto: dados.texto
        } as Noticia
      }
    })
  }

  atualizar(){
    this.service.atualizarNoticia(this.id, this.noticia).subscribe({
      next:async (dados:any) => {
      console.log(dados)
      let alertMessage = await this.alert.create({
        message: dados.message,
        backdropDismiss: false,
        header: 'Atualização da noticia',
        buttons:[
          {
            text: 'OK',
            handler: () => {
              this.noticia = {} as Noticia
              this.noticia.imagens = [{url: ''}]
            }
          }
        ]
      })
      await alertMessage.present()
      },
      error: async (error: any) =>{
        let errors = `<ul>`

          error.error.message.forEach((message: string) => errors += `<li>${message}</li>`)

          errors += `</ul>`

          console.log(errors)
          let alertMessage = await this.alert.create({
            message: errors,
            backdropDismiss: false,
            header: 'Erro ao atualizar aluno',
            buttons: ['OK'],
          })

          await alertMessage.present()
      },
    })
  }

  cancelar(){
    this.noticia = {} as Noticia

    this.irParaHome()
  }

  irParaHome() {
    this.router.navigate(['/home'])
  }
  
  adicionarFoto() {
    this.noticia.imagens.push({url:""})
  }
}
