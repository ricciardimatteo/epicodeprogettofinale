import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AnagraficaclientsComponent } from './anagraficaclients/anagraficaclients.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ModificaclienteComponent } from './modificacliente/modificacliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeLoginComponent,
    AnagraficaclientsComponent,
    AddclientComponent,
    ModificaclienteComponent,
    FattureComponent
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
