import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia/noticia.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.page.html',
  styleUrls: ['./cadastrar-noticia.page.scss'],
})
export class CadastrarNoticiaPage implements OnInit {
    logo: string = '/assets/icon/logo.svg'
    noticia: Noticia

  constructor(
    private readonly service: NoticiaService,
    private readonly alert: AlertController,
    private readonly router: Router
  ) { 
    this.noticia = this.gerarNovaNoticia()
  }

  ngOnInit() {
  }

  gerarNovaNoticia(): Noticia {
    return {titulo: '', subtitulo: '', autor: '', data: '', destaque: '',resumo: '', texto: '', imagens: [{url:""}]}
  }


  async cadastrar() {
    console.log(this.noticia)
    this.service.cadastrarNoticia(this.noticia).subscribe({
      next: async (dados: any) => {
        console.log(dados)

        let alertMessage = await this.alert.create({
          message: dados.message,
          backdropDismiss: false,
          header: 'Cadastro de noticia',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.noticia = this.gerarNovaNoticia()
              }
            }
          ],
        });
    
        await alertMessage.present();
      },
      error: async (error: any) => {
        let errors = `<ul>`

        error.error.message.forEach((message: string) => errors += `<li>${message}</li>`)

        errors += `</ul>`

        console.log(errors)
        let alertMessage = await this.alert.create({
          message: errors,
          backdropDismiss: false,
          header: 'Erro ao cadastrar noticia',
          buttons: ['OK'],
        })

        await alertMessage.present()
      },
    })
  }

  adicionarFoto() {
    this.noticia.imagens.push({url:""})
  }
  irParaHome() {
    this.router.navigate(['/home'])
  }
}
