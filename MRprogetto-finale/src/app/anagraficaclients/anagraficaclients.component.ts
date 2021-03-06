import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnagraficaService } from '../services/anagrafica.service';

@Component({
  selector: 'app-anagraficaclients',
  templateUrl: './anagraficaclients.component.html',
  styleUrls: ['./anagraficaclients.component.css']
})
export class AnagraficaclientsComponent implements OnInit {
clienti:any


  constructor(
    private anagraficaservice:AnagraficaService,
    private route:Router,
    
    ) { }

  ngOnInit(): void {
  this.anagraficaservice.getclienti()
  .subscribe (response =>this.clienti = response );
  }

  removeuser(item:any):void {
    alert('Utente Rimosso')
    this.anagraficaservice.deleteCliente(item.id).subscribe(response =>this.anagraficaservice.getclienti()
    .subscribe (response =>this.clienti = response ));
    
  }

sedeoperativa(item:any): void {
  this.route.navigate(['platformazienda',item.id,'sedeOperativa']);
}

sedelegale(item:any): void {
  this.route.navigate(['platformazienda',item.id,'sedeLegale']);
}

referente(item:any): void {
  this.route.navigate(['platformazienda',item.id,'datiReferente']);
}
gotofatture(item:any): void {
  this.route.navigate(['platformazienda',item.id,'invoice'])
}

gotomodifica (item:any): void {
  this.route.navigate(['platformazienda',item.id,'modificacliente'])
}





}
