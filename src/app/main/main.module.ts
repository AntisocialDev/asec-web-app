import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactComponent } from './contact/contact.component';
import { GalleriesComponent } from './galleries/galleries.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HotelsComponent,
    ContactComponent,
    GalleriesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
