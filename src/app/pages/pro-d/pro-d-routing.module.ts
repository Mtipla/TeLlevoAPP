import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProDPage } from './pro-d.page';

const routes: Routes = [
  {
    path: '',
    component: ProDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProDPageRoutingModule {}
