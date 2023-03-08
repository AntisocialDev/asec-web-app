import { Component } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent {

  imageList = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipODftwX7OBN3e4HL7RNEOAaX3a6_-PVByEB2ANV=s0',
    }
  ];
  constructor(){

  }
}
