import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingModalPageRoutingModule } from './rating-modal-routing.module';

import { RatingModalPage } from './rating-modal.page';
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RatingModalPageRoutingModule,
        NgbRatingModule
    ],
  declarations: [RatingModalPage]
})
export class RatingModalPageModule {}

export class MyModalPageModule {
}
