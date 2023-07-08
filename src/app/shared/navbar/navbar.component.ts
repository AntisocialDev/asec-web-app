import { Component,Input,Output,EventEmitter,OnChanges, HostListener, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent implements OnChanges {

  navbarFixed: boolean = false;
  menuOpen: boolean = false;

  @Output() menuOpenEmmiter: EventEmitter<boolean> = new EventEmitter(); 
  @Input() navClicked: any = false;
  navLinks = [ 
    {
      title: 'HOME',
      link: '/main/home',
    },
    {
      title: 'ABOUT US',
      link: '/main/about-us',
    },
    {
      title: 'GALLERY',
      link: '/main/galleries',
      
    },
    {
      title: 'HOTELS',
      link: '/main/hotels',
    },
    {
      title: 'CONTACT',
      link: '/main/contact',
    },
    {
      title: 'PARKING',
      link: '/main/parking',
    },
  ]

  constructor(){
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if(window.scrollY > 40){
      this.navbarFixed = true;
    }else{
      this.navbarFixed = false;
    }
  }

  

  onNavClick(){
   if(this.menuOpen){
    this.menuOpen = false;
    this.menuOpenEmmiter.emit(this.menuOpen);
   }else{
    this.menuOpen = true
    this.menuOpenEmmiter.emit(this.menuOpen);
   }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.menuOpen = this.navClicked;
  }
  
}
