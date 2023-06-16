import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesNoticiaPageRoutingModule } from './detalhes-noticia-routing.module';

import { DetalhesNoticiaPage } from './detalhes-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesNoticiaPageRoutingModule
  ],
  declarations: [DetalhesNoticiaPage]
})
export class DetalhesNoticiaPageModule {}
