import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarVPageRoutingModule } from './cancelar-v-routing.module';

import { CancelarVPage } from './cancelar-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarVPageRoutingModule
  ],
  declarations: [CancelarVPage]
})
export class CancelarVPageModule {}
