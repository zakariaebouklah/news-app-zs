import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendsPageRoutingModule } from './trends-routing.module';

import { TrendsPage } from './trends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrendsPageRoutingModule
  ],
  declarations: [TrendsPage]
})
export class TrendsPageModule {}
