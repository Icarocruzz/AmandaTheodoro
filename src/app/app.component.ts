import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {BannerComponent} from './components/banner/banner.component';
import {ObjetivosComponent} from './components/objetivos/objetivos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BannerComponent, ObjetivosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AmandaNovo';
}
