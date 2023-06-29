import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../services/noticia/noticia.service';
import { ViewDidEnter } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-detalhes-noticia',
  templateUrl: './detalhes-noticia.page.html',
  styleUrls: ['./detalhes-noticia.page.scss'],
})
export class DetalhesNoticiaPage implements OnInit {
  noticia: any
  mensagem: string = ''
  logo: string = '/assets/icon/logo.svg'
  noticias: any[] = []



  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly service: NoticiaService,
    private readonly router: Router,
    private readonly alert: AlertController

  ) {}

  ngOnInit() {
    this.buscar(this.activeRoute.snapshot.params['id'])
  }

  buscar(id: string) {
    this.service.buscarUmaNoticia(id).subscribe({
      next: (noticia: any) => {
        this.noticia = noticia

        console.log(this.noticia)
      }
    })
  }


  buscarTodos() {
    this.service.buscarTodos().subscribe({
      next: (dados: any) => {
        this.noticias = dados
        console.log({
          noticias: this.noticias
        })
      }
    })
  }

  irParaHome() {
    this.router.navigate(['/home'])
  }

  irParaEditarNoticia(id: string) {
    this.router.navigate(['/editar-noticia',{id}])
  }

  async excluir() {
    let confirm = await this.alert.create({
      header: 'Atenção',
      message: `Tem certeza que deseja excluir a noticia ${this.noticia.titulo}?`,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.service.excluirNoticia(this.noticia.id).subscribe({
              next: async (dados: any) => {

                confirm.dismiss()

                let message = await this.alert.create({
                  header: 'Mensagem',
                  message: dados.message
                })

                await message.present()
              },
              error: async (error: any) => {
                confirm.dismiss()

                let message = await this.alert.create({
                  header: 'Mensagem',
                  message: error.error.message
                })

                await message.present()
                
              }
            })
          }
        },
        {
          text: 'Não',
          handler: () => { }
        }
      ]
    })
    await confirm.present()
  }
}
