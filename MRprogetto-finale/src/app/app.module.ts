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
<<<<<<< HEAD
=======
import { MaterialModule } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
>>>>>>> d7e56e11e5714b7a9d01e48fcd0d90ccb6436aa7

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
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
>>>>>>> d7e56e11e5714b7a9d01e48fcd0d90ccb6436aa7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
