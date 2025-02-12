import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuValue:boolean = false;
  menu_icon:string = 'fa-solid fa-bars'

  openMenu () {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'fa-solid fa-x' : 'fa-solid fa-bars';
  }

  closeMenu () {
    this.menuValue = false;
    this.menu_icon = 'fa-solid fa-bars';
  }
}
