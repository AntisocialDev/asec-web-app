import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactComponent } from './contact/contact.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ParkingComponent } from './parking/parking.component';
import { BookEventComponent } from './book-event/book-event.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HotelsComponent,
    ContactComponent,
    GalleriesComponent,
    AboutUsComponent,
    ParkingComponent,
    BookEventComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
