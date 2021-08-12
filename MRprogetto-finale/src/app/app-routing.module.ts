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
import { SbloccaRoutesService } from './services/sblocca-routes.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'platformazienda/index', pathMatch: 'full' },
  { path: 'platformazienda/index', component:HomeLoginComponent},
  { path: 'platformazienda/signup', component:SignUpComponent},
  { path: 'platformazienda', component:AnagraficaclientsComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/nuovocliente', component:AddclientComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/:id/modificacliente', component:ModificaclienteComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/fattureinsolute', component:FattureComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/:id/sedeOperativa', component:SedeOperativaComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/:id/sedeLegale', component:SedeLegaleComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/:id/datiReferente', component:DatiReferenteComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/:id/invoice', component:GetfatturaComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/archiviofatture', component:ArchivioFattureComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/fatturesaldate', component:FattureSaldateComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/fattureinsolute/:id/editinvoice', component:EditFattureComponent,canActivate:[SbloccaRoutesService]},
  { path: 'platformazienda/newfattura', component:NewInvoiceComponent,canActivate:[SbloccaRoutesService]},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
