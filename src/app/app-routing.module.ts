import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkBioComponent } from './components/link-bio/link-bio.component';
import { CardapioDigitalComponent } from './components/cardapio-digital/cardapio-digital.component';
import { PedidoItemComponent } from './components/pedido-item/pedido-item.component';

const routes: Routes = [
  { path: 'link', component: LinkBioComponent },
  { path: 'cardapio', component: CardapioDigitalComponent },
  { path: 'pedido', component: PedidoItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
