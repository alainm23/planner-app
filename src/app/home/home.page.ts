import { Component } from '@angular/core';

// Services
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (public modalController: ModalController, private navController: NavController) {}

  go_project () {
    this.navController.navigateForward (['project']);
  }
}
