import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent {
  cards = [
    { title: 'ANSIEDADE'},
    { title: 'DEPRESSÃO'},
    { title: 'PROBLEMAS NO TRABALHO'},
    { title: 'AUTOESTIMA'},
    { title: 'Problemas no relacionamento' },
    { title: 'Dependência emocional' },
    { title: 'Habilidades sociais' },
    { title: 'Resolução de problemas' },
    { title: 'Timidez' },
  ];

  // Configuração do carousel
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 128,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}

