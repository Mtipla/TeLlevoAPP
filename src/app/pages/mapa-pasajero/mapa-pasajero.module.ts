import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPasajeroPageRoutingModule } from './mapa-pasajero-routing.module';

import { MapaPasajeroPage } from './mapa-pasajero.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MapaPasajeroPageRoutingModule
  ],
  declarations: [MapaPasajeroPage]
})
export class MapaPasajeroPageModule {}
