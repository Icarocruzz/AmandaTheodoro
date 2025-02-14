import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {BannerComponent} from './components/banner/banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AmandaNovo';
}
