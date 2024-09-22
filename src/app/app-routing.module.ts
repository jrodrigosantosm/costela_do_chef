import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkBioComponent } from './components/link-bio/link-bio.component';
import { CardapioDigitalComponent } from './components/cardapio-digital/cardapio-digital.component';

const routes: Routes = [
  { path: 'link', component: LinkBioComponent },
  { path: 'cardapio', component: CardapioDigitalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
