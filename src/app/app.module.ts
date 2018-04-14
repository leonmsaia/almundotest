// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Enviroment
import {enableProdMode} from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Import Data
import { HttpModule } from '@angular/http';

// Filters
import { HotelFilterPipe } from './hotel/hotel-filter.pipe';

// Pages
import { HotelComponent } from './hotel/hotel.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

// Services
import { HotelsService } from './hotels.service'

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    MainComponent,
    HotelFilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HotelsService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
