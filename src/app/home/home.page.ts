import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RatingModalPage } from '../rating-modal/rating-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataReturned: any;
  rate =3.74;
  constructor( public modalController: ModalController) {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: RatingModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  }
