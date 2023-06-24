import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../services/noticia/noticia.service';
import { ViewDidEnter } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalhes-noticia',
  templateUrl: './detalhes-noticia.page.html',
  styleUrls: ['./detalhes-noticia.page.scss'],
})
export class DetalhesNoticiaPage implements OnInit {
  noticia: any
  mensagem: string = ''

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly service: NoticiaService,
    private readonly router: Router
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


  excluir(id: string) {
    this.service.excluirNoticia(id).subscribe({
      next: (resp: any) => {
        this.mensagem = resp.message
      }
    })
    setTimeout(
      () => {
        this.irParaHome()
      }, 1500
    )
  }
  irParaHome() {
    this.router.navigate(['/home'])
  }
}
