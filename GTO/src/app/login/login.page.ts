import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  ingresar() {
    if (this.username && this.password) {
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Por favor, completa todos los campos');
    }
  }
}
