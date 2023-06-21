import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia/noticia.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.page.html',
  styleUrls: ['./cadastrar-noticia.page.scss'],
})
export class CadastrarNoticiaPage implements OnInit {
    titulo: string = ''
    subtitulo: string = ''
    autor: string =  ''
    data: string = ''
    imagens: string[] = []
    destaque: string = ''
    resumo: string = ''
    texto: string = ''
  constructor(
    private readonly service: NoticiaService,
    private readonly alert: AlertController
  ) { }

  ngOnInit() {
  }
  async cadastrar() {
    let noticia = {
      titulo: this.titulo,
      subtitulo: this.subtitulo,
      autor: this.autor,
      data: this.data,
      imagens: [this.imagens],
      destaque: this.destaque,
      resumo: this.resumo,
      texto: this.texto

    }

    this.service.cadastrarNoticia(noticia).subscribe({
      next: async (dados: any) => {
        console.log(dados)

        const mensagem = await this.alert.create({
          header: 'Mensagem',
          message: 'Notícia cadastrada com sucesso!',
          buttons: ['OK'],
        });
    
        await mensagem.present();
      },
      error: async (error: any) => {
        console.error(error)

        let erros = ''

        error.error.message.forEach(
          (erro: any) => erros += erro + '<br>'
        )

        const mensagem = await this.alert.create({
          header: 'Mensagem',
          message: erros,
          buttons: ['OK']
        });
    
        await mensagem.present();
      }
    })
  }
}
