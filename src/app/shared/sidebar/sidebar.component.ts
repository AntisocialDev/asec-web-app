import { Component, Input, Output,EventEmitter, OnInit, HostListener, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  paddingValue = '125px';
  @Input() menuOpen: any;
  @Output() menuOpenEmmiter: EventEmitter<boolean> = new EventEmitter(); 

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
      title: 'GALLERIES',
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
  ];

  constructor(private route: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 40) {
      this.paddingValue = '85px';
    } else {
      this.paddingValue = '125px';
    }
  }

  onNavClick(){
    this.menuOpen = false;
    this.menuOpenEmmiter.emit(this.menuOpen);
    let checkBox = <HTMLInputElement> document.getElementById('ham-menu');
    checkBox.checked = false;
  }
  

  ngOnInit(): void {}

}
