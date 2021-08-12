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
import { MaterialModule } from 'src/material-module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { SedeOperativaComponent } from './sede-operativa/sede-operativa.component';
import { SedeLegaleComponent } from './sede-legale/sede-legale.component';
import { DatiReferenteComponent } from './dati-referente/dati-referente.component';
import { GetfatturaComponent } from './getfattura/getfattura.component';
import { ArchivioFattureComponent } from './archivio-fatture/archivio-fatture.component';
import { FattureSaldateComponent } from './fatture-saldate/fatture-saldate.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeLoginComponent,
    AnagraficaclientsComponent,
    AddclientComponent,
    ModificaclienteComponent,
    FattureComponent,
    SedeOperativaComponent,
    SedeLegaleComponent,
    DatiReferenteComponent,
    GetfatturaComponent,
    ArchivioFattureComponent,
    FattureSaldateComponent,
    EditFattureComponent,
    NewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
