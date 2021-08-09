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
  this.anagraficaservice.getAllClientipag(0).subscribe(response => this.clienti = response);
  }

  getPaginations(pagination:number): void {
  this.anagraficaservice.getAllClientipag(pagination).subscribe(data => this.clienti =data);
}

sedeoperativa(item:any): void {
  this.route.navigate(['platformazienda',item.id,'sedeOperativa']);
}
}
