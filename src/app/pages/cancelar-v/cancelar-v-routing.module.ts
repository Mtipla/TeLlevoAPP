import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelarVPage } from './cancelar-v.page';

const routes: Routes = [
  {
    path: '',
    component: CancelarVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelarVPageRoutingModule {}
