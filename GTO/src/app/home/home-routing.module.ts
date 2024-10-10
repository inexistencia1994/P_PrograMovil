import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> 43090112c078c96f4dad8a63625826732bf2a630
})
export class HomePageRoutingModule {}
