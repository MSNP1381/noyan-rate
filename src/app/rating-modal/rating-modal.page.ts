import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  NavParams
} from '@ionic/angular';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.page.html',
  styleUrls: ['./rating-modal.page.scss'],
})
export class RatingModalPage implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
