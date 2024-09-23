import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinkBioComponent } from './components/link-bio/link-bio.component';
import { CardapioDigitalComponent } from './components/cardapio-digital/cardapio-digital.component';
import { PedidoItemComponent } from './components/pedido-item/pedido-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LinkBioComponent,
    CardapioDigitalComponent,
    PedidoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
