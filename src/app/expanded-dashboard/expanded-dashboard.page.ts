import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-expanded-dashboard',
  templateUrl: './expanded-dashboard.page.html',
  styleUrls: ['./expanded-dashboard.page.scss'],
})
export class ExpandedDashboardPage implements OnInit {
  loggedIn = 'Mina, Karlo F.'
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigate(): void {
    this.navCtrl.navigateRoot('/home');
  }

}
