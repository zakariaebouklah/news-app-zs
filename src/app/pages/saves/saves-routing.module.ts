import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavesPage } from './saves.page';

const routes: Routes = [
  {
    path: '',
    component: SavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavesPageRoutingModule {}
