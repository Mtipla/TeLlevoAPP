import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecpCPageRoutingModule } from './recp-c-routing.module';

import { RecpCPage } from './recp-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecpCPageRoutingModule
  ],
  declarations: [RecpCPage]
})
export class RecpCPageModule {}
