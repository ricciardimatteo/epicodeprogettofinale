import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  comune: any = {
    nome: "",
  }
  tipocliente: any 
  
  province: any = {
    nome: "",
    sigla: "",
  }
  obj: any
  newClient: any = {
    ragioneSociale: '', 
    partitaIva: '',
     tipoCliente: '', 
     email: '', 
     pec: '', 
     telefono: '', 
     nomeContatto: '', 
     cognomeContatto: '',
      telefonoContatto: '', 
      emailContatto: '',
    indirizzoSedeOperativa: {
      id:1, 
      via: '', 
      civico: '',
       cap: '', 
       localita: '',
      comune: {
        id: '', 
        nome: '',
        provincia:  { id: '', nome: '', sigla: '' }
      }
    },
    indirizzoSedeLegale: {
      id:1,
       via: '', 
       civico: '', 
       cap: '', 
       localita: '',
      comune: { 
        id: 1, 
        nome: '', 
        provincia: { id: 1, nome: '', sigla: '' } }
    },
    dataInserimento: '', dataUltimoContatto: '', fatturatoAnnuale: ''
  }



  constructor(private router: Router, private anagraficaservice:AnagraficaService) { }

  ngOnInit(): void {
    this.anagraficaservice.getTipoCliente().subscribe(response=>this.tipocliente=response),
    this.anagraficaservice.getComuni().subscribe(data=> this.comune= data),
    this.anagraficaservice.getProvince().subscribe(resp=> this.province=resp)
  }
  
  adduser(){
    console.log(this.newClient)
  this.anagraficaservice.addCliente(this.newClient).subscribe(resp=> console.log(resp));
  }


}
