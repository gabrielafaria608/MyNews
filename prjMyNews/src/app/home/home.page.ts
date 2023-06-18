import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../services/noticia/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  noticias: any[] = []
  mensagem: string = ""

  constructor(
    private readonly service: NoticiaService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.buscarTodos()
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

  excluir(id: string) {
    this.service.excluirNoticia(id).subscribe({
      next: (resp: any) => {
        this.mensagem = resp.message
      }
    })

    setTimeout(
      () => {
        this.noticias = []
        this.buscarTodos()
        this.mensagem = ""
      }, 1500
    )
  }

  irParaDetalhes(id: string) {
    this.router.navigate(['/detalhes-noticia', {id}])
  }
}
