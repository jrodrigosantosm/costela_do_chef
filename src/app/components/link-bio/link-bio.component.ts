import { Component } from '@angular/core';

@Component({
  selector: 'app-link-bio',
  templateUrl: './link-bio.component.html',
  styleUrls: ['./link-bio.component.scss']
})
export class LinkBioComponent {
  whatsapp() {
    window.location.href = 'https://bit.ly/QUEROMINHACOSTELA';
  }

  cardapio() {
    window.location.href = '/cardapio';
  }

  pedido() {
    window.location.href = '/pedido';
  }
}
