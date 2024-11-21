import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajarPasajeroPage } from './viajar-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: ViajarPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajarPasajeroPageRoutingModule {}
