import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajarPasajeroPageRoutingModule } from './viajar-pasajero-routing.module';

import { ViajarPasajeroPage } from './viajar-pasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajarPasajeroPageRoutingModule
  ],
  declarations: [ViajarPasajeroPage]
})
export class ViajarPasajeroPageModule {}
