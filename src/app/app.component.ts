import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {BannerComponent} from './components/banner/banner.component';
import {ObjetivosComponent} from './components/objetivos/objetivos.component';
import {AtendimentosComponent} from './components/atendimentos/atendimentos.component';
import {CarrosselComponent} from './components/carrossel/carrossel.component';
import {AboutComponent} from './components/about/about.component';
import {BeneficiosComponent} from './components/beneficios/beneficios.component';
import {AcompanhamentoComponent} from './components/acompanhamento/acompanhamento.component';
import {FooterComponent} from './components/footer/footer.component';
import {DevComponent} from './components/dev/dev.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, BannerComponent, ObjetivosComponent, AtendimentosComponent, CarrosselComponent, AboutComponent, BeneficiosComponent, AcompanhamentoComponent, FooterComponent, DevComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AmandaNovo';
}
