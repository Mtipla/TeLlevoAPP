import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProVPage } from './pro-v.page';

const routes: Routes = [
  {
    path: '',
    component: ProVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProVPageRoutingModule {}
