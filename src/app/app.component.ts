import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Services
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private database: DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp () {
    this.platform.ready ().then (() => {
      this.statusBar.styleDefault ();
      this.splashScreen.hide ();

      if (this.platform.is ('android')) {
        this.statusBar.overlaysWebView (false);
        this.statusBar.backgroundColorByHexString ('#000000');
      }
    });
  }
}
