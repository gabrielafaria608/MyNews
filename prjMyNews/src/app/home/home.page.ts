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
  filtro: string = ""

  constructor(
    private readonly service: NoticiaService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.buscarTodos()
  }

  filtrar() {
    if (this.filtro.length === 0) {
      this.buscarTodos()
      return 
    }

    if (this.noticias.length > 1) {
      let noticia = this.noticias.find((a: any) => a.titulo === this.filtro)

      if (noticia !== undefined){
        this.mensagem = ''
        this.noticias = []
        this.noticias.push(noticia)
      } else if (this.filtro.length > 10) {
        this.mensagem = 'Noticia não encontrada'
      }
    }
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

  irParaDetalhes(id: string) {
    this.router.navigate(['/detalhes-noticia', `${id}`])
  }

  irParaCadastrarNoticia() {
    this.router.navigate(['/cadastrar-noticia'])
  }
}
