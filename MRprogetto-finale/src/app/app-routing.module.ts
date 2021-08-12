import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { AnagraficaclientsComponent } from './anagraficaclients/anagraficaclients.component';
import { ArchivioFattureComponent } from './archivio-fatture/archivio-fatture.component';
import { DatiReferenteComponent } from './dati-referente/dati-referente.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { FattureSaldateComponent } from './fatture-saldate/fatture-saldate.component';
import { FattureComponent } from './fatture/fatture.component';
import { GetfatturaComponent } from './getfattura/getfattura.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ModificaclienteComponent } from './modificacliente/modificacliente.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { SedeLegaleComponent } from './sede-legale/sede-legale.component';
import { SedeOperativaComponent } from './sede-operativa/sede-operativa.component';

const routes: Routes = [
  { path: '', redirectTo: 'platformazienda/index', pathMatch: 'full' },
  { path: 'platformazienda/index', component:HomeLoginComponent},
  { path: 'platformazienda', component:AnagraficaclientsComponent},
  { path: 'platformazienda/nuovocliente', component:AddclientComponent},
  { path: 'platformazienda/:id/modificacliente', component:ModificaclienteComponent},
  { path: 'platformazienda/fattureinsolute', component:FattureComponent},
  { path: 'platformazienda/:id/sedeOperativa', component:SedeOperativaComponent},
  { path: 'platformazienda/:id/sedeLegale', component:SedeLegaleComponent},
  { path: 'platformazienda/:id/datiReferente', component:DatiReferenteComponent},
  { path: 'platformazienda/:id/invoice', component:GetfatturaComponent},
  { path: 'platformazienda/archiviofatture', component:ArchivioFattureComponent},
  { path: 'platformazienda/fatturesaldate', component:FattureSaldateComponent},
  { path: 'platformazienda/fattureinsolute/:id/editinvoice', component:EditFattureComponent},
  { path: 'platformazienda/newfattura', component:NewInvoiceComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
