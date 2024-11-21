import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarVPage } from './buscar-v.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarVPageRoutingModule {}
