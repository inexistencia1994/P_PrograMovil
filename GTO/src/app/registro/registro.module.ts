import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 43090112c078c96f4dad8a63625826732bf2a630
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule  // Asegúrate de agregarlo aquí
=======
    ReactiveFormsModule
>>>>>>> 43090112c078c96f4dad8a63625826732bf2a630
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
