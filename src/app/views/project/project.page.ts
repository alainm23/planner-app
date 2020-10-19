import { Component, OnInit } from '@angular/core';

// Services
import { ModalController, NavController } from '@ionic/angular';

// Modals
import { TaskViewPage } from '../../modals/task-view/task-view.page';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  constructor (public modalController: ModalController, private navController: NavController) {}

  ngOnInit () {
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
