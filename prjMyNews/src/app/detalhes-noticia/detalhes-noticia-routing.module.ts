import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesNoticiaPage } from './detalhes-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesNoticiaPageRoutingModule {}
