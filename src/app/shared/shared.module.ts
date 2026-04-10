import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule,
    RouterModule,
    ThemeToggleComponent
  ],
exports: [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  ThemeToggleComponent
]
})
export class SharedModule { }
