import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarVPageRoutingModule } from './buscar-v-routing.module';

import { BuscarVPage } from './buscar-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarVPageRoutingModule
  ],
  declarations: [BuscarVPage]
})
export class BuscarVPageModule {}
