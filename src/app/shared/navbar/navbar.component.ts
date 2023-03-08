import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent {

  navbarFixed: boolean = false;
  activeLink: string = '';

  navLinks = [ 
    {
      title: 'HOME',
      link: '/main/home',
      active: false,
    },
    {
      title: 'ABOUT US',
      link: '/main/about-us',
      active: false,
    },
    {
      title: 'GALLERIES',
      link: '/main/galleries',
      active: false,
    },
    {
      title: 'HOTELS',
      link: '/main/hotels',
      active: false,
    },
    {
      title: 'CONTACT',
      link: '/main/contact',
      active: false,
    },
    {
      title: 'PARKING',
      link: '/main/parking',
      active: false,
    },
  ]

  

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if(window.scrollY > 40){
      this.navbarFixed = true;
    }else{
      this.navbarFixed = false;
    }
  }
  
}
