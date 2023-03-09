import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavesPageRoutingModule } from './saves-routing.module';

import { SavesPage } from './saves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavesPageRoutingModule
  ],
  declarations: [SavesPage]
})
export class SavesPageModule {}
