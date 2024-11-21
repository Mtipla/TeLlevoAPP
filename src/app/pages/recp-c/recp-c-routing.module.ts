import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecpCPage } from './recp-c.page';

const routes: Routes = [
  {
    path: '',
    component: RecpCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecpCPageRoutingModule {}
