import { Component } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent {

  imageList?: any[] = [
    '/assets/images/asec1.jpg',
    '/assets/images/asec2.jpg',
    '/assets/images/asec3.jpg',
    '/assets/images/asec4.jpg',
    '/assets/images/asec5.jpg',
    '/assets/images/asec6.jpg',
    '/assets/images/asec7.jpg',
    '/assets/images/asec8.jpg',
    '/assets/images/asec9.jpg',
    '/assets/images/asec10.jpg',
    '/assets/images/asec11.jpg',
    '/assets/images/asec12.jpg',

  ];
  constructor(){

  }
}
