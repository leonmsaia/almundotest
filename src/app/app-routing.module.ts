import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelComponent } from './hotel/hotel.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'hotel', component: HotelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
