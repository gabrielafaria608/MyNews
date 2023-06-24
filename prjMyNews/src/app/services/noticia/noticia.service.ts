import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private readonly URL = "https://3000-gabssfaria7-3jpamii2023-sp5502ykhb1.ws-us100.gitpod.io/noticias"

  constructor(
    private readonly http: HttpClient
  ) { }

  buscarTodos(): Observable<any> {
    return this.http.get(this.URL)
  }

  buscarUmaNoticia(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`)
  }

  cadastrarNoticia(noticia: any): Observable<any> {
    return this.http.post(this.URL, noticia)
  }

  excluirNoticia(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`)
  }
}
