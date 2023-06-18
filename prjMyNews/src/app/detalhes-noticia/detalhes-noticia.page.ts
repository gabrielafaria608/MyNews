import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../services/noticia/noticia.service';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-noticia',
  templateUrl: './detalhes-noticia.page.html',
  styleUrls: ['./detalhes-noticia.page.scss'],
})
export class DetalhesNoticiaPage implements OnInit {
  noticia: any = undefined

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly service: NoticiaService
  ) {
    this.buscar(this.activeRoute.snapshot.params['id'])

    console.log(this.activeRoute)
  }

  ngOnInit() {
  }

  buscar(id: string) {
    this.service.buscarUmaNoticia(id).subscribe({
      next: (noticia: any) => {
        this.noticia = noticia

        console.log(this.noticia)
      }
    })
  }

}
