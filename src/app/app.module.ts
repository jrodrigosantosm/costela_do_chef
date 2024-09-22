import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinkBioComponent } from './components/link-bio/link-bio.component';
import { CardapioDigitalComponent } from './components/cardapio-digital/cardapio-digital.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBioComponent,
    CardapioDigitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
