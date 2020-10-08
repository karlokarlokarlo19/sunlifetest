import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loggedIn = 'Mina, Karlo F.'
  constructor(
    private navCtrl: NavController
  ) { }

  navigateExpanded(): void {
    this.navCtrl.navigateRoot('expanded-dashboard');
  }

  navigatePolicies(): void {
    this.navCtrl.navigateRoot('policies');
  }
}
