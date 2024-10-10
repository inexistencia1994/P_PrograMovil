import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

=======
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
>>>>>>> 43090112c078c96f4dad8a63625826732bf2a630
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
