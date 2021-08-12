import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  stato:any
  clienti:any = {
  ragioneSociale:""
  }
  newClient:any={
    id:1,
    data:new Date,
    numero:1,
    anno:new Date().getFullYear(),
    importo:1,
    stato:{
    id: 1,
    nome: ""
}
,cliente:{"":1}}


  constructor(private router: ActivatedRoute, private fattureservice:FattureService, private route:Router, private serviceclienti:AnagraficaService) { }

  ngOnInit(): void {
    this.serviceclienti.getclienti().subscribe(resp=>this.clienti=resp)
    this.fattureservice.getfatturastato().subscribe(data => this.stato=data)
    
  }
  addfattura(): void {

  }
}