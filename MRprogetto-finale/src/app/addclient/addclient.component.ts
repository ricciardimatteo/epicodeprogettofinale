import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  comune: any = {
        nome: "",
      }
  newClient: any = { id: '', ragioneSociale: '', partitaIva: '', tipoCliente: '', email: '', pec: '', telefono: '', nomeContatto: '', cognomeContatto: '', telefonoContatto: '', emailContatto: '', 
  indirizzoSedeOperativa: { id: '', via: '', civico: '', cap: '', localita: '', 
  comune: { id: '', nome: '', 
  provincia: { id: '', nome: '', sigla: '' } } }, 
  indirizzoSedeLegale: { id: '', via: '', civico: '', cap: '', localita: '', 
  comune: { id: '', nome: '', provincia: { id: '', nome: '', sigla: '' } } }, 
  dataInserimento: '', dataUltimoContatto: '', fatturatoAnnuale: '' }
  constructor() { }

  ngOnInit(): void {
  }

}
