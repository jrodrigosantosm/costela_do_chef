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
    window.location.href = 'https://drive.google.com/file/d/1n4YrG3745GAihuPPYZVtcEJVq9KqSWr1/view?usp=sharing';
  }
}
