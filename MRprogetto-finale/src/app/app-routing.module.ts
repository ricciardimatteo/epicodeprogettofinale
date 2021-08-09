import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { AnagraficaclientsComponent } from './anagraficaclients/anagraficaclients.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ModificaclienteComponent } from './modificacliente/modificacliente.component';
import { SedeOperativaComponent } from './sede-operativa/sede-operativa.component';

const routes: Routes = [
  { path: '', redirectTo: 'platformazienda/index', pathMatch: 'full' },
  { path: 'platformazienda/index', component:HomeLoginComponent},
  { path: 'platformazienda', component:AnagraficaclientsComponent},
  { path: 'platformazienda/nuovocliente', component:AddclientComponent},
  { path: 'platformazienda/modificacliente', component:ModificaclienteComponent},
  { path: 'platformazienda/fatture', component:FattureComponent},
  { path: 'platformazienda/:id/sedeOperativa', component:SedeOperativaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
