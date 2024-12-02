import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProDPageRoutingModule } from './pro-d-routing.module';

import { ProDPage } from './pro-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProDPageRoutingModule
  ],
  declarations: [ProDPage]
})
export class ProDPageModule {}
