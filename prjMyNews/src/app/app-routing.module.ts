import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalhes-noticia/:id',
    loadChildren: () => import('./detalhes-noticia/detalhes-noticia.module').then( m => m.DetalhesNoticiaPageModule)
  },
  {
    path: 'cadastrar-noticia',
    loadChildren: () => import('./cadastrar-noticia/cadastrar-noticia.module').then( m => m.CadastrarNoticiaPageModule)
  },
  {
    path: 'editar-noticia',
    loadChildren: () => import('./editar-noticia/editar-noticia.module').then( m => m.EditarNoticiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
