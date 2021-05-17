import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingModalPage } from './rating-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RatingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingModalPageRoutingModule {}
