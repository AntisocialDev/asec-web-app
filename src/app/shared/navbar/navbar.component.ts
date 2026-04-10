import { Component,Input,Output,EventEmitter,OnChanges, HostListener, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges, OnInit, OnDestroy {

  navbarFixed: boolean = false;
  menuOpen: boolean = false;
  isDarkMode: boolean = false;
  private themeSub?: Subscription;

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

  constructor(private themeService: ThemeService){
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

  ngOnInit(): void {
    // initialize theme state
    this.isDarkMode = this.themeService.darkMode();
    this.themeSub = this.themeService.darkMode$.subscribe((v: boolean) => {
      this.isDarkMode = v;
    });
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
  }
  
}
