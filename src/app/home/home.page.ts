import { Component } from '@angular/core';

// Services
import { ModalController } from '@ionic/angular';

// Modals
import { TaskViewPage } from '../modals/task-view/task-view.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor (public modalController: ModalController) {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async open_task (entry: any) {
    console.log (entry);
    const modal = await this.modalController.create({
      component: TaskViewPage,
      cssClass: 'taskview-modal'
    });

    return await modal.present();
  }
}
