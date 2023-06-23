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

  

  irParaDetalhes(id: string) {
    this.router.navigate(['/detalhes-noticia', `${id}`])
  }

  irParaCadastrarNoticia() {
    this.router.navigate(['/cadastrar-noticia'])
  }
}
